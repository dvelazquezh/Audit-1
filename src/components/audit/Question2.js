import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


export const Question2 = ({ questions, index, tipoPreguntas, contadorPregunta, handleChange, contents, name }) => {


    // const { id, description: question, answerType: type } = questions

    const { preguntas } = useSelector(state => state.audi)
    console.log(preguntas);

    const [description, setdescription] = useState(false)
    const [tipo, settipo] = useState('')

    // const strintID = id.toString()

    const res = Object.values(contents)

    console.log(preguntas);

    return (
        <>

            {
                preguntas.map(i => (
                    <div>
                        <h1 className='uppercase font-bold text-xl text-gray-700 mt-3 ml-3 mb-3 ' >{i[0]}</h1>
                        <hr />
                        {
                            i[1].map((j, index) => (
                                <>
                                    {/* <h1>{JSON.stringify(j,null,500)}</h1> */}
                                    {
                                        tipoPreguntas === 'exam' ?
                                            <div className=' ml-2' >
                                                <div className='flex gap-2' ></div>
                                                <div className='flex justify-between' >
                                                    <p className='ml-5 text-gray-700 mt-2' > {index + 1}. {j.description}</p>
                                                    <input placeholder='Puntaje' type="number" min={1} className="border-b border-gray-200 rounded-lg bg-gray-100 align-middle font-bold text-base  whitespace-nowrap px-2 py-2 text-left" name="accountType" />
                                                </div>
                                                <div className='flex gap-2 ml-5' >
                                                    {
                                                        j.answerType === 1 ?
                                                            <div className="my-7 ml-5 ">
                                                                <label className="inline-flex items-center">
                                                                    <input type="radio" className="form-radio" name="accountType" value="personal" />
                                                                    <span className="ml-2">Mal</span>
                                                                </label>
                                                                <label className="inline-flex items-center ml-6">
                                                                    <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                    <span className="ml-2">Regular</span>
                                                                </label>
                                                                <label className="inline-flex items-center ml-6">
                                                                    <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                    <span className="ml-2">Bien</span>
                                                                </label>
                                                            </div>
                                                            :
                                                            <div className="my-7 ml-5 ">
                                                                <label className="inline-flex items-center">
                                                                    <input type="radio" className="form-radio" name="accountType" value="personal" />
                                                                    <span className="ml-2">Si</span>
                                                                </label>
                                                                <label className="inline-flex items-center ml-6">
                                                                    <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                    <span className="ml-2">No</span>
                                                                </label>
                                                                <label className="inline-flex items-center ml-6">
                                                                    <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                    <span className="ml-2">N/A</span>
                                                                </label>
                                                            </div>
                                                    }
                                                </div>
                                                <div>
                                                    <textarea onChange={handleChange} name={j.id} value={res[index]} className="w-full mt-2 px-3 py-2 mb-7 bg-gray-100 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                                                </div>
                                            </div>
                                            :
                                            tipoPreguntas === 'list' ?
                                                (
                                                    <>

                                                        <tr>
                                                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-normal  w-2/6 px-2 py-4 text-left">
                                                                <p className='ml-5 text-gray-700 mt-2 ' > {index + 1}. {j.description}</p>
                                                            </th>
                                                            <th className="border-b  border-gray-200 align-middle font-light text-sm whitespace-normal  w-1/6 px-2 py-4 text-left">
                                                                <input placeholder='Puntaje' type="number" min={1} className="border-b border-gray-200 rounded-lg bg-gray-100 align-middle font-light text-sm  whitespace-nowrap px-2 py-2 text-left" name="accountType" />
                                                            </th>
                                                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap w-1/6 pr-5 py-4 text-left">
                                                                {
                                                                    j.answerType === 1 ?
                                                                        <div className="my-7 ml-5 ">
                                                                            <label className="inline-flex items-center">
                                                                                <input type="radio" className="form-radio" name="accountType" value="personal" />
                                                                                <span className="ml-2">Mal</span>
                                                                            </label>
                                                                            <label className="inline-flex items-center ml-6">
                                                                                <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                                <span className="ml-2">Regular</span>
                                                                            </label>
                                                                            <label className="inline-flex items-center ml-6">
                                                                                <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                                <span className="ml-2">Bien</span>
                                                                            </label>
                                                                        </div>
                                                                        :
                                                                        <div className="my-7 ml-5 ">
                                                                            <label className="inline-flex items-center">
                                                                                <input type="radio" className="form-radio" name="accountType" value="personal" />
                                                                                <span className="ml-2">Si</span>
                                                                            </label>
                                                                            <label className="inline-flex items-center ml-6">
                                                                                <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                                <span className="ml-2">No</span>
                                                                            </label>
                                                                            <label className="inline-flex items-center ml-6">
                                                                                <input className='appearance-none bg-gray-200 focus:outline-none ' type="radio" className="form-radio" name="accountType" value="busines" />
                                                                                <span className="ml-2">N/A</span>
                                                                            </label>
                                                                        </div>
                                                                }
                                                            </th>

                                                            <th className="border-b border-gray-200 align-middle font-light text-sm  whitespace-nowrap w-2/5 px-2 py-4 text-left">
                                                                <textarea onChange={handleChange} name={j.id.toString()} value={res[index]} className="w-full bg-gray-100 mt-2 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none" rows="2"></textarea>
                                                            </th>
                                                        </tr>

                                                    </>
                                                )
                                                :
                                                tipoPreguntas === 'onebyone' &&
                                                <>
                                                    {
                                                        tipoPreguntas === 'onebyone' &&
                                                        <div>
                                                            {
                                                                index + 1 === contadorPregunta ?
                                                                    <div className='flex justify-between' >
                                                                        <p className='ml-5 text-gray-700 mt-2' > {index + 1}. {j.description}</p>
                                                                        <input placeholder='Puntaje' type="number" min={1} className="border-b border-gray-200 rounded-lg bg-gray-100 align-middle font-bold text-base  whitespace-nowrap px-2 py-2 text-left" name="accountType" />
                                                                    </div>
                                                                    : null
                                                            }
                                                            {
                                                                j.answerType === 1 && index + 1 === contadorPregunta ?
                                                                    <div className="my-7 ml-5 ">
                                                                        <label className="inline-flex items-center">
                                                                            <input type="radio" className="form-radio" name="accountType" value="personal" />
                                                                            <span className="ml-2">Mal</span>
                                                                        </label>
                                                                        <label className="inline-flex items-center ml-6">
                                                                            <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                            <span className="ml-2">Regular</span>
                                                                        </label>
                                                                        <label className="inline-flex items-center ml-6">
                                                                            <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                            <span className="ml-2">Bien</span>
                                                                        </label>
                                                                    </div>
                                                                    : j.answerType === 2 && index + 1 === contadorPregunta ?
                                                                        <div className="my-7 ml-5 ">
                                                                            <label className="inline-flex items-center">
                                                                                <input type="radio" className="form-radio" name="accountType" value="personal" />
                                                                                <span className="ml-2">Si</span>
                                                                            </label>
                                                                            <label className="inline-flex items-center ml-6">
                                                                                <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                                <span className="ml-2">No</span>
                                                                            </label>
                                                                            <label className="inline-flex items-center ml-6">
                                                                                <input type="radio" className="form-radio" name="accountType" value="busines" />
                                                                                <span className="ml-2">N/A</span>
                                                                            </label>
                                                                        </div>
                                                                        : null
                                                            }
                                                            {
                                                                index + 1 === contadorPregunta &&
                                                                <textarea onChange={handleChange} name={j.id.toString()} value={res[index]} className="w-full mt-2 px-3 bg-gray-100 py-2 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                                                            }
                                                        </div>
                                                    }
                                                </>
                                    }


                                    {/* list */}




                                </>
                            ))
                        }
                    </div>

                ))
            }


            <hr />


            {/* {
                tipoPreguntas === 'exam' &&
                <div className=' ml-2' >
                    <div className='flex gap-2' ></div>
                    <p className='ml-5 text-gray-700 mt-2' > {index + 1}. {question}</p>
                    <div className='flex gap-2 ml-5' >
                        {
                            type === 1 ?
                                <div className="my-7 ml-5 ">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="accountType" value="personal" />
                                        <span className="ml-2">Mal</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">Regular</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">Bien</span>
                                    </label>
                                </div>
                                :
                                <div className="my-7 ml-5 ">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="accountType" value="personal" />
                                        <span className="ml-2">Si</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">No</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">N/A</span>
                                    </label>
                                </div>
                        }
                    </div>

                    <textarea onChange={handleChange} name={id} value={res[index]} className="w-full mt-2 px-3 py-2 mb-7 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>

                </div>
            } */}

            {/* list */}
            {/* {
                tipoPreguntas === 'list' &&
                <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-normal px-2 py-4 text-left">
                        <p className='ml-5 text-gray-700 mt-2 ' > {index + 1}. {question}</p>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap pr-5 py-4 text-left">
                        {
                            type === 1 ?
                                <div className="my-7 ml-5 ">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="accountType" value="personal" />
                                        <span className="ml-2">Mal</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">Regular</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">Bien</span>
                                    </label>
                                </div>
                                :
                                <div className="my-7 ml-5 ">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="accountType" value="personal" />
                                        <span className="ml-2">Si</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">No</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">N/A</span>
                                    </label>
                                </div>
                        }
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm  whitespace-nowrap px-2 py-4 text-left">
                        <textarea onChange={handleChange} name={id.toString()} value={res[index]} className="w-full mt-2 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                    </th>
                </tr>
            } */}
            {/* list end */}

            {/* onebyone */}

            {/* {
                tipoPreguntas === 'onebyone' &&
                <div>
                    {
                        index + 1 === contadorPregunta ?
                            <p className='ml-5 text-gray-700 mt-2' > {index + 1}. {question}</p>
                            : null
                    }
                    {
                        type === 1 && index + 1 === contadorPregunta ?
                            <div className="my-7 ml-5 ">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="accountType" value="personal" />
                                    <span className="ml-2">Mal</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" className="form-radio" name="accountType" value="busines" />
                                    <span className="ml-2">Regular</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" className="form-radio" name="accountType" value="busines" />
                                    <span className="ml-2">Bien</span>
                                </label>
                            </div>
                            : type === 2 && index + 1 === contadorPregunta ?
                                <div className="my-7 ml-5 ">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="accountType" value="personal" />
                                        <span className="ml-2">Si</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">No</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">N/A</span>
                                    </label>
                                </div>
                                : null
                    }
                    {
                        index + 1 === contadorPregunta &&
                        <textarea onChange={handleChange} name={id} value={res[index]} className="w-full mt-2 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none" rows="4"></textarea>
                    }
                </div>
            } */}
            {/* onebyone fin */}
        </>
    )
}
