import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import HoverLink from '../hoverlink';
import Logo from './Logo';

export default function Sidebar({ closeSidebar }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);

    }, []);

    const handleCloseSidebar = () => {
        setIsOpen(false);
        closeSidebar();
    };

    return (
        <div className="flex h-screen antialiased text-gray-900 dark:bg-dark dark:text-light">

            <div
                className={`fixed inset-y-0 z-50 flex w-80 ${isOpen ? 'group-hover:transform translate-x-0' : 'group-hover:transform -translate-x-full'}`}
            >
                <svg
                    className="absolute inset-0 w-full h-full text-white"
                    style={{ filter: "drop-shadow(10px 0 10px #00000030)" }}
                    preserveAspectRatio="none"
                    viewBox="0 0 309 800"
                    fill="#8B0000"  // Cambiado a un tono más oscuro de rojo
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
                </svg>
                <div className="z-10 flex flex-col flex-1">
                    <div className="flex items-center justify-between flex-shrink-0 w-64 p-4">
                        <Logo showButton={false} logoSrc="/images/logos/mainLogo2.png" />
                        <button
                            onClick={handleCloseSidebar}
                            className="p-1 rounded-lg focus:outline-none focus:ring"
                        >
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="gold"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="sr-only">Cerrar menú</span>
                        </button>
                    </div>
                    <nav className="flex flex-col flex-1 w-64 p-4">
                        <ul className="flex flex-col items-center justify-left space-y-4 p-8 text-primary">
                            <li>
                                <HoverLink
                                    href="/acerca-de-mi"
                                    text="Descubre mi Esencia"
                                    title="Descubre más sobre Valeria del Real"
                                    hoverText="Ingresa"
                                    activeText="Ingresando"
                                    ariaLabel="Ir a sección acerca de mi"
                                    closeSidebarOnClick={handleCloseSidebar}
                                />
                            </li>

                            <li>
                                <HoverLink
                                    href="/servicios"
                                    text="Explora mis Servicios"
                                    title="Explora los servicios que ofrece Valeria del Real"
                                    hoverText="Ingresa"
                                    activeText="Ingresando"
                                    ariaLabel="Ir a la página de Servicios"
                                    closeSidebarOnClick={handleCloseSidebar}
                                />
                            </li>

                            <li>
                                <HoverLink
                                    href="/testimonios"
                                    text="Testimonios Transformadores"
                                    title="Lee testimonios transformadores de clientes de Valeria del Real"
                                    hoverText="Ingresa"
                                    activeText="Ingresando"
                                    ariaLabel="Ir a la página de Testimonios"
                                    closeSidebarOnClick={handleCloseSidebar}
                                />
                            </li>
                            <li>
                                <HoverLink
                                    href="/descargas"
                                    text="Descargables Espirituales"
                                    title="Descarga recursos espirituales gratuitos"
                                    hoverText="Ingresa"
                                    activeText="Ingresando"
                                    ariaLabel="Ir a la página de Descargables Espirituales"
                                    closeSidebarOnClick={handleCloseSidebar}
                                />
                            </li>
                            {/* <li>
                                <HoverLink
                                    href="/galeria"
                                    text="Explora la Galeria"
                                    title="Explora la galería de imágenes de Valeria del Real"
                                    hoverText="Ingresa"
                                    activeText="Ingresando"
                                    ariaLabel="Ir a la página de la Galería"
                                
                            </li>/> */}
                            <li>
                                <HoverLink
                                    href="/preguntas-frecuentes"
                                    text="Preguntas Frecuentes"
                                    title="Encuentra respuestas a preguntas frecuentes"
                                    hoverText="Ingresa"
                                    activeText="Ingresando"
                                    ariaLabel="Ir a la página de Preguntas Frecuentes"
                                    closeSidebarOnClick={handleCloseSidebar}
                                />
                            </li>
                            {/* <li>
                                <HoverLink
                                    href="/blog"
                                    text="Conoce mi Blog"
                                    title="Conoce el blog de Valeria del Real"
                                    hoverText="Ingresa"
                                    activeText="Ingresando"
                                    ariaLabel="Ir al Blog"
                                />
                            </li> */}
                            <li>
                                <div className="flex mt-8 gap-2 text-primary">
                                    <Link
                                        href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Escríbeme en Whatsapp"
                                        aria-label="Escribir a Valeria del Real en Whatsapp"
                                        onClick={handleCloseSidebar}
                                    >
                                        <FaWhatsapp className="text-xl text-primary transition duration-300" />
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/valeriadelreald"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sígueme en Instagram"
                                        aria-label="Ir a Instagram de Valeria del Real"
                                        onClick={handleCloseSidebar}
                                    >
                                        <FaInstagram className="text-xl text-primary transition duration-300" />
                                    </Link>
                                    <Link
                                        href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sígueme en Youtube"
                                        aria-label="Ir a Youtube de Valeria del Real"
                                        onClick={handleCloseSidebar}
                                    >
                                        <FaYoutube className="text-xl text-primary hover:scale-125 active:text-yellow-200 transition duration-300" />
                                    </Link>
                                    <Link
                                        href="https://www.tiktok.com/@valeriadelreald"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sígueme en TikTok"
                                        aria-label="Ir a TikTok de Valeria del Real"
                                        onClick={handleCloseSidebar}
                                    >
                                        <FaTiktok className="text-xl text-primary transition duration-300" />
                                    </Link>
                                    <Link
                                        href="https://web.facebook.com/valeria.d.9?_rdc=1&_rdr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sígueme en Facebook"
                                        aria-label="Ir a Facebook de Valeria del Real"
                                        onClick={handleCloseSidebar}
                                    >
                                        <FaFacebook className="text-xl text-primary transition duration-300" />
                                    </Link>
                                </div>
                            </li>
                        </ul>


                    </nav>
                    {/* <div className="flex-shrink-0 p-4">
                        <button className="flex items-center space-x-2">
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            <span>Cierre Sesión</span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
