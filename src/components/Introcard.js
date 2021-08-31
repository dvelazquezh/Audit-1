import { Link } from "react-router-dom";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import img1 from 'assets/welcome/pre-re.png';



export default function IntroCard({ nombre }) {
    return (
        <Card>
            <CardHeader color="blueGray" contentPosition="left">
                <h2 className="text-white text-2xl uppercase ">{nombre}</h2>
            </CardHeader>
            <CardBody>

                <div className='md:flex gap-2 2xl:gap-5  justify-around' >

                    <div className='flex flex-col justify-center  items-center' >
                        <div className='h-56' >
                            <img
                                className='w-72'
                                src={img1} />
                        </div>
                        <p className='text-center font-medium' >Completa tus datos</p>
                        <p className='text-center mt-5' >Elija su membresía y cree su empresa</p>

                        <div className='text-center mt-5' >
                            <Link
                                className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                to="/register">Registro</Link>
                        </div>

                    </div>
                </div>

            </CardBody>
        </Card>
    );
}
