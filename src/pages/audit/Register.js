import Button from '@material-tailwind/react/Button'
import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import CardHeader from '@material-tailwind/react/CardHeader'
import Input from '@material-tailwind/react/Input'
import Swal from 'sweetalert2'
import { CustomCard } from 'components/ui/CustomCard'
import { useForm } from 'hooks/useForm'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import audiApi from 'api/audiApi'
import { startUploading } from 'actions/auth'
import { useHistory } from 'react-router-dom'

export const Register = () => {

    let history = useHistory()

    const [values, handleInputChange, reset] = useForm({
        company: ''
    })

    console.log(values);
    const [fileUrl, setFileUrl] = useState(null);

    const { company } = values

    const { name, _email, uid, id } = useSelector(state => state.auth)

    const [plan, setplan] = useState('')
    console.log(plan);
    const camPlan = (e) => {
        e.preventDefault()
        setplan(!plan)
    }

    const dispatch = useDispatch()
    const { LogoImageURL } = useSelector(state => state.company)

    const { restaurante } = values

    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
    }


    const hadleSubmit = async (e) => {
        e.preventDefault()
        if (company === '' || LogoImageURL === '') {
            return Swal.fire('Error', 'Debe de ingresar nombre de la empresa e imagen para continuar', 'error')
        }
        if (plan === '') {
            return Swal.fire('Error', 'Debes seleccionar un plan', 'error')
        }
        console.log({ name, _email, company, LogoImageURL, plan });
        await saveCompany(company, LogoImageURL, plan * 1)
            .then(data => saveUser(name, name, uid, _email, 2, data));

        history.push("/")
        Swal.fire(
            'Se actualizó el perfil',
            '',
            'success'
        )
        window.location.reload()
    }


    const saveCompany = (Name, LogoImageURL, Subscription) => {
        return audiApi.post('/company', { Name, LogoImageURL, Subscription })
    }




    const saveUser = async (fullName, userName, password, email, state, CompanyID) => {
        const data = await audiApi.put('/user', { id, fullName, userName, password, email, state, company: { id: CompanyID.data } })
        console.log(data)
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file))
        }
    }

    return (
        <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >
            <Card>
                <CardHeader color="blueGray" contentPosition="left">
                    <h2 className="text-white text-2xl uppercase ">Complete los datos de registro/Modificar sus datos</h2>
                </CardHeader>
                <CardBody>

                    <form onSubmit={hadleSubmit} >
                        <h6 className="text-indigo-500 text-sm mt-3 mb-6 font-light uppercase">
                            Informacion de la Empresa
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    value={restaurante}
                                    onChange={handleInputChange}
                                    name='company'
                                    type="text"
                                    color="blue"
                                    placeholder="Nombre de la Empresa"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                {
                                    !fileUrl ?
                                        <label
                                            className="w-full flex flex-col items-center px-4  bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-primary text-purple-600 ease-linear transition-all duration-150">
                                            <i className="fas fa-cloud-upload-alt fa-2x"></i>
                                            <span className=" text-base leading-normal">Selecciona el logo del restaurante</span>
                                            <input
                                                name='logoImagen'
                                                accept='image/*'
                                                onChange={(e) => [processImage(e), handleFileChange(e)]}
                                                type='file'
                                                className="hidden" />
                                        </label>

                                        :
                                        <img className='bg-cover w-24 h-24 mx-auto rounded-full' src={fileUrl} />
                                }

                            </div>

                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    value={name}
                                    name='plantilla'
                                    disabled
                                    type="text"
                                    color="blue"
                                    placeholder="Usuario"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    value={_email}
                                    name='plantilla'
                                    disabled
                                    type="text"
                                    color="blue"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="w-full pr-4 mt-6 font-light">
                                <Button
                                    onClick={camPlan}
                                    type='buttom'
                                    color="lightBlue"
                                    buttonType="outline"
                                    size="lg"
                                    rounded={false}
                                    iconOnly={false}
                                    ripple="dark"
                                >
                                    Selecciona suscripción / Cambiar tipo de subscripcions
                                </Button>
                            </div>
                        </div>
                        {
                            plan &&
                            // <div className='md:flex md:gap-8 my-16' >
                            // <div className='flex flex-col lg:flex lg:flex-row gap-8 my-16 items-center ' >
                            //     <CustomCard titulo='Plan Básico' precio='20' />
                            //     <CustomCard titulo='Plan Estándar' precio='50' />
                            //     <CustomCard titulo='Plan Premium' precio='70' />
                            // </div>

                            <div className='flex lg:flex lg:flex-row gap-8 mt-10 my-5 items-center ' >
                                <div
                                    onClick={() => setplan('1')}
                                    className='w-5/6  lg:w-2/6  bg-white border border-opacity-25 rounded-lg neumo cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
                                    {plan === '1' &&
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
                                    <div className='text-center -mt-2' >
                                        <div style={{ height: '50px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: ' 100%', width: '100%' }}><path d="M-18.90,18.25 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#33f' }}></path></svg></div>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setplan('2')}
                                    className='w-5/6  lg:w-2/6  bg-white border border-opacity-25 rounded-lg neumo cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
                                    {plan === '2' &&
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
                                    <div className='text-center -mt-2' >
                                        <div style={{ height: '50px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: ' 100%', width: '100%' }}><path d="M-18.90,18.25 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#33f' }}></path></svg></div>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setplan('3')}
                                    className='w-5/6  lg:w-2/6  bg-white border border-opacity-25 rounded-lg neumo cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
                                    {plan === '3' &&
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
                                    <div className='text-center -mt-2' >
                                        <div style={{ height: '50px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: ' 100%', width: '100%' }}><path d="M-18.90,18.25 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#33f' }}></path></svg></div>
                                    </div>
                                </div>
                                {/* <CustomCard titulo='Plan Básico' precio='20' />
<CustomCard titulo='Plan Estándar' precio='50' />
<CustomCard titulo='Plan Premium' precio='70' /> */}
                            </div>

                        }


                        <div className='w-full mt-9 flex justify-start' >
                            <Button
                                type='submit'
                                color="lightBlue"
                                buttonType="outline"
                                size="lg"
                                rounded={false}
                                iconOnly={false}
                                ripple="dark"
                            >
                                Agregar
                            </Button>

                        </div>

                    </form>



                </CardBody>
            </Card>
        </div>

    )
}
