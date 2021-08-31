import LandingPage from 'pages/LandingPage';
import { firebase } from '../firebase/firebaseConfig'
import React, { useState } from 'react'
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import App from './App';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import '../components/onda.css'
import { getToken } from 'actions/auth';
import audiApi from 'api/audiApi';
import { setImagen } from 'actions/auth';
import { getEstado } from 'actions/auth';
import axios from 'axios';
import { reduxSaveAudit } from 'actions/audit';


// import { LoginScreen } from '../components/login/LoginScreen';
// import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const dispatch = useDispatch()

    const [auditObtained, setauditObtained] = useState([])
    const [auditSectionObtainedAll, setauditSectionObtainedAll] = useState([])
    const [auditPointObtained, setauditPointObtained] = useState([])
    const [auditReviewObtained, setauditReviewObtained] = useState([])
    const [checking, setchecking] = useState(true)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [isPre, setisPre] = useState(false)
    const [users, setusers] = useState([])
    const [company, setcompany] = useState([])
    const [companyLogo, setCompanyLogo] = useState('')
    const [stateApp, setstateApp] = useState(false)

    const { name, _email, uid, estado: estad, companyId, token } = useSelector(state => state.auth)

    const usuario = users.filter(user => user.email == _email)
    const logo = company.filter(company => company.id == companyId);

    useEffect(() => {

        firebase.auth().onAuthStateChanged(async (user) => {

            if (user?.uid) {
                await dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
                await obtenerToken("demo", "123456")
                await dispatch(getEstado(usuario[0]?.state, usuario[0]?.id, usuario[0]?.companyID));
                await setisLoggedIn(true)
                if (usuario[0]) {
                    localStorage.setItem('estado', usuario[0]?.state)

                } else {

                }
            } else {
                setisLoggedIn(false)
            }
            setchecking(false)
        })


    }, [dispatch, setchecking, setisLoggedIn, usuario[0]?.state, token, _email])





    useEffect(() => {
        is_pre_Auth()
    }, [])

    useEffect(() => {
        getUsers()
        getCompany()
    }, [])

    const is_pre_Auth = () => {
        if (estad === 1) {
            setstateApp(true)
        }
    }


    const obtenerToken = async (UserName, Password) => {

        try {
            const { data: token } = await audiApi.post('/Auth/Authenticate', { UserName, Password });

            // console.log(`token ${token}`);
            dispatch(getToken(token))
            // dispatch({
            //     type: 'signUp',
            //     payload: {
            //         token: token,
            //         // user: data.usuario
            //     }
            // });

            localStorage.setItem('token', token);
            // localStorage.removeItem('token')
            // const toke = localStorage.getItem('token')


        } catch (error) {
            console.log(error);
            // dispatch({ 
            //     type: 'addError', 
            //     payload: error.response.data.msg || 'Datos no validos'
            // })
        }

    }

    const getUsers = async () => {
        const { data } = await audiApi.get('/user')
        setusers([...data])
    }

    // useEffect(() => {
    //     dispatch(estado(usuario[0]?.state, usuario[0]?.id, usuario[0]?.companyID));
    // }, [usuario[0]?.state])


    const getCompany = async () => {
        const { data } = await audiApi.get('/Company')
        setcompany(data);
    }


    // if (usuario[0]?.state == 1) {
    //     dispatch( estado(1) )
    // }
    useEffect(() => {
        dispatch(setImagen(logo[0]?.logoImageURL, logo[0]?.name))
    }, [logo[0]?.logoImageURL, logo[0]?.name])





    useEffect(() => {
        const source = axios.CancelToken.source()
        const getData = async () => {
            try {
                const { data: audit } = await audiApi.get("/Audit")
                const { data: AuditSection } = await audiApi.get("/AuditSection")
                const { data: AuditPoint } = await audiApi.get("/AuditPoint")
                const { data: auditReview } = await audiApi.get("/AuditReview")
                setauditObtained(audit.filter(aud => aud.companyID == companyId))
                setauditSectionObtainedAll(AuditSection)
                setauditPointObtained(AuditPoint)
                setauditReviewObtained(auditReview)
                dispatch(reduxSaveAudit(audit, AuditSection, AuditPoint, auditReview))
            } catch (error) {
                if (audiApi.isCancel(error)) {

                } else {
                    throw error
                }
            }
        }
        getData()

        return () => {
            source.cancel()
        }
    }, [])




    if (checking) {
        return (
            <div className="preloader">
                <img src="https://i.imgur.com/cWGLRFJ.png" alt="" />
            </div>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLoggedIn}
                        exact path="/auditas"
                        component={LandingPage}
                        estad={estad}
                    />

                    <PrivateRoute
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={App}
                        estad={estad}
                    />
                </Switch>
            </div>
        </Router>
    )
}
