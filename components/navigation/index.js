"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Logo from "./Logo";
import HoverLink from "../hoverlink";
import Sidebar from "./Sidebar";

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [width, setWidth] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [blur, setBlur] = useState(10);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    return isSidebarOpen;
  };

  
  useEffect(() => {
    const handleScroll = () => {
      let currentScrollY = window.scrollY;
      if (currentScrollY > 30) {
        setIsScrolling(true);
        setBlur(5);
      } else {
        setIsScrolling(false);
        setBlur(10);
      }
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width < 768 && window.scrollY >= 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const textColor = isScrolling ? 'text-yellow-600' : 'text-white';

  return (
    <nav
      className={`md:p-2 fixed top-0 w-full z-20`}
      style={{ backgroundColor: `rgba(227, 166, 23, 0.3)`, backdropFilter: `blur(${blur}px)` }}
    >
      <div className="flex justify-between items-center mx-16">
        <Logo showButton={showButton} logoSrc={isScrolling ? "/images/mainLogo2.png" : "/images/mainLogo1.png"} />

        {/* Hamburger icon for mobile */}

        <button
          className="cursor-pointer md:hidden fixed p-2 text-white border border-white rounded-lg top-5 left-5"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="sr-only">Abrir menú</span>
        </button>

        {/* Navbar Links for Desktop */}
        <ul className={`hidden ml-72 md:flex space-x-2 ${textColor}`}>
          <li >
            <HoverLink
              href="/acerca-de-mi"
              text="Descubre mi Esencia"
              title="Descubre más sobre Valeria del Real"
              hoverText="Ingresa"
              activeText="Ingresando"
              ariaLabel="Ir a sección acerca de mi"
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
            />
          </li>
          <li className="group relative text-white flex items-center">
            <div>
              <button type="button" className={`inline-flex w-32 items-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold ${textColor}`} id="menu-button" aria-expanded="true" aria-haspopup="true">
                Recursos
                <svg className="-mr-1 h-5 w-5 text-initial" viewBox="0 0 20 20" fill="var(--primary)" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="absolute right-0 z-10 mt-8 mr-8 w-full origin-top-right rounded-xl shadow-lg focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">

              <ul className=" absolute hidden group-hover:block bg-white bg-opacity-60 text-yellow-600 p-2 space-y-2" role="none">
                {/* <li>
                  <HoverLink
                    href="/descargas"
                    text="Descargables Espirituales"
                    title="Descarga recursos espirituales gratuitos"
                    hoverText="Ingresa"
                    activeText="Ingresando"
                    ariaLabel="Ir a la página de Descargables Espirituales"
                  />
                </li> */}
                <li>
                  <HoverLink
                    href="/galeria"
                    text="Explora la Galeria"
                    title="Explora la galería de imágenes de Valeria del Real"
                    hoverText="Ingresa"
                    activeText="Ingresando"
                    ariaLabel="Ir a la página de la Galería"
                    className="w-40"
                  />
                </li>
                <li>
                  <HoverLink
                    href="/preguntas-frecuentes"
                    text="Preguntas Frecuentes"
                    title="Encuentra respuestas a preguntas frecuentes"
                    hoverText="Ingresa"
                    activeText="Ingresando"
                    ariaLabel="Ir a la página de Preguntas Frecuentes"
                    className="w-80"
                  />
                </li>
              </ul>
            </div>

          </li>
          {/* <li className="pr-3">
            <HoverLink
              href="/blog"
              text="Conoce mi Blog"
              title="Conoce el blog de Valeria del Real"
              hoverText="Ingresa"
              activeText="Ingresando"
              ariaLabel="Ir al Blog"
            />
          </li> */}
          <li className="flex justify-between items-center">
            <div className="flex gap-2">
              <Link href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias" target="_blank" rel="noopener noreferrer" title="Escríbeme en Whatsapp" aria-label="Escribir a Valeria del Real en Whatsapp">
                <FaWhatsapp className="text-xl text-white hover:text-secondary transition duration-300" />
              </Link>
              <Link href="https://www.instagram.com/valeriadelreald" target="_blank" rel="noopener noreferrer" title="Sígueme en Instagram" aria-label="Ir a Instagram de Valeria del Real">
                <FaInstagram className="text-xl text-white hover:text-secondary transition duration-300" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ" target="_blank" rel="noopener noreferrer" title="Sígueme en Youtube" aria-label="Ir a Youtube de Valeria del Real">
                <FaYoutube className="text-xl text-white hover:text-secondary hover:scale-125 active:text-yellow-200 transition duration-300" />
              </Link>
              <Link href="https://www.tiktok.com/@valeriadelreald" target="_blank" rel="noopener noreferrer" title="Sígueme en TikTok" aria-label="Ir a TikTok de Valeria del Real">
                <FaTiktok className="text-xl text-white hover:text-secondary transition duration-300" />
              </Link>
              <Link href="https://web.facebook.com/valeria.d.9?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" title="Sígueme en Facebook" aria-label="Ir a Facebook de Valeria del Real">
                <FaFacebook className="text-xl text-white hover:text-secondary transition duration-300" />
              </Link>
            </div>
          </li>
        </ul>


      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}

    </nav>
  );
};

