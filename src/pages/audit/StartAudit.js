import Button from '@material-tailwind/react/Button'
import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import CardHeader from '@material-tailwind/react/CardHeader'
import { selectAudit } from 'actions/audit'
import { agregarPreguntas } from 'actions/sessions'
import { Question } from 'components/audit/Question'
import { Question2 } from 'components/audit/Question2'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const StartAudit = () => {

    const dispatch = useDispatch()

    const { seleccionAuditoría, audit, auditSection, auditPoints } = useSelector(state => state.audi)
    const { name: nameuser, company } = useSelector(state => state.auth)
    const [contadorPregunta, setcontadorPregunta] = useState(0)
    const [tipoPreguntas, settipoPreguntas] = useState('exam')


    const [contents, setcontents] = useState({})

    const handleChange = (e) => {
        setcontents({
            ...contents,
            [e.target.name]: e.target.value
        })
    }



    let hoy = new Date()
    let fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

    const auditoria = audit.filter(aud => aud.id == seleccionAuditoría)
    const { name: nameAudit, templateType } = auditoria[0]


    const session = auditSection.filter(i => i.auditID === seleccionAuditoría)

    const preguntas = session.map(i => (
        [i.name, auditPoints.filter(j => j.auditSectionID == i.id)]
    ))

    // preguntas.map(i => (
    //     console.log(i[0]),
    //     i[1].map(console.log)
    // ))

    useEffect(() => {
        dispatch(agregarPreguntas(preguntas))
    }, [])


    const auditoriasection = auditSection.filter(aud => aud.auditID == seleccionAuditoría)
    const { name, id: idAuditSection, answerType } = auditoriasection[0]


    const auditoriaPunto = auditPoints.filter(point => point.auditSectionID == idAuditSection)

    // console.log(auditoriaPunto);

    const siguientePregunta = () => {
        if (contadorPregunta >= auditoriaPunto.length) {
            return
        }
        setcontadorPregunta(contadorPregunta + 1)
    }


    return (
        <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >
            <Card>
                <CardHeader color="blueGray" contentPosition="left" >
                    {
                        templateType == 1 ?
                            <p className='text-white text-2xl uppercase' >Cuestionario</p> :
                            templateType == 2 ?
                                <p className='text-white text-2xl uppercase' >Auditoria digital</p> :
                                templateType == 3 ?
                                    <p className='text-white text-2xl uppercase' >Lista</p> :
                                    <p className='text-white text-2xl uppercase' >Encuesta</p>
                    }
                </CardHeader>
                <div className='absolute right-20 top-36' >
                    <div>
                        <p className='text-2xl text-white -mt-1 mb-2 text-center' >Visualización</p>
                    </div>
                    <div>
                        <a className='mx-4 cursor-pointer ' onClick={() => settipoPreguntas('exam')} ><i className="fas fa-clipboard-list fa-2x text-white "></i></a>
                        <a className='mx-4 cursor-pointer ' onClick={() => settipoPreguntas('list')} ><i className="fas fa-th-list fa-2x text-white "></i></a>
                        <a className='mx-4 cursor-pointer ' onClick={() => settipoPreguntas('onebyone')} ><i className="fas fa-clipboard-check fa-2x text-white "></i></a>
                    </div>
                </div>
                <CardBody>
                    {/* exam */}
                    {
                        tipoPreguntas == 'exam' ?
                            <div className='ml-3 flex  justify-between w-full items-center mb-7' >
                                <div className='' >
                                    {/* {
                                templateType == 1 ?
                                <h1 className='font-light text-gray-700 text-sm' >Tipo: Cuestionario</h1> :
                                templateType == 2 ?
                                <h1 className='font-light text-gray-700 text-sm' >Tipo: Auditoria digital</h1> :
                                templateType == 3 ?
                                <h1 className='font-light text-gray-700 text-sm' >Tipo: Lista</h1> :
                                <h1 className='font-light text-gray-700 text-sm' >Tipo: Encuesta</h1>
                                
                            } */}
                                    <h1 className='font-bold text-gray-700 text-2xl capitalize' >{nameAudit}</h1>
                                    <h1 className='font-light text-gray-700 text-sm' >Usuario: {nameuser}</h1>
                                    <h1 className='font-light text-gray-700 text-sm' >Restaurante: {company}</h1>
                                    <h1 className='font-light text-gray-700 text-sm' >Fecha: {fecha}</h1>
                                    <h1 className='font-light text-gray-700 text-sm' >Hora: {hora}</h1>
                                </div>
                            </div>
                            :
                            <div className='mx-3 flex justify-between w-full items-center mb-7' >
                                <div>
                                    <h1 className='font-bold text-gray-700 text-xl' >{nameAudit}</h1>
                                    <h1 className='font-light text-gray-700 text-sm' >Usuario: {nameuser}</h1>
                                    <h1 className='font-light text-gray-700 text-sm' >Restaurante: {company}</h1>
                                </div>
                                <div>
                                    <h1 className='font-light text-gray-700 text-sm' >Fecha: {fecha}</h1>
                                    <h1 className='font-light text-gray-700 text-sm' >Hora: {hora}</h1>
                                </div>
                            </div>
                    }

                    {/* exam fin */}



                    <div className="overflow-x-auto my-5">
                        <table className="items-center w-full bg-transparent border-collapse">
                            {/* {
                                tipoPreguntas === 'list' &&
                                <thead>
                                    <tr>
                                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-normal font-light text-left">
                                            Pregunta
                                        </th>
                                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-normal font-light text-left">
                                            Respuesta
                                        </th>
                                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-normal font-light text-left">
                                            Comentarios
                                        </th>
                                    </tr>
                                </thead>
                            } */}

                            {
                                // auditoriaPunto.map((inputFiels, index) => (
                                // <Question2
                                //      key={idAuditSection}
                                //     // index={index}
                                //     // questions={inputFiels}
                                //     tipoPreguntas={tipoPreguntas}
                                //     contadorPregunta={contadorPregunta}
                                //     handleChange={handleChange}
                                //     contents={contents}
                                //     name={name}
                                //     preguntas={preguntas}
                                // />
                                // ))
                                <Question
                                    tipoPreguntas={tipoPreguntas}
                                    contadorPregunta={contadorPregunta}
                                />
                            }



                        </table>
                    </div>


                </CardBody>
                {/* {
                    tipoPreguntas === 'onebyone' ?
                        <div className='flex justify-center gap-10' >
                            {
                                contadorPregunta > 0 ?
                                    <Button
                                        color="lightBlue"
                                        buttonType="filled"
                                        size="lg"
                                        rounded={false}
                                        onClick={() => setcontadorPregunta(contadorPregunta - 1)}
                                        iconOnly={false}
                                        ripple="dark"
                                    >
                                        Atras
                                    </Button>
                                    : null
                            }

                            {
                                // contadorPregunta === auditoriaPunto.length ?
                                contadorPregunta === 10 ?
                                    <Button
                                        color="teal"
                                        buttonType="filled"
                                        size="lg"
                                        rounded={false}
                                        onClick={() => console.log('agregar')}
                                        iconOnly={false}
                                        ripple="dark"
                                    >
                                        Agregar
                                    </Button>
                                    :
                                    <Button
                                        color="lightBlue"
                                        buttonType="filled"
                                        size="lg"
                                        rounded={false}
                                        onClick={() => siguientePregunta()}
                                        iconOnly={false}
                                        ripple="dark"
                                    >
                                        Siguiente
                                    </Button>
                            }

                        </div>
                        :
                        <div className='flex justify-center gap-10' >
                            <Button
                                color="red"
                                buttonType="filled"
                                size="lg"
                                rounded={false}
                                onClick={() => dispatch(selectAudit(''))}
                                iconOnly={false}
                                ripple="dark"
                            >
                                Cancelar
                            </Button>
                            <Button
                                color="lightBlue"
                                buttonType="filled"
                                size="lg"
                                rounded={false}
                                onClick={() => console.log('agregar')}
                                iconOnly={false}
                                ripple="dark"
                            >
                                Agregar
                            </Button>

                        </div>
                } */}
            </Card>
        </div>

    )
}
