import { startRegisterWithEmailPasswordName } from 'actions/auth'
import { removeError, setError } from 'actions/ui'
import { useForm } from 'hooks/useForm'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import useValidacion from '../../hooks/useValidacion'
import validarCrearCuenta from '../../hooks/useValidacion'


const CrearCuenta = () => {

    const dispatch = useDispatch()
    // obtener los datos del store
    const { msgError } = useSelector(state => state.ui)

    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        password: '',
        password2: ''
    })


    const { nombre, email, password, password2 } = values


    //    const {valores, errores, submitForm, handleChange, handleSubmit} = useValidacion(StateInicial,validarCrearCuenta, crearCuenta)

    const handleRegister = (e) => {
        e.preventDefault()

        if (isFormValid()) {
           dispatch( startRegisterWithEmailPasswordName(email, password, nombre) )
        }

    }

    const isFormValid = () => {
        if (nombre.trim().length === 0) {
            dispatch(setError('Nombre requerido'));
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email no valido"));
            return false
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError("Contraseñas no validas"));
            return false
        }

        dispatch(removeError())
        return true;
    }

    return (
        <>
            <div className='py-6 rounded bg-white  ' >
                <h1 className='text-center text-2xl mb-3' >Crear Cuenta</h1>
                {
                    msgError &&
                    <div>
                        <p className='text-red-500 rounded-xl text-center text-xl mb-3' >{msgError}</p>
                    </div>
                }
                <form onSubmit={handleRegister}>
                    <div className='flex flex-col items-center' >
                        <div className='my-3 px-7 sm:grid grid-cols-6 ' >
                            <label className='text-gray-500 font-bold mr-4 col-span-2 gap-1' htmlFor="">Nombre</label>
                            <input onChange={handleInputChange} value={nombre} name='nombre' className='rounded bg-gray-200 px-4 py-1 w-full  focus:outline-none col-span-4' type="text" />
                        </div>
                        <div className='my-3 px-7 sm:grid grid-cols-6 ' >
                            <label className='text-gray-500 font-bold mr-4 col-span-2 gap-1' htmlFor="">Email</label>
                            <input onChange={handleInputChange} value={email} name='email' className='rounded bg-gray-200 px-4 py-1 w-full  focus:outline-none col-span-4' type="email" />
                        </div>
                        <div className='my-3 px-7 sm:grid grid-cols-6 ' >
                            <label className='text-gray-500 font-bold mr-4 col-span-2 gap-1' htmlFor="">Password</label>
                            <input onChange={handleInputChange} value={password} name='password' className='rounded bg-gray-200 px-4 py-1 w-full  focus:outline-none col-span-4' type="password" />
                        </div>
                        <div className='my-3 px-7 sm:grid grid-cols-6 ' >
                            <label className='text-gray-500 font-bold mr-4 col-span-2 gap-1' htmlFor="">Confirmar</label>
                            <input onChange={handleInputChange} value={password2} name='password2' className='rounded bg-gray-200 px-4 py-1 w-full  focus:outline-none col-span-4' type="password" />
                        </div>


                        <div>
                            <button
                                type='submit'
                                className=' bg-white my-3 active:bg-gray-100 text-gray-800 px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs' >
                                Crear cuenta</button>
                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}

export default CrearCuenta
