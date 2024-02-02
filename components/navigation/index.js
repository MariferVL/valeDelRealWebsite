"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Logo from "./Logo";
import HoverLink from "../hoverlink";

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(70);
  const [isScrolling, setIsScrolling] = useState(false);
  const [width, setWidth] = useState(0);
  const [showButton, setShowButton] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const updateWidthAndScroll = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);

    const scrollY = window.scrollY;
    const isMobile = newWidth < 768;

    if (scrollY >= 400 && isMobile) {
      setIsSidebarOpen(false);
      setShowButton(true);
      setIsScrolling(true);
    } else if (scrollY <= 0) {
      setIsScrolling(false);
    } else {
      setShowButton(false);
      setIsScrolling(true);
    }

    const newOpacity = scrollY > 30 ? 30 : 70;
    setScrollOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndScroll);
    window.addEventListener("scroll", updateWidthAndScroll);

    return () => {
      window.removeEventListener("resize", updateWidthAndScroll);
      window.removeEventListener("scroll", updateWidthAndScroll);
    };
  }, []);

  return (
    <nav className={`bg-primary p-2 fixed top-0 w-full z-10 backdrop-blur bg-opacity-${scrollOpacity}`}>
      <div className="flex justify-between items-center mx-16">
        <Logo showButton={showButton} showImage={isScrolling} width={width} />

        {/* Hamburger icon for mobile */}
        <div className="cursor-pointer md:hidden" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Navbar Links for Desktop */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <HoverLink
              href="/acerca-de-mi"
              text="Descubre mi Esencia"
              title="Descubre más sobre Valeria del Real"
              hoverText="Ingresa"
              activeText="Ingresando"
            />
          </li>

          <li>
            <HoverLink
              href="/servicios"
              text="Explora mis Servicios"
              title="Explora los servicios que ofrece Valeria del Real"
              hoverText="Ingresa"
              activeText="Ingresando"
            />
          </li>

          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/testimonios" title="Lee testimonios transformadores de clientes de Valeria del Real" aria-label="Ir a la página de Testimonios">Testimonios Transformadores</Link>
          </li>
          <li className="group relative text-white">
            <span>Recursos</span>
            <ul className="absolute hidden group-hover:block bg-primary text-white p-2 space-y-2">
              <li>
                <Link className="text-white hover:text-yellow-400 transition duration-300" href="/descargas" title="Descarga recursos espirituales gratuitos" aria-label="Ir a la página de Descargables Espirituales">Descargables Espirituales</Link>
              </li>
              <li>
                <Link className="text-white hover:text-yellow-400 transition duration-300" href="/galeria" title="Explora la galería de imágenes de Valeria del Real" aria-label="Ir a la página de la Galería">Explora la Galería</Link>
              </li>
              <li>
                <Link className="text-white hover:text-yellow-400 transition duration-300" href="/preguntas-frecuentes" title="Encuentra respuestas a preguntas frecuentes" aria-label="Ir a la página de Preguntas Frecuentes">Preguntas Frecuentes</Link>
              </li>
            </ul>
          </li>
          <li className="pr-3">
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/blog" title="Conoce el blog de Valeria del Real" aria-label="Ir al Blog">Conoce mi Blog</Link>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-2">
              <Link href="https://www.instagram.com/valeriadelreald" target="_blank" rel="noopener noreferrer" title="Sígueme en Instagram" aria-label="Ir a Instagram de Valeria del Real">
                <FaInstagram className="text-xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ" target="_blank" rel="noopener noreferrer" title="Sígueme en Youtube" aria-label="Ir a Youtube de Valeria del Real">
                <FaYoutube className="text-xl text-white hover:text-yellow-400 hover:scale-125 active:text-yellow-200 transition duration-300" />
              </Link>
              <Link href="https://www.tiktok.com/@valeriadelreald" target="_blank" rel="noopener noreferrer" title="Sígueme en TikTok" aria-label="Ir a TikTok de Valeria del Real">
                <FaTiktok className="text-xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://web.facebook.com/valeria.d.9?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" title="Sígueme en Facebook" aria-label="Ir a Facebook de Valeria del Real">
                <FaFacebook className="text-xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias" target="_blank" rel="noopener noreferrer" title="Escríbeme en Whatsapp" aria-label="Escribir a Valeria del Real en Whatsapp">
                <FaWhatsapp className="text-xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
            </div>
          </li>
        </ul>


      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-primary transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } backdrop-blur-md bg-opacity-80`}
      >
        <ul className="flex flex-col items-center space-y-4 p-8">
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/acerca-de-mi">Quién Soy</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/servicios">Servicios Terapéuticos</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/testimonios">Experiencias</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/downloads">Descargables</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/galeria">Galería</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/blog">Blog</Link>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/valeriadelreald" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://www.tiktok.com/@valeriadelreald" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://web.facebook.com/valeria.d.9?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
            </div>
          </li>
        </ul>

      </div>

    </nav>
  );
};

