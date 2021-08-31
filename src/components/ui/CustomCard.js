import { planSelection } from 'actions/auth'
import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../onda.css'

export const CustomCard = ({ precio, titulo }) => {

    const dispatch = useDispatch()
    const [isCheck, setisCheck] = useState(false)

    return (
        <>
            <div
                onClick={ () => dispatch(planSelection(titulo)) } 
                className='w-5/6  lg:w-2/6  bg-white border border-opacity-25 rounded-lg neumo cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
                <div className='absolute -right-5 -top-6'>
                    <i className="far fa-check-circle fa-3x text-green-500 "></i>
                </div>
                <div className='-mt-5 -ml-6  relative ' >
                    <svg viewBox="15 8 170 150" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#3333FF" d="M57.2,-45.7C70,-29.6,73.3,-6,64,6.6C54.7,19.2,32.8,20.9,14.8,29C-3.3,37,-17.4,51.3,-27.6,49.4C-37.8,47.6,-44.1,29.5,-48.3,11C-52.6,-7.6,-55,-26.6,-46.6,-41.8C-38.2,-57,-19.1,-68.2,1.5,-69.4C22.2,-70.7,44.4,-61.9,57.2,-45.7Z" transform="translate(100 100)" />
                        <text className='font-light text-sm' x="65" y="70" fill="white" stroke="white" strokeWidth="0">{titulo}</text>
                        <text className='font-normal text-sm' x="79" y="88" fill="white" stroke="white" strokeWidth="0">$</text>
                        <text className='font-medium text-3xl' x="88" y="103" fill="white" stroke="white" strokeWidth="0">{precio}</text>
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
        </>
    )
}






// <div className='w-5/6  lg:w-2/6  bg-white border border-opacity-25 rounded-lg neumo' >
//     <div className='-mt-6 -ml-6 relative ' >
//         <svg viewBox="15 8 170 150" xmlns="http://www.w3.org/2000/svg">
//             <path fill="#3333FF" d="M57.2,-45.7C70,-29.6,73.3,-6,64,6.6C54.7,19.2,32.8,20.9,14.8,29C-3.3,37,-17.4,51.3,-27.6,49.4C-37.8,47.6,-44.1,29.5,-48.3,11C-52.6,-7.6,-55,-26.6,-46.6,-41.8C-38.2,-57,-19.1,-68.2,1.5,-69.4C22.2,-70.7,44.4,-61.9,57.2,-45.7Z" transform="translate(100 100)" />
//             <text className='font-light text-sm' x="65" y="70" fill="white" stroke="white" strokeWidth="0">{titulo}</text>
//             <text className='font-normal text-sm' x="79" y="88" fill="white" stroke="white" strokeWidth="0">$</text>
//             <text className='font-medium text-3xl' x="88" y="103" fill="white" stroke="white" strokeWidth="0">{precio}</text>
//             <text className='font-medium text-sm' x="123" y="103" fill="white" stroke="white" strokeWidth="0">/mo</text>
//         </svg>
//     </div>

//     <div className='text-center text-gray-700  ' >
//         <p className='my-4' >Lorem ipsum dolor sit amet.</p>
//         <p className='my-4' >Lorem ipsum dolor  amet.</p>
//         <p className='my-4' >Lorem ipsum dolor sit .</p>
//         <p className='my-4' >Lorem ipsum, dolor sit amet </p>
//         <p className='' >Lorem ipsum dolor sit amet.</p>
//     </div>
//     <div className='text-center ' >
//         <button className='relative top-40 border px-4 py-2 rounded-xl text-xl text-white hover:bg-white hover:text-gray-700 font-medium' >Seleccionar</button>
//         <div style={{ height: '200px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: ' 100%', width: '100%' }}><path d="M-18.90,18.25 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#33f' }}></path></svg></div>
//     </div>
// </div>