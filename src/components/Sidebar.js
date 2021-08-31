import { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import H6 from '@material-tailwind/react/Heading6';
import icono from '../assets/icon-auditas.png'
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');

    const { estado } = useSelector(state => state.auth)


    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="http://auditas.orbitascr.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <div className='flex justify-center items-center gap-3' >
                            <img className='w-12' src={icono} />
                            <h2 className='font-semibold text-2xl text-gray-800' >Auditas</h2>
                        </div>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            {
                                estado === 1 ?
                                    <li className="rounded-lg mb-2 ">
                                        <NavLink
                                            to="/register"
                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                        >
                                            <i className="fas fa-user-edit fa-2x"></i>
                                            Registro
                                        </NavLink>
                                    </li> :
                                    <>
                                        <li className="rounded-lg mb-4">
                                            <NavLink
                                                to="/"
                                                exact
                                                className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                                activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                            >
                                                <i className="fas fa-th-large fa-2x"></i>
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li className="rounded-lg mb-2">
                                            <NavLink
                                                to="/createTemplate"
                                                className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                                activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                            >
                                                <i className="fas fa-folder-plus fa-2x"></i>
                                                Crear Plantillas
                                            </NavLink>
                                        </li>
                                        <li className="rounded-lg mb-2 ">
                                            <NavLink
                                                to="/audits"
                                                className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                                activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                            >
                                                <i className="fas fa-list fa-2x"></i>
                                                Plantillas
                                            </NavLink>
                                        </li>
                                        <li className="rounded-lg mb-2 ">
                                            <NavLink
                                                to="/reports"
                                                className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                                activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                            >
                                                <i className="fas fa-clipboard fa-2x"></i>
                                                Reportes
                                            </NavLink>
                                        </li>
                                        <li className="rounded-lg mb-2 ">
                                            <NavLink
                                                to="/users"
                                                className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                                activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                            >
                                                <i className="fas fa-users fa-2x"></i>
                                                Usuarios
                                            </NavLink>
                                        </li>
                                        <li className="rounded-lg mb-2 ">
                                            <NavLink
                                                to="/branch_office"
                                                className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                                activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                            >
                                                <i className="fas fa-building fa-2x"></i>
                                                Sucursales
                                            </NavLink>
                                        </li>
                                    </>
                            }
                        </ul>

                        {/* <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/maps"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-primary text-white shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    Maps
                                </NavLink>
                            </li> */}



                        {/* <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="bg-gradient-to-tr from-light-blue-500 to-secondary px-4 rounded-lg text-white mb-2">
                                <a
                                    href="https://material-tailwind.com/documentation/quick-start"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="description" size="2xl" />
                                    Documentation
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    );
}
