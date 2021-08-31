import Button from '@material-tailwind/react/Button'
import { selectAudit } from 'actions/audit'
import { saveAuditReview } from 'actions/audit'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Question = ({ tipoPreguntas, contadorPregunta }) => {

    const dispatch = useDispatch()
    const { preguntas } = useSelector(state => state.audi)

    const { companyId, id } = useSelector(state => state.auth)
    const { seleccionAuditoría } = useSelector(state => state.audi)

    const [auditReview, setauditReview] = useState({
        Audit_Id: seleccionAuditoría,
        User_Id: id,
        Company_Id: companyId
    })

    const { Audit_Id, User_Id, Company_Id } = auditReview

    const [comment, setComment] = useState([])
    const [Answer, setAnswer] = useState([])



    const handleChangeComment = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeAnswer = (e) => {
        setAnswer({
            ...Answer,
            [e.target.name]: e.target.value
        })
    }

    const comentarios = JSON.stringify(comment)
    const respuestas = JSON.stringify(Answer)

    console.log(comentarios);
    console.log(respuestas);


    const handleSumit = (e) => {
        e.preventDefault()

        saveAuditReview(Audit_Id, User_Id, Company_Id, respuestas, comentarios)
            .then((data) => console.log(data))

    }

    console.log(respuestas.length);

    return (
        <>
            {
                preguntas.map((i, index) => (
                    <>
                        {
                            tipoPreguntas === 'exam' &&
                            <div>
                                <h1 className='uppercase font-bold text-xl text-gray-700 mt-3 ml-3 mb-3 ' >{i[0]}</h1>
                            </div>
                        }

                        {
                            i[1].map((j, index) => (
                                <>
                                    {
                                        tipoPreguntas === 'exam' &&
                                        <div className=' ml-2' >
                                            <div className='flex gap-2' ></div>
                                            <div className='flex justify-between' >
                                                <p className='ml-5 text-gray-700 mt-2' > {index + 1}. {j.description}</p>
                                                <h1>{JSON.stringify(j.id, null, 10)}</h1>
                                                <input placeholder='Puntaje' type="number" min={1} className="border-b border-gray-200 rounded-lg bg-gray-100 align-middle font-bold text-base  whitespace-nowrap px-2 py-2 text-left" onChange={handleChangeAnswer} name={j.id} />
                                            </div>
                                            <div className='flex gap-2 ml-5' >
                                                {
                                                    j.answerType === 1 ?
                                                        <div className="my-7 ml-5 ">
                                                            <label className="inline-flex items-center">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="mal" />
                                                                <span className="ml-2">Mal</span>
                                                            </label>
                                                            <label className="inline-flex items-center ml-6">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="regular" />
                                                                <span className="ml-2">Regular</span>
                                                            </label>
                                                            <label className="inline-flex items-center ml-6">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="bien" />
                                                                <span className="ml-2">Bien</span>
                                                            </label>
                                                        </div>
                                                        :
                                                        <div className="my-7 ml-5 ">
                                                            <label className="inline-flex items-center">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="si" />
                                                                <span className="ml-2">Si</span>
                                                            </label>
                                                            <label className="inline-flex items-center ml-6">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="no" />
                                                                <span className="ml-2">No</span>
                                                            </label>
                                                            <label className="inline-flex items-center ml-6">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="n/a" />
                                                                <span className="ml-2">N/A</span>
                                                            </label>
                                                        </div>
                                                }
                                            </div>
                                            {/* <div>
                                                    <textarea onChange={handleChange}  onChange={handleChangeAnswer} name={j.id} value={res[index]} className="w-full mt-2 px-3 py-2 mb-7 bg-gray-100 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                                                </div> */}
                                            <div>
                                                <textarea onChange={handleChangeAnswer} name={j.id} value={comment[j.id]} onChange={handleChangeComment} className="w-full mt-2 px-3 py-2 mb-7 bg-gray-100 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                                            </div>
                                        </div>
                                    }
                                </>
                            ))
                        }


                        {
                            tipoPreguntas === 'list' &&
                            <h1 className='uppercase font-bold text-xl text-gray-700 mt-3 ml-3 mb-3 ' >{i[0]}</h1>
                        }

                        {
                            i[1].map((j, index) => (
                                <>
                                    {
                                        tipoPreguntas === 'list' &&
                                        (
                                            <>

                                                <tr>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-normal  w-2/6 px-2 py-4 text-left">
                                                        <p className='ml-5 text-gray-700 mt-2 ' > {index + 1}. {j.description}</p>
                                                    </th>
                                                    <th className="border-b  border-gray-200 align-middle font-light text-sm whitespace-normal  w-1/6 px-2 py-4 text-left">
                                                        <input placeholder='Puntaje' type="number" min={1} className="border-b border-gray-200 rounded-lg bg-gray-100 align-middle font-light text-sm  whitespace-nowrap px-2 py-2 text-left" onChange={handleChangeAnswer} name={j.id} />
                                                    </th>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap w-1/6 pr-5 py-4 text-left">
                                                        {
                                                            j.answerType === 1 ?
                                                                <div className="my-7 ml-5 ">
                                                                    <label className="inline-flex items-center">
                                                                        <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="mal" />
                                                                        <span className="ml-2">Mal</span>
                                                                    </label>
                                                                    <label className="inline-flex items-center ml-6">
                                                                        <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="regular" />
                                                                        <span className="ml-2">Regular</span>
                                                                    </label>
                                                                    <label className="inline-flex items-center ml-6">
                                                                        <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="bien" />
                                                                        <span className="ml-2">Bien</span>
                                                                    </label>
                                                                </div>
                                                                :
                                                                <div className="my-7 ml-5 ">
                                                                    <label className="inline-flex items-center">
                                                                        <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="si" />
                                                                        <span className="ml-2">Si</span>
                                                                    </label>
                                                                    <label className="inline-flex items-center ml-6">
                                                                        <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="no" />
                                                                        <span className="ml-2">No</span>
                                                                    </label>
                                                                    <label className="inline-flex items-center ml-6">
                                                                        <input className='appearance-none bg-gray-200 focus:outline-none ' type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="n/a" />
                                                                        <span className="ml-2">N/A</span>
                                                                    </label>
                                                                </div>
                                                        }
                                                    </th>

                                                    <div>
                                                        <textarea onChange={handleChangeAnswer} name={j.id} value={comment[j.id]} onChange={handleChangeComment} className="w-full mt-2 px-3 py-2 mb-7 bg-gray-100 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                                                    </div>
                                                    {/* <th className="border-b border-gray-200 align-middle font-light text-sm  whitespace-nowrap w-2/5 px-2 py-4 text-left">
                                                            <textarea onChange={handleChange} name={j.id.toString()} value={res[index]} className="w-full bg-gray-100 mt-2 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none" rows="2"></textarea>
                                                        </th> */}
                                                </tr>

                                            </>
                                        )

                                    }
                                </>
                            ))
                        }


                        {
                            tipoPreguntas === 'onebyone' &&
                            <h1 className='uppercase font-bold text-xl text-gray-700 mt-3 ml-3 mb-3 ' >{i[0]}</h1>
                        }

                        {
                            i[1].map((j, index) => (
                                <>
                                    {
                                        tipoPreguntas === 'onebyone' &&
                                        <div className=' ml-2' >
                                            <div className='flex gap-2' ></div>
                                            <div className='flex justify-between' >
                                                <p className='ml-5 text-gray-700 mt-2' > {index + 1}. {j.description}</p>
                                                <input placeholder='Puntaje' type="number" min={1} className="border-b border-gray-200 rounded-lg bg-gray-100 align-middle font-bold text-base  whitespace-nowrap px-2 py-2 text-left" onChange={handleChangeAnswer} name={j.id} />
                                            </div>
                                            <div className='flex gap-2 ml-5' >
                                                {
                                                    j.answerType === 1 ?
                                                        <div className="my-7 ml-5 ">
                                                            <label className="inline-flex items-center">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="mal" />
                                                                <span className="ml-2">Mal</span>
                                                            </label>
                                                            <label className="inline-flex items-center ml-6">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="regular" />
                                                                <span className="ml-2">Regular</span>
                                                            </label>
                                                            <label className="inline-flex items-center ml-6">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="bien" />
                                                                <span className="ml-2">Bien</span>
                                                            </label>
                                                        </div>
                                                        :
                                                        <div className="my-7 ml-5 ">
                                                            <label className="inline-flex items-center">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="si" />
                                                                <span className="ml-2">Si</span>
                                                            </label>
                                                            <label className="inline-flex items-center ml-6">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="no" />
                                                                <span className="ml-2">No</span>
                                                            </label>
                                                            <label className="inline-flex items-center ml-6">
                                                                <input type="radio" className="form-radio" onChange={handleChangeAnswer} name={j.id} value="n/a" />
                                                                <span className="ml-2">N/A</span>
                                                            </label>
                                                        </div>
                                                }
                                            </div>
                                            {/* <div>
                                                    <textarea onChange={handleChange}  onChange={handleChangeAnswer} name={j.id} value={res[index]} className="w-full mt-2 px-3 py-2 mb-7 bg-gray-100 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                                                </div> */}
                                            <div>
                                                <textarea onChange={handleChangeAnswer} name={j.id} className="w-full mt-2 px-3 py-2 mb-7 bg-gray-100 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                                            </div>
                                        </div>
                                    }
                                </>
                            ))
                        }






















                    </>
                ))
            }
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
                    onClick={handleSumit}
                    iconOnly={false}
                    ripple="dark"
                >
                    Agregar
                </Button>

            </div>

        </>
    )
}
