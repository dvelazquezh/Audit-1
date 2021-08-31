import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import Swal from 'sweetalert2'
import { types } from "types/types"
import { finishLoading, startLoading } from './ui'
import { useDispatch } from 'react-redux'
import audiApi from 'api/audiApi'
import { fileUpload } from 'helpers/fileUpload'


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName, user.email))
                dispatch(finishLoading())
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading())
                Swal.fire('Error', e.message, 'error')
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, nombre) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: nombre })

                dispatch(
                    login(user.uid, user.displayName, user.email)
                )
                saveUser(user.displayName, user.displayName, user.uid, user.email, 1)
            })
            .catch(e => {
                Swal.fire('Error', e.message, 'error')
            })
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                console.log(user);
                // SignIn({ UserName: "demo", Password: "123456" })
                dispatch(
                    login(user.uid, user.displayName, user.email, user.photoURL,0)
                )
                saveUser(user.displayName, user.displayName, user.uid, user.email, 1)
                localStorage.setItem('estado', 0)
            })
    }
}


export const login = (uid, displayName, email, photoURL,estado=0) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            email,
            photoURL,
            estado
        }
    }
}

export const token = (token) => {
    return {
        type: types.token,
        payload: {
            token
        }
    }
}

export const getEstado = (state=0, id, CompanyID) => {
    return {
        type: types.state,
        payload: {
            state,
            id,
            CompanyID
        }
    }
}

export const startLogout = (uid, displayName) => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout())
        localStorage.removeItem('token')
        localStorage.removeItem('estado')
    }
}


export const logout = () => ({
    type: types.logout
})



export const checkIfUserExists = async () => {

}


export const authxApi = async () => {

}

// SignIn({ UserName: "demo", Password: "123456" })
export const getToken = (token) => ({
    type: types.token,
    payload: {
        token
    }
})
// try {
//     const { data: token } = await audiApi.post('/Auth/Authenticate', { UserName: user, Password: password });
//     console.log(token);
//     return async (dispatch) => {
//         dispatch(token(token))
//     }
// } catch (error) {
//     console.log(error);
// }


// export const startGoogleLogin = () => {
//     return (dispatch) => {
//         firebase.auth().signInWithPopup(googleAuthProvider)
//             .then(({ user }) => {
//                 console.log(user.email);
//                 // SignIn({ UserName: "demo", Password: "123456" })
//                 dispatch(
//                     login(user.uid, user.displayName, user.email)
//                 )
//             })
//     }
// }



// export  const SignIn = async ({ UserName, Password }) => {

//     const dispatch = useDispatch()

//     try {

//         const { data: token } = await audiApi.post('/Auth/Authenticate', { UserName, Password });

//         console.log(`token ${token}`);
//         console.log("asdasdasdasd");

//         dispatch({ 
//             type: 'signUp',
//             payload: {
//                 token: token,
//                 // user: data.usuario
//             }
//         });

//         localStorage.setItem('token', token );
//         // localStorage.removeItem('token')
//         // const toke = localStorage.getItem('token')


//     } catch (error) {
//         console.log(error);
//         // dispatch({ 
//         //     type: 'addError', 
//         //     payload: error.response.data.msg || 'Datos no validos'
//         // })
//     }
// };



const saveUser = async (fullName, userName, password, email, state) => {
    const data = await audiApi.post('/user', {
        withCredentials: true,
        fullName, userName, password, email, state
    })
}


export const startUploading = (file) => {
    return async (dispatch) => {

        const fileUrl = await fileUpload(file)
        dispatch(addimage(fileUrl))
    }
}

const addimage = (file) => ({
    type: types.companyFile,
    payload: {
        file
    }
})

export const setImagen = (logo,company) => ({
    type: types.logo,
    payload:{
        logo,
        company
    }
})


export const planSelection = (plan) => ({
    type: types.selectPlan,
    payload: plan
})

