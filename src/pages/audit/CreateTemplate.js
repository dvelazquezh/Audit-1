import React from 'react'
import Swal from 'sweetalert2'
import Button from '@material-tailwind/react/Button'
import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import CardHeader from '@material-tailwind/react/CardHeader'
import Input from '@material-tailwind/react/Input'
import Icon from '@material-tailwind/react/Icon'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import '../../components/onda.css'
import { useState } from 'react'
import { useForm } from 'hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { saveTemplate } from 'actions/audit'
import { useHistory } from "react-router-dom";
import { saveAudit } from 'actions/audit'
import { saveAuditSection } from 'actions/audit'
import { saveAuditPoint } from 'actions/audit'
import { Sessions_questions } from './preguntas y sesiones/Sessions_questions'
import { InputFiel } from './preguntas y sesiones/InputFiel'
import { guardarDatos } from 'actions/sessions'
import { borrarDatos } from 'actions/sessions'
const short = require('short-uuid');

export const CreateTemplate = () => {

    const history = useHistory();
    const { company, name, companyId } = useSelector(state => state.auth)
    const { sessions: preguntas } = useSelector(state => state.createTemplate)


    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        id: short.uuid(),
        plantilla: '',
        restaurante: company,
        realizadoPor: name,
        gerente: '',
        tipo: '',
        correo: '',
        // nombreSesion: '',
        // maxpoin: ''
    })


    const auditoria = [{ ...values, preguntas }]

    const [guardar, setguardar] = useState(false)
    const [error, seterror] = useState({})
    const { plantilla, restaurante, realizadoPor, gerente, nombreSesion, correo, tipo, maxpoin } = values

    const [newsession, setnewsession] = useState([
        { id: short.uuid(), nombreSesion: '', maxpoin: '' },
    ])


    //  const s = newsession.map( i => (

    //  ) )

    //  console.log(preguntas)



    const [inputFiels, setinputFiels] = useState([
        { id: short.uuid(), question: '', type: '', resPersonalizada: false, res: [] },
    ])

    // console.log(inputFiels);
    // const auditTemplate = { ...values, inputFiels }


    const [sessions, setsessions] = useState("")
    // console.log(sessions);

    const handleSessions = (e, id) => {
        const newSessionFiel = newsession.map(i => {
            if (id === i.id) {
                i[e.target.name] = e.target.value
            }
            return i
        })
        setnewsession(newSessionFiel)
    }

    // console.log(sessions);


    const handleChangeInput = (e, id) => {
        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i[e.target.name] = e.target.value
            }
            return i
        })
        setinputFiels(newInputFields)
    }

    const handleAddnewsession = (e) => {
        e.preventDefault()
        setnewsession([...newsession, { id: short.uuid(), nombreSesion: '', maxpoin: '' }])
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

    const [continuar, setcontinuar] = useState(true)


    console.log(preguntas.map(i => (
        i.inputFiels.map(j => (
            [j.question, j.type]
        ))
    )));

    const handleContinue = () => {
        if (plantilla.trim() === '' || restaurante.trim() === '' || realizadoPor.trim() === '' || gerente.trim() === '' || tipo.trim() === '') {
            return Swal.fire('Error', 'Todos los espacios se deben de llenar', 'error')
        }
        setguardar(true)
        setcontinuar(false)
    }


    const handleSumit = async (e) => {
        e.preventDefault()


        // if (inputFiels[0].question === '' || inputFiels[0].type === '') {
        //     return Swal.fire('Error', 'Debes ingresar al menos una pregunta y seleccionar el tipo', 'error')
        // }
        saveAudit(restaurante, realizadoPor, gerente, plantilla, correo, tipo * 1, companyId)
            .then((data) => preguntas.map(i => (
                saveAuditSection(i.nombreSesion, i.maxpoin, data.data)
                    .then((data) => i.inputFiels.map(j => (
                        saveAuditPoint(j.question, j.type, j.points*1, data.data)
                            .then(console.log)
                    )))
            )))


        // const session = await preguntas.map(i => (
        //     saveAuditSection(i.nombreSesion, i.maxpoin, audit.data)
        // ))
        // console.log(session);
        //  const session = await saveAuditSection(  )
        //  console.log(audit.data);

        //     .then((data) =>    saveAuditSection(nombreSesion, maxpoin * 1, data.data)
        //         .then((data) => inputFiels.forEach(pregunta => {
        //             saveAuditPoint(pregunta.question, pregunta.type, data.data)
        //                 .then(console.log)
        //             Swal.fire('Agregado', 'Se agrego la plantilla', 'success')
        //             reset()
        //             history.push('/audits');
        //         }))
        //     )
        //     .catch(() => {
        //         console.log(error);
        //         Swal.fire('Error', 'Hubo un error', 'error')
        //     })



        // dispatch(saveTemplate(auditTemplate))
        // Swal.fire('Agregado', 'Se agrego la plantilla', 'success')
        setcontinuar(true)
        reset()
        history.push('/audits');

    }

    return (
        <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >
            <div className='flex' >
                <Card>
                    <CardHeader color="blueGray" contentPosition="left">
                        <h2 className="text-white text-2xl uppercase ">Inicia creando tu plantilla</h2>
                    </CardHeader>
                    <CardBody>



                        {/* ------------------ */}

                        {/* {
                        inputFiels.map(inputFiel => (
                            <div key={inputFiel.id} >
                                <input onChange={e => handleChangeInput(e, inputFiel.id)} type="text" name='question' placeholder='nombre' />
                                <button onClick={() => handleRemoveFields(inputFiel.id)} >-</button>
                                <input onChange={e => handleChangeInput(e, inputFiel.id)} type="text" name='type' placeholder='apellido' />
                                <button onClick={(e) => handleAddFields(e, inputFiel.id)} >+</button>
                            </div>
                        ))
                    } */}


                        {/* --------------------- */}



                        <form onSubmit={handleSumit} >
                            <h6 className="text-indigo-500 text-sm mt-3 mb-6 font-light uppercase">
                                Informacion de la plantilla
                            </h6>
                            <div className="flex flex-wrap mt-10">
                                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                    <Input
                                        value={plantilla}
                                        onChange={handleInputChange}
                                        name='plantilla'
                                        type="text"
                                        color="blue"
                                        placeholder="Nombre de la plantilla"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                    <Input
                                        value={restaurante}
                                        onChange={handleInputChange}
                                        name='restaurante'
                                        type="text"
                                        color="blue"
                                        placeholder="Nombre del restaurante"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                    <Input
                                        value={realizadoPor}
                                        onChange={handleInputChange}
                                        name='realizadoPor'
                                        type="text"
                                        color="blue"
                                        placeholder="Realizado por"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                    <Input
                                        value={gerente}
                                        onChange={handleInputChange}
                                        name='gerente'
                                        type="text"
                                        color="blue"
                                        placeholder="Gerente"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 font-light">
                                    <Input
                                        value={correo}
                                        onChange={handleInputChange}
                                        name='correo'
                                        type="email"
                                        color="blue"
                                        placeholder="Ingrese correo para enviar información al finalizar"
                                    />
                                </div>
                                {/* <div className='w-full flex justify-end' >
                                <Button
                                    color="lightBlue"
                                    buttonType="outline"
                                    size="lg"
                                    rounded={false}

                                    iconOnly={false}
                                    ripple="dark"
                                >
                                    Agregar
                                </Button>

                            </div> */}

                                <div className="inline-block pl-4 w-6/12 text-gray-700 ">
                                    <select onChange={handleInputChange} name='tipo' className="w-full h-10 pl-3 pr-6 text-gray-500 font-light border rounded-lg outline-none focus:outline-none-outline">
                                        <option value=''>Selecciona tipo de plantilla</option>
                                        <option value="1">Cuestionario</option>
                                        <option value="2">Auditoría digital</option>
                                        <option value="3">Lista</option>
                                        <option value="4">Encuesta</option>
                                    </select>

                                </div>
                            </div>

                            {
                                newsession.map(session => (

                                    <div className='mt-16' key={session.id} >
                                        <h6 className="text-indigo-500 text-sm my-6 font-light uppercase">
                                            Sesión de auditoría
                                        </h6>
                                        <div className='flex' >
                                            <div className="w-full lg:w-8/12 font-light">
                                                <Input
                                                    value={nombreSesion}
                                                    onChange={e => handleSessions(e, session.id)}
                                                    name='nombreSesion'
                                                    type="text"
                                                    placeholder="Nombre Sesión"
                                                />
                                            </div>
                                            <div className="w-full lg:w-4/12 ml-2 font-light">
                                                <Input
                                                    value={maxpoin}
                                                    onChange={e => handleSessions(e, session.id)}
                                                    name='maxpoin'
                                                    type="number"
                                                    mim='0'
                                                    max='100'
                                                    placeholder="Puntaje máximo"
                                                />
                                            </div>
                                        </div>


                                        {
                                            <InputFiel
                                                id={session.id}
                                                session={session}
                                                setguardar={setguardar}
                                                guardar={guardar}
                                            />
                                            // inputFiels.map(inputFiel => (
                                            //     <div key={inputFiel.id} className="flex flex-wrap mt-10">
                                            //         <div className='w-full grid grid-cols-10' >
                                            //             <div className='neumo col-span-9 w-full px-3 py-3 grid grid-cols-12 ' >
                                            //                 <div className='col-span-8' >
                                            //                     <Input
                                            //                         type="text"
                                            //                         name='question'
                                            //                         onChange={e => handleChangeInput(e, inputFiel.id)}
                                            //                         placeholder="Pregunta"
                                            //                     />
                                            //                 </div>

                                            //                 {/* {<h1>{console.log(inputFiel.type)}</h1>} */}

                                            //                 {!inputFiel.type ?
                                            //                     <div className='col-span-4' >
                                            //                         <Dropdown
                                            //                             placement="bottom-start"
                                            //                             buttonText="Tipo de Pregunta"
                                            //                             buttonType="link"
                                            //                             size="lg"
                                            //                             rounded={false}
                                            //                             block={true}
                                            //                             ripple="dark"
                                            //                         >
                                            //                             <DropdownItem
                                            //                                 onClick={() => handleChangeSelet(1, inputFiel.id)}
                                            //                             >
                                            //                                 <div className='flex justify-between gap-4' >
                                            //                                     <div className='border border-red-500 text-red-500 rounded-lg px-2 py-1 ' >Mal</div>
                                            //                                     <div className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 ' >Regular</div>
                                            //                                     <div className='border border-green-500 text-green-500 rounded-lg px-2 py-1 ' >Bien</div>
                                            //                                 </div>
                                            //                             </DropdownItem>
                                            //                             <DropdownItem
                                            //                                 onClick={() => handleChangeSelet(2, inputFiel.id)}
                                            //                             >
                                            //                                 <div className='flex justify-between' >
                                            //                                     <div className='text-red-500' >Si</div>
                                            //                                     <div className='text-orange-500' >No</div>
                                            //                                     <div className='text-green-500' >N/A</div>
                                            //                                 </div>
                                            //                             </DropdownItem>
                                            //                             <DropdownItem
                                            //                                 onClick={() => handleChangeSelet(3, inputFiel.id)}
                                            //                             >
                                            //                                 <div className='flex justify-between' >
                                            //                                     <p className="border border-primary rounded-lg  text-primary px-3 py-2" >
                                            //                                         Agregar respuestas personalizadas
                                            //                                     </p>
                                            //                                 </div>
                                            //                             </DropdownItem>
                                            //                         </Dropdown>
                                            //                     </div>
                                            //                     :
                                            //                     inputFiel.type == 1 ?
                                            //                         (
                                            //                             <div className='flex ml-5 justify-between gap-4' >
                                            //                                 <div className='border border-red-500 text-red-500 rounded-lg px-2 py-1 ' >Mal</div>
                                            //                                 <div className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 ' >Regular</div>
                                            //                                 <div className='border border-green-500 text-green-500 rounded-lg px-2 py-1 ' >Bien</div>
                                            //                             </div>
                                            //                         ) :
                                            //                         inputFiel.type == 2 ?
                                            //                             (<div className='flex w-48 ml-5  justify-center items-center gap-4' >
                                            //                                 <div className='text-red-500' >Si</div>
                                            //                                 <div className='text-orange-500' >No</div>
                                            //                                 <div className='text-green-500' >N/A</div>
                                            //                             </div>) :
                                            //                             null
                                            //                 }



                                            //                 {
                                            //                     inputFiel.type == 3 &&

                                            //                     <div className='col-span-10 ' >
                                            //                         <Input
                                            //                             type="text"
                                            //                             name='customResponses'
                                            //                             onChange={(e) => handleChangeCustomResponse(e.target.value, inputFiel.id)}
                                            //                             placeholder="Escribe tu respuesta personalizada"
                                            //                         />
                                            //                         <a onClick={(e) => handleAddCustomResponse(e, inputFiel.id)} className='outline-none cursor-pointer focus:outline-none mr-2' >
                                            //                             <i className="fas fa-plus"></i>
                                            //                         </a>
                                            //                     </div>
                                            //                 }
                                            //             </div>
                                            //             <div className='col-span-1 flex justify-evenly items-end mr-3' >
                                            //                 <button onClick={(e) => handleAddFields(e, inputFiel.id)} className='outline-none focus:outline-none mr-2' >
                                            //                     <Icon name="more" size="2xl" />
                                            //                 </button>
                                            //                 <button onClick={() => handleRemoveFields(inputFiel.id)} className='outline-none focus:outline-none' >
                                            //                     <Icon name="delete" size="2xl" />
                                            //                 </button>
                                            //             </div>
                                            //         </div>
                                            //     </div>
                                            // ))
                                        }
                                    </div>

                                    // <Sessions_questions
                                    //     key={session.id}
                                    //     setsessions={setsessions}
                                    //     sessions={sessions}
                                    // />
                                ))
                            }

                            {/* <p className='my-9' >{JSON.stringify(auditoria, null, 10)}</p> */}


                            {
                                continuar ?
                                    <>
                                        <div className='w-full my-9 flex justify-center' >
                                            <Button
                                                type='button'
                                                onClick={(e) => handleAddnewsession(e)}
                                                color="lightBlue"
                                                buttonType="outline"
                                                size="sm"
                                                rounded={false}
                                                iconOnly={false}
                                                ripple="dark"
                                            >
                                                agregar una nueva sesión
                                            </Button>

                                        </div>
                                        <div className='w-full mt-16 flex justify-end' >
                                            <Button
                                                type='button'
                                                onClick={() => handleContinue()}
                                                color="green"
                                                buttonType="filled"
                                                size="lg"
                                                rounded={false}
                                                iconOnly={false}
                                                ripple="dark"
                                            >
                                                Continuar
                                            </Button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='bg-gray-100 rounded-lg p-10 mt-11 ' >
                                            <h1 className="font-medium text-lg" >¿Quieres guardar la plantilla?</h1>
                                            <div className='w-full gap-4 mt-16 flex justify-end' >

                                                <Button
                                                    type='button'
                                                    onClick={() => [dispatch(borrarDatos()), setcontinuar(true)]}
                                                    color="red"
                                                    buttonType="filled"
                                                    size="lg"
                                                    rounded={false}
                                                    iconOnly={false}
                                                    ripple="dark"
                                                >
                                                    Cancelar
                                                </Button>
                                                <Button
                                                    type='submit'
                                                    color="green"
                                                    buttonType="filled"
                                                    size="lg"
                                                    rounded={false}
                                                    iconOnly={false}
                                                    ripple="dark"
                                                >
                                                    Guardar
                                                </Button>

                                            </div>
                                        </div>
                                    </>
                            }

                        </form>

                    </CardBody>
                </Card>




            </div>
        </div>
    )
}







{/* <div className = 'flex'>
                                                        <Input
                                                            type="text"
                                                            name='question'
                                                            onChange={e => handleChangeInput(e, inputFiel.id)}
                                                            placeholder="Escriba opciones de respuestas"
                                                        />
                                                        <Button
                                                            type='submit'
                                                            color="lightBlue"
                                                            buttonType="outline"
                                                            size="sm"
                                                            rounded={false}
                                                            iconOnly={false}
                                                            ripple="dark"
                                                        >
                                                            Agregar
                                                        </Button>
                                                    </div> */}