import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Input from '@material-tailwind/react/Input'
import Icon from '@material-tailwind/react/Icon'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import '../../../components/onda.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'hooks/useForm'
import { agregarSession } from 'actions/sessions'


const short = require('short-uuid');

export const Sessions_questions = ({ setsessions, sessions }) => {

    // const history = useHistory();
    // const { company, name, companyId } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const [inputFiels, setinputFiels] = useState([
        { id: short.uuid(), question: '', type: '', resPersonalizada: false, res: [] },
    ])

    console.log(inputFiels);

    const [values, handleInputChange, reset] = useForm({
        id: short.uuid(),
        nombreSesion: '',
        maxpoin: ''
    })
 
    const { nombreSesion='', maxpoin='' } = values

    console.log(values);
    
    // const handleSessions = (e) => {
    //     setsessions(...sessions, {[e.target.name] : e.target.value})
    //     // setsessions({
    //     //     ...sessions,
    //     //     [e.target.name] : e.target.value
    //     // })
    // }
    


    // console.log(values);

    // useEffect(() => {
    //     dispatch(agregarSession(values))
    // }, [values])




    const { res } = inputFiels[0]


    const handleChangeInput = (e, id) => {
        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i[e.target.name] = e.target.value
            }
            return i
        })
        setinputFiels(newInputFields)
    }

    const handleChangeCustomResponse = (r, id) => {
        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i.res = { ...i.res, r }
            }
            return i
        })
        setinputFiels(newInputFields)
    }

    const handleChangeSelet = (type, id) => {
        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i.type = type
            }
            return i
        })
        setinputFiels(newInputFields)
    }

    const handleAddFields = (e) => {
        e.preventDefault()
        setinputFiels([...inputFiels, { id: short.uuid(), question: '', type: '' }])
    }

    const handleAddCustomResponse = (e, id) => {

        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i.res = [...i.res, { r: '' }]
                console.log(i.res);
            }
            return i
        })
        // setinputFiels(newInputFields)
    }

    const handleRemoveFields = (id) => {
        if (inputFiels.length > 1) {
            const values = [...inputFiels]
            values.splice(values.findIndex(value => value.id === id), 1)
            setinputFiels(values)
        }
    }


    return (
        <div className='mt-16' >
            <h6 className="text-indigo-500 text-sm my-6 font-light uppercase">
                Sesión de auditoría
            </h6>
            <div className='flex' >
                <div className="w-full lg:w-8/12 font-light">
                    <Input
                        value={nombreSesion}
                        onChange={handleInputChange}
                        name='nombreSesion'
                        type="text"
                        placeholder="Nombre Sesión"
                    />
                </div>
                <div className="w-full lg:w-4/12 ml-2 font-light">
                    <Input
                        value={maxpoin}
                        onChange={handleInputChange}
                        name='maxpoin'
                        type="number"
                        mim='0'
                        max='100'
                        placeholder="Puntaje máximo"
                    />
                </div>
            </div>


            {
                inputFiels.map(inputFiel => (
                    <div key={inputFiel.id} className="flex flex-wrap mt-10">
                        <div className='w-full grid grid-cols-10' >
                            <div className='neumo col-span-9 w-full px-3 py-3 grid grid-cols-12 ' >
                                <div className='col-span-8' >
                                    <Input
                                        type="text"
                                        name='question'
                                        onChange={e => handleChangeInput(e, inputFiel.id)}
                                        placeholder="Pregunta"
                                    />
                                </div>

                                {/* {<h1>{console.log(inputFiel.type)}</h1>} */}

                                {!inputFiel.type ?
                                    <div className='col-span-4' >
                                        <Dropdown
                                            placement="bottom-start"
                                            buttonText="Tipo de Pregunta"
                                            buttonType="link"
                                            size="lg"
                                            rounded={false}
                                            block={true}
                                            ripple="dark"
                                        >
                                            <DropdownItem
                                                onClick={() => handleChangeSelet(1, inputFiel.id)}
                                            >
                                                <div className='flex justify-between gap-4' >
                                                    <div className='border border-red-500 text-red-500 rounded-lg px-2 py-1 ' >Mal</div>
                                                    <div className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 ' >Regular</div>
                                                    <div className='border border-green-500 text-green-500 rounded-lg px-2 py-1 ' >Bien</div>
                                                </div>
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() => handleChangeSelet(2, inputFiel.id)}
                                            >
                                                <div className='flex justify-between' >
                                                    <div className='text-red-500' >Si</div>
                                                    <div className='text-orange-500' >No</div>
                                                    <div className='text-green-500' >N/A</div>
                                                </div>
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() => handleChangeSelet(3, inputFiel.id)}
                                            >
                                                <div className='flex justify-between' >
                                                    <p className="border border-primary rounded-lg  text-primary px-3 py-2" >
                                                        Agregar respuestas personalizadas
                                                    </p>
                                                </div>
                                            </DropdownItem>
                                        </Dropdown>
                                    </div>
                                    :
                                    inputFiel.type == 1 ?
                                        (
                                            <div className='flex ml-5 justify-between gap-4' >
                                                <div className='border border-red-500 text-red-500 rounded-lg px-2 py-1 ' >Mal</div>
                                                <div className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 ' >Regular</div>
                                                <div className='border border-green-500 text-green-500 rounded-lg px-2 py-1 ' >Bien</div>
                                            </div>
                                        ) :
                                        inputFiel.type == 2 ?
                                            (<div className='flex w-48 ml-5  justify-center items-center gap-4' >
                                                <div className='text-red-500' >Si</div>
                                                <div className='text-orange-500' >No</div>
                                                <div className='text-green-500' >N/A</div>
                                            </div>) :
                                            null
                                }



                                {
                                    inputFiel.type == 3 &&

                                    <div className='col-span-10 ' >
                                        <Input
                                            type="text"
                                            name='customResponses'
                                            onChange={(e) => handleChangeCustomResponse(e.target.value, inputFiel.id)}
                                            placeholder="Escribe tu respuesta personalizada"
                                        />
                                        <a onClick={(e) => handleAddCustomResponse(e, inputFiel.id)} className='outline-none cursor-pointer focus:outline-none mr-2' >
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </div>
                                }
                            </div>
                            <div className='col-span-1 flex justify-evenly items-end mr-3' >
                                <button onClick={(e) => handleAddFields(e, inputFiel.id)} className='outline-none focus:outline-none mr-2' >
                                    <Icon name="more" size="2xl" />
                                </button>
                                <button onClick={() => handleRemoveFields(inputFiel.id)} className='outline-none focus:outline-none' >
                                    <Icon name="delete" size="2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
