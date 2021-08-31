import { useForm } from "hooks/useForm";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import audiApi from 'api/audiApi'
import logo from "../../assets/icon-auditas.png"
import CrearCuenta from "./CrearCuenta";
import { login, startLoginEmailPassword, startGoogleLogin } from "actions/auth";
import { useSelector } from "react-redux";
import { CustomCard } from "./CustomCard";
import { planSelection } from "actions/auth";





export default function Modal({ nombre, clase, titulo, dialogo }) {

    const dispatch = useDispatch()

    const { loanding } = useSelector(state => state.ui)

    const [showModal, setShowModal] = useState(false);
    const [plan, setplan] = useState(null)
    const [formularioIsActive, setformularioIsActive] = useState(false)

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })


    const { email, password } = values

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        dispatch(startGoogleLogin());
    }


    // *****************
    let useClickOutside = (handler) => {
        let domNode = useRef();

        useEffect(() => {
            let maybeHandler = (event) => {
                if (!domNode.current?.contains(event.target)) {
                    handler();
                }
            };

            document.addEventListener("mousedown", maybeHandler);

            return () => {
                document.removeEventListener("mousedown", maybeHandler);
            };
        });

        return domNode;

    };


    let domNode = useClickOutside(() => {
        setShowModal(false);
    });

    // *****************


    return (
        <>
            <button
                className={clase}
                type="button"
                onClick={() => setShowModal(true)}
            >
                <i className="fas fa-sign-in-alt text-lg leading-lg text-gray-700 opacity-75"></i>
                <span className='ml-2' > {nombre}</span>
            </button>
            {showModal ? (
                <>
                    <div

                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div ref={domNode} className="relative w-auto  my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col z-20 w-full bg-gray-100 outline-none focus:outline-none">
                                {/*content*/}
                                {!formularioIsActive &&
                                    <div className='relative top-40 -mt-36  m-4' >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#33f" fillOpacity="0.9" d="M0,0L60,5.3C120,11,240,21,360,64C480,107,600,181,720,181.3C840,181,960,107,1080,80C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                                    </div>
                                }
                                {
                                    formularioIsActive ?
                                        <CrearCuenta />
                                        :
                                        <div className='bg-white m-4 flex flex-col items-center p-5 max-w-xl ' >

                                            <img
                                                className='w-16 z-10'
                                                src={logo}
                                                alt="logo"
                                            />
                                            {
                                                titulo ?
                                                    <h1 className='my-3 font-medium text-lg' >{titulo}</h1>
                                                    : null
                                            }
                                            {
                                                dialogo ?
                                                    <p className='my-3 text-gray-500 text-center ' >{dialogo}</p>
                                                    : null
                                            }
                                            {
                                                titulo == 'Ingresa a tu cuenta' &&
                                                <div>
                                                    <form onSubmit={handleLogin} >
                                                        <div className='flex flex-col items-center' >

                                                            <div className='my-3 px-7 sm:grid grid-cols-6 ' >
                                                                <label className='text-gray-500 font-bold mr-4 col-span-2 gap-1' htmlFor="">Email</label>
                                                                <input
                                                                    name='email'
                                                                    value={email}
                                                                    onChange={handleInputChange}
                                                                    className='rounded bg-gray-200 px-4 py-1 w-full  focus:outline-none col-span-4'
                                                                    type="text" />
                                                            </div>

                                                            <div className='my-3 px-7 sm:grid grid-cols-6 ' >
                                                                <label className='text-gray-500 font-bold mr-4 col-span-2 gap-1' htmlFor="">Password</label>
                                                                <input
                                                                    name='password'
                                                                    value={password}
                                                                    onChange={handleInputChange}
                                                                    className='rounded bg-gray-200 px-4 py-1 w-full  focus:outline-none col-span-4'
                                                                    type="password" />
                                                            </div>
                                                            <button
                                                                type="submit"
                                                                disabled={loanding}
                                                                className='bg-white my-3 active:bg-gray-100 text-gray-800 px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
                                                            >
                                                                Ingresar
                                                            </button>

                                                            {/* <Link
                                                                to='/app'
                                                                className='bg-white my-3 active:bg-gray-100 text-gray-800 px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs' >
                                                                Ingresar
                                                            </Link > */}

                                                        </div>

                                                    </form>
                                                </div>
                                            }



                                            <button
                                                onClick={handleGoogleLogin}
                                                className='bg-white my-3 active:bg-gray-100 text-gray-800 px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs' >
                                                <svg width="18" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="w-5 mr-1"><g fill="none" fillRule="evenodd"><path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" fillRule="nonzero"></path><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" fillRule="nonzero"></path><path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" fillRule="nonzero"></path><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" fillRule="nonzero"></path><path d="M0 0h18v18H0z"></path></g></svg>
                                                Inicia sesión con Google
                                            </button>


                                            <div className='my-3' >
                                                <button
                                                    onClick={() => setformularioIsActive(true)}
                                                    className='bg-white my-3 active:bg-gray-100 text-gray-800 px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
                                                >
                                                    O ingresa tus datos para una cuenta nueva
                                                </button>
                                            </div>
                                            {
                                                nombre === "Empezar" ?
                                                    <div>
                                                        <div className='flex lg:flex lg:flex-row gap-8 my-5 items-center ' >
                                                            <div
                                                                onClick={() => setplan('Plan Básico')}
                                                                className='w-5/6  lg:w-2/6  bg-white border border-opacity-25 rounded-lg neumo cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
                                                                {plan == 'Plan Básico' &&
                                                                    <div className='absolute -right-5 -top-6'>
                                                                        <i className="far fa-check-circle fa-3x text-green-500 "></i>
                                                                    </div>
                                                                }
                                                                <div className='-mt-5 -ml-6  relative ' >
                                                                    <svg viewBox="15 8 170 150" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill="#3333FF" d="M57.2,-45.7C70,-29.6,73.3,-6,64,6.6C54.7,19.2,32.8,20.9,14.8,29C-3.3,37,-17.4,51.3,-27.6,49.4C-37.8,47.6,-44.1,29.5,-48.3,11C-52.6,-7.6,-55,-26.6,-46.6,-41.8C-38.2,-57,-19.1,-68.2,1.5,-69.4C22.2,-70.7,44.4,-61.9,57.2,-45.7Z" transform="translate(100 100)" />
                                                                        <text className='font-light text-sm' x="65" y="70" fill="white" stroke="white" strokeWidth="0">Plan Básico</text>
                                                                        <text className='font-normal text-sm' x="79" y="88" fill="white" stroke="white" strokeWidth="0">$</text>
                                                                        <text className='font-medium text-3xl' x="88" y="103" fill="white" stroke="white" strokeWidth="0">20</text>
                                                                        <text className='font-medium text-sm' x="123" y="103" fill="white" stroke="white" strokeWidth="0">/mo</text>
                                                                    </svg>
                                                                </div>

                                                                <div className='text-center mx-1 text-gray-700  ' >
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor sit amet.</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor  amet.</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor sit .</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum, dolor sit amet </p>
                                                                </div>
                                                                <div className='text-center -mt-16' >
                                                                    <div style={{ height: '50px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: ' 100%', width: '100%' }}><path d="M-18.90,18.25 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#33f' }}></path></svg></div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                onClick={() => setplan('Plan Estándar')}
                                                                className='w-5/6  lg:w-2/6  bg-white border border-opacity-25 rounded-lg neumo cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
                                                                {plan == 'Plan Estándar' &&
                                                                    <div className='absolute -right-5 -top-6'>
                                                                        <i className="far fa-check-circle fa-3x text-green-500 "></i>
                                                                    </div>
                                                                }
                                                                <div className='-mt-5 -ml-6  relative ' >
                                                                    <svg viewBox="15 8 170 150" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill="#3333FF" d="M57.2,-45.7C70,-29.6,73.3,-6,64,6.6C54.7,19.2,32.8,20.9,14.8,29C-3.3,37,-17.4,51.3,-27.6,49.4C-37.8,47.6,-44.1,29.5,-48.3,11C-52.6,-7.6,-55,-26.6,-46.6,-41.8C-38.2,-57,-19.1,-68.2,1.5,-69.4C22.2,-70.7,44.4,-61.9,57.2,-45.7Z" transform="translate(100 100)" />
                                                                        <text className='font-light text-sm' x="65" y="70" fill="white" stroke="white" strokeWidth="0">Plan Estándar</text>
                                                                        <text className='font-normal text-sm' x="79" y="88" fill="white" stroke="white" strokeWidth="0">$</text>
                                                                        <text className='font-medium text-3xl' x="88" y="103" fill="white" stroke="white" strokeWidth="0">50</text>
                                                                        <text className='font-medium text-sm' x="123" y="103" fill="white" stroke="white" strokeWidth="0">/mo</text>
                                                                    </svg>
                                                                </div>

                                                                <div className='text-center mx-1 text-gray-700  ' >
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor sit amet.</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor  amet.</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor sit .</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum, dolor sit amet </p>
                                                                </div>
                                                                <div className='text-center -mt-16' >
                                                                    <div style={{ height: '50px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: ' 100%', width: '100%' }}><path d="M-18.90,18.25 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#33f' }}></path></svg></div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                onClick={() => setplan('Plan Premium')}
                                                                className='w-5/6  lg:w-2/6  bg-white border border-opacity-25 rounded-lg neumo cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
                                                                {plan == 'Plan Premium' &&
                                                                    <div className='absolute -right-5 -top-6'>
                                                                        <i className="far fa-check-circle fa-3x text-green-500 "></i>
                                                                    </div>
                                                                }
                                                                <div className='-mt-5 -ml-6  relative ' >
                                                                    <svg viewBox="15 8 170 150" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill="#3333FF" d="M57.2,-45.7C70,-29.6,73.3,-6,64,6.6C54.7,19.2,32.8,20.9,14.8,29C-3.3,37,-17.4,51.3,-27.6,49.4C-37.8,47.6,-44.1,29.5,-48.3,11C-52.6,-7.6,-55,-26.6,-46.6,-41.8C-38.2,-57,-19.1,-68.2,1.5,-69.4C22.2,-70.7,44.4,-61.9,57.2,-45.7Z" transform="translate(100 100)" />
                                                                        <text className='font-light text-sm' x="65" y="70" fill="white" stroke="white" strokeWidth="0">Plan Premium</text>
                                                                        <text className='font-normal text-sm' x="79" y="88" fill="white" stroke="white" strokeWidth="0">$</text>
                                                                        <text className='font-medium text-3xl' x="88" y="103" fill="white" stroke="white" strokeWidth="0">70</text>
                                                                        <text className='font-medium text-sm' x="123" y="103" fill="white" stroke="white" strokeWidth="0">/mo</text>
                                                                    </svg>
                                                                </div>

                                                                <div className='text-center mx-1 text-gray-700  ' >
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor sit amet.</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor  amet.</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum dolor sit .</p>
                                                                    <p className='my-4 text-xs ' >Lorem ipsum, dolor sit amet </p>
                                                                </div>
                                                                <div className='text-center -mt-16' >
                                                                    <div style={{ height: '50px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: ' 100%', width: '100%' }}><path d="M-18.90,18.25 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#33f' }}></path></svg></div>
                                                                </div>
                                                            </div>
                                                            {/* <CustomCard titulo='Plan Básico' precio='20' />
        <CustomCard titulo='Plan Estándar' precio='50' />
        <CustomCard titulo='Plan Premium' precio='70' /> */}
                                                        </div>
                                                    </div>
                                                    : null
                                            }


                                        </div>

                                }
                            </div>

                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}



// <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//     <button
//         className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(false)}
//     >
//         Cerrar
//     </button>
//     <button
//         className="bg-yellow-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(false)}
//     >
//         Continuar
//     </button>
// </div>