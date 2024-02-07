"use client";
import { useEffect, useState } from 'react';
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Great_Vibes, Montserrat } from 'next/font/google'

const great_vibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='relative min-h-screen'>
      <main className="relative">
        <video preload="none" autoPlay muted loop className="w-full h-screen lg:h-auto" style={windowWidth < 770 ? { objectFit: 'cover', objectPosition: '47%' } : {}}>
          <source
            src="/videos/mainVideoLg.mp4"
            alt="Video de Valeria saludando un condor en el cielo."
            type="video/mp4" 
            />
          Tu navegador no admite la etiqueta de video.
        </video>
        <div className="absolute inset-0 flex bg-black bg-opacity-30 lg:bg-opacity-10 items-center w-screen justify-center pl-8">
          <div className="w-screen text-center justify-center lg:text-white lg:ml-64 lg:justify-end">
            <h1 className={`text-primary font-extrabold text-4xl font-bold mb-6 ${montserrat.className}`}>
              Explora Tu <strong className={`block lg:ml-32 font-extrabold text-white lg:text-6xl ${great_vibes.className}`}> Bienestar Interior</strong>

            </h1>
            <div className="mt-6 lg:ml-32 flex justify-center">
              <Link href="/servicios" className="block rounded-full bg-transparent border border-primary px-4 py-3 text-lg w-56 lg:text-sm font-bold text-primary shadow hover:text-white hover:bg-primary focus:shadow-light  focus:outline-none focus:ring-none active:text-white active:border active:border-end active:bg-primary">
                Comienza tu viaje
              </Link>
            </div>
            <div className="mt-6 lg:ml-32 flex justify-center">
              <Link href="/acerca-de-mi" className="block rounded-full bg-transparent border border-white px-4 py-3 text-lg w-56 lg:text-sm font-bold text-white shadow hover:text-white hover:bg-secondary focus:shadow-accent  focus:outline-none focus:ring-none active:text-white active:border active:border-accent active:bg-secondary">
                Conóceme
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full lg:px-8 py-3 absolute bottom-0 md:z-50 flex items-center justify-center bg-transparent">        <div className="sm:px-16 sm:pt-16 w-full text-white flex flex-col">
        <div className="flex flex-col items-center">
          <div className="flex mt-4 space-x-4">
            <Link href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-xl text-white hover:text-yellow-400 transition duration-300" />
            </Link>
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
          </div>
          <hr className="border-primary w-2/3 mt-3" />
          <p className="w-full text-center mt-2 text-xs lg:text-base text-white">
            Desarrollado y diseñado con amor por <Link href="https://github.com/MariferVL" target="_blank" rel="noopener noreferrer"><strong>MariferVL</strong></Link><br />
            <strong>© 2024 <em>Valeria del Real</em>. Todos los derechos reservados.</strong>
          </p>
        </div>
      </div>
      </footer>
    </div>
  );
}
