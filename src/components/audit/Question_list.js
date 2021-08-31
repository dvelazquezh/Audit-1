import React, { useState } from 'react'


export const Question2 = ({ questions, index }) => {


    const { id, description: question, answerType: type } = questions

    const [description, setdescription] = useState(false)
    const [tipo, settipo] = useState('')
    const [contents, setcontents] = useState('')

    const handleChange = (e) => {
        setcontents({
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='my-7 ml-2' >
            <div className='flex gap-2' ></div>
            {/* <p className='font-medium mb-1' > {index+1}. Pregunta:</p> */}
            <p className='ml-5 text-gray-700 mt-2' > {index + 1}. {question}</p>
            {/* <p className='font-medium mt-2' >Opciones de respuesta:</p> */}
            <div className='flex gap-2 ml-5' >
                {
                    type === 1 ?
                        <div class="my-7 ml-5 ">
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="accountType" value="personal" />
                                <span class="ml-2">Mal</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio" name="accountType" value="busines" />
                                <span class="ml-2">Regular</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio" name="accountType" value="busines" />
                                <span class="ml-2">Bien</span>
                            </label>
                        </div>
                        :
                        <div class="my-7 ml-5 ">
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="accountType" value="personal" />
                                <span class="ml-2">Si</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio" name="accountType" value="busines" />
                                <span class="ml-2">No</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio" name="accountType" value="busines" />
                                <span class="ml-2">N/A</span>
                            </label>
                        </div>
                }
            </div>

            <div>
                <p className='font-medium' >Comentarios:</p>
                <button
                    onClick={() => setdescription(true)}
                    className=' focus:outline-none ml-16 mt-3'>
                    {/* {
                        !description &&
                        // <i className="far fa-comment fa-2x"></i>
                        <p className='ml-5 text-gray-700 ' >Texto</p>
                    } */}
                </button>
            </div>
    

                <textarea onChange={handleChange} name='description' className="w-full mt-2 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
      

            <hr className='my-16' />

        </div>

    )
}
