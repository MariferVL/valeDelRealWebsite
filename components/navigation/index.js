"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Logo from "./Logo";

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      if (scrollY >= 400 && isMobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-primary p-2 fixed top-0 w-full z-10 backdrop-blur bg-opacity-30">
      <div className="flex justify-between items-center mx-16">
        <Logo />

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
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/about">Acerca de mí</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/services">Servicios</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/testimony">Testimonios</Link>
          </li>
          <li className="group relative text-white">
            <span>Información</span>
            <ul className="absolute hidden group-hover:block bg-primary text-white p-2 space-y-2">
              <li>
                <Link className="text-white hover:text-yellow-400 transition duration-300" href="/resources">Descargables</Link>
              </li>
              <li>
                <Link className="text-white hover:text-yellow-400 transition duration-300" href="/gallery">Galería</Link>
              </li>
              <li>
                <Link className="text-white hover:text-yellow-400 transition duration-300" href="/faq">Preguntas Frecuentes</Link>
              </li>
            </ul>
          </li>
          <li className="pr-3">
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/blog">Blog</Link>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-2">
              <Link href="https://www.instagram.com/valeriadelreald" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://www.tiktok.com/@valeriadelreald" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://web.facebook.com/valeria.d.9?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl text-white hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias" target="_blank" rel="noopener noreferrer">
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
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/about">Acerca de mí</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/services">Servicios</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/testimony">Testimonios</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/resources">Descargables</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/gallery">Galería</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-400 transition duration-300" href="/faq">Preguntas Frecuentes</Link>
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

