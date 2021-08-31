import { Link } from "react-router-dom";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import img1 from 'assets/welcome/img1.png';
import img2 from 'assets/welcome/img2.png';
import img3 from 'assets/welcome/img3.png';
import 'react-circular-progressbar/dist/styles.css';




export default function WelcomeCard({ nombre }) {
    return (
        <>
            <Card>
                <CardHeader color="blueGray" contentPosition="left">
                    <h2 className="text-white text-2xl uppercase ">{nombre}</h2>
                </CardHeader>
                <CardBody>

                    <div className='md:flex gap-2 2xl:gap-5 mb-16 justify-around' >

                        <div className='flex flex-col justify-center  items-center' >
                            <div className='h-56' >
                                <img
                                    className='w-72'
                                    src={img1} />
                            </div>
                            <h1 className='text-center font-bold' >1</h1>
                            <p className='text-center font-medium' >Crear una plantilla.</p>
                            <p className='text-center mt-5' >Crea plantillas como auditorías, cuestionarios, listas o encuestas</p>

                            <div className='text-center mt-5' >
                                <Link
                                    className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                    to="/createTemplate">Crear platilla</Link>
                            </div>

                        </div>
                        <div className='flex flex-col justify-center items-center  mt-2 md:mt-0 ' >
                            <div className='h-56' >
                                <img
                                    className='w-52 h-52'
                                    src={img2} />
                            </div>
                            <h1 className='text-center font-bold' >2</h1>
                            <p className='text-center font-medium' >Lista de auditorias</p>
                            <p className='text-center mt-5' >Mira todas las plantillas creadas por las usuarios</p>
                            <div className='text-center mt-5' >
                                <Link
                                    className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                    to="/audits">Plantillas</Link>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'  >
                            <div className='h-56' >
                                <img
                                    className='w-72 mt-2 '
                                    src={img3} />
                            </div>
                            <h1 className='text-center font-bold' >3</h1>
                            <p className='text-center font-medium' >Reportes </p>
                            <p className='text-center mt-5' >Mira los informes que puede generar desde auditas</p>
                            <div className='text-center mt-5' >
                                <a
                                    className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                    href="#">Ver Reportes</a>
                            </div>
                        </div>

                    </div>


                    <div className=' flex justify-between gap-6' >
                        <div className='flex flex-col my-5 ml-5 items-center bg-gray-100 rounded-2xl shadow border-2 p-6 w-64 ' >
                            <div className='w-40' >
                                <CircularProgressbar value={60} text={`${60}/100`}
                                    styles={buildStyles({
                                        textColor: "#33f",
                                        pathColor: "#33f",
                                    })}
                                />
                            </div>
                            <div classname='' >
                                <h1 className='mt-5 font-bold text-black ' >Plantillas creadas</h1>
                            </div>
                        </div>
                        <div className='flex flex-col my-5 ml-5 items-center  bg-gray-100 rounded-2xl shadow border-2 p-6 w-64 ' >
                            <div className='w-40' >
                                <CircularProgressbar value={5} text={`${50}/1000`}
                                    styles={buildStyles({
                                        textColor: "#33f",
                                        pathColor: "#33f",
                                    })}
                                />
                            </div>
                            <div classname='' >
                                <h1 className='mt-5 font-bold text-black ' >Auditorías respondidas</h1>
                            </div>
                        </div>
                        <div className='flex flex-col my-5 ml-5 mr-5 items-center  bg-gray-100 rounded-2xl shadow border-2 p-6 w-64 ' >
                            <div className='w-40' >
                                <CircularProgressbar value={60} text={`${60}%`}
                                    styles={buildStyles({
                                        textColor: "#33f",
                                        pathColor: "#33f",
                                    })}
                                />
                            </div>
                            <div classname='' >
                                <h1 className='mt-5 font-bold text-black ' >Plantillas respondidas</h1>
                            </div>
                        </div>
                    </div>


                </CardBody>
            </Card>



        </>
    );
}
