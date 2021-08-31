import { useLocation } from 'react-router-dom';
import { NavLink, Redirect } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import logo from 'assets/img/tulogoaqui.png';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from 'actions/auth';

export default function AdminNavbar({ showSidebar, setShowSidebar}) {

    const location = useLocation().pathname;

    const { name, photoURL, photoCompany, company } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <nav className="bg-primary md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'
                            } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <div className='flex  items-center' >
                        <Image className="w-16" src={photoURL} rounded={false} />
                        <div className='flex flex-col' >
                            <h4 className="uppercase ml-4 text-white text-sm tracking-wider mt-1">
                                {
                                    name ? name : 'Auditas'
                                }
                                {/* {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')} */}
                            </h4>
                            <h4 className="ml-4 text-white text-sm tracking-wider mt-1">
                               {
                                   company ? company : "Nombre de la compañía"
                               }
                            </h4>
                            <h4 className="ml-4 text-white text-xs tracking-wider mt-1">
                                Admin/user
                            </h4>

                        </div>
                    </div>

                    <div className="flex">

                        {/* <NavbarInput placeholder="Search" /> */}

                        <div className="-mr-4 ml-6">
                            <Dropdown
                                color="transparent"
                                buttonText={
                                    <div className="w-24">

                                        {
                                            photoCompany ?
                                                <Image src={photoCompany} rounded />
                                                // <Image src={photoURL} rounded /> 
                                                :

                                                <Image src={logo} rounded />
                                        }

                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 0,
                                    color: 'transparent',
                                }}
                            >
                                {/* <DropdownItem color="lightBlue">
                                    Action
                                </DropdownItem> */}
                                <DropdownItem color="lightBlue">
                                    <NavLink
                                            to="/register"
                                            // className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            // activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                        >Configuraciones
                                        </NavLink>
                                </DropdownItem>
                                <DropdownItem
                                    onClick={handleLogout}
                                    color="lightBlue">
                                    Salir
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
