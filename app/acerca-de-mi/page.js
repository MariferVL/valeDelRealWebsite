"use client";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { useState } from "react";

export default function AboutPage() {

    return (
        <>
            <main id="about-me" className='relative min-h-screen'>
                {/* FIXME: */}
                <div className="relative lg:w-screen lg:px-16 h-screen mt-0 mb-16 z-1 bg-[url('/images/naturaleza2.png')] bg-cover bg-center bg-no-repeat font-sans antialiased text-gray-900 overflow-y-auto overflow-x-hidden">

                    <div className="w-full h-full flex items-center justify-center lg:h-screen flex-wrap mx-auto py-32 lg:mx-6 lg:mt-0">
                        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 flex flex-col justify-center">

                            <div className="p-4 md:p-12 text-center lg:text-left">
                                {/* FIXME: */}
                                <div className="block lg:hidden rounded-full shadow-xl mx-auto lg:mt-16 h-48 w-48 bg-[url('/images/vale4.jpg')] bg-cover bg-center">
                                </div>

                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">Valeria del Real</h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-primary">
                                    <svg className="h-4 fill-primary pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                    </svg> Creadora de la Esuela de Sexualidad Sagrada Latinoamericana - Terapeuta Holística
                                </p>

                                <p className="pt-2 text-primary text-base flex items-center justify-center lg:justify-start">
                                    <svg className="h-4 fill-primary text-primary pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                    </svg> ConCón - Online
                                </p>

                                <p className="pt-8 text-sm text-gray-700">
                                    <strong className="text-primary">Sobre Valeria del Real: Guía y Facilitadora de Sexualidad Sagrada</strong>
                                    <br />
                                    ¡Bienvenidos a la Escuela de Sexualidad Sagrada Latinoamericana! Me llamo Valeria del Real y soy la fundadora de este espacio de transformación y crecimiento personal.
                                </p>

                                <p className="text-sm text-gray-700 py-4">
                                    <strong className="text-primary">Mi Historia:</strong>
                                    <br />
                                    Hace más de dos décadas, tuve una experiencia que transformó por completo mi vida. En 1997, en la mística isla de Rapa Nui, experimenté el Maha Mudra o el Orgasmo Cósmico, una iniciación inesperada que marcó el comienzo de un viaje de autoconocimiento y despertar espiritual. Desde entonces, he dedicado mi vida a explorar y compartir los misterios de la Sexualidad Sagrada.
                                </p>

                                <p className="text-sm text-gray-700 py-4">
                                    <strong className="text-primary">Mi Visión:</strong>
                                    <br />
                                    La Sexualidad Sagrada transformó mi vida en 360 grados, abriéndome al autoamor, la abundancia, la creatividad y las relaciones auténticas. Mi misión es compartir estos conocimientos y experiencias contigo para que también puedas experimentar una vida plena y consciente.
                                </p>

                                <p className="text-sm text-gray-700 py-4">
                                    <strong className="text-primary">Programas y Acompañamientos:</strong>
                                    <br />
                                    En la Escuela de Sexualidad Sagrada, ofrezco una variedad de programas y acompañamientos diseñados para ayudarte en tu camino de autoexploración y sanación.
                                </p>

                                <div className="pt-12 pb-8">
                                    <Link
                                        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full"
                                        href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Escríbeme en Whatsapp"
                                        aria-label="Escribir a Valeria del Real en Whatsapp">
                                        Ponte en Contacto
                                    </Link>
                                </div>

                                <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                                    {/* Enlaces a redes sociales */}
                                    <Link
                                        href="https://www.instagram.com/valeriadelreald"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sígueme en Instagram"
                                        aria-label="Ir a Instagram de Valeria del Real"
                                    >
                                        <FaInstagram className="text-xl text-primary hover:scale-125 active:text-yellow-200 transition duration-300" />
                                    </Link>
                                    <Link
                                        href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sígueme en Youtube"
                                        aria-label="Ir a Youtube de Valeria del Real"
                                    >
                                        <FaYoutube className="text-xl text-primary hover:scale-125 active:text-yellow-200 transition duration-300" />
                                    </Link>
                                    <Link
                                        href="https://www.tiktok.com/@valeriadelreald"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sígueme en TikTok"
                                        aria-label="Ir a TikTok de Valeria del Real"
                                    >
                                        <FaTiktok className="text-xl text-primary hover:scale-125 active:text-yellow-200 transition duration-300" />
                                    </Link>
                                    <Link
                                        href="https://web.facebook.com/valeria.d.9?_rdc=1&_rdr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sígueme en Facebook"
                                        aria-label="Ir a Facebook de Valeria del Real"
                                    >
                                        <FaFacebook className="text-xl text-primary hover:scale-125 active:text-yellow-200 transition duration-300" />
                                    </Link>
                                    <Link
                                        href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Escríbeme en Whatsapp"
                                        aria-label="Escribir a Valeria del Real en Whatsapp"
                                    >
                                        <FaWhatsapp className="text-xl text-primary hover:scale-125 active:text-yellow-200 transition duration-300" />
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-start">
                            <div className="flex justify-center">

                                <Image
                                    src="/images/vale4.jpg"
                                    alt="Foto de Valeria del Real sentada en un sillon con forma de bulba femenina"
                                    className="rounded-none lg:rounded-lg shadow-2xl lg:block hidden"
                                    width={1000}
                                    height={800}
                                    priority={true} 
                                    loading="eager" 
                                     
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
