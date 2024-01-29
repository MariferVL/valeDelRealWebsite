import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Logo from './navigation/Logo';

export default function Footer() {
  return (
    <footer className="w-full h-1/2 px-8 py-3 lg:py-8 flex items-center justify-center bg-gradient-to-t from-transparent to-white" style={{ zIndex: 1 }}>
      <div className=" w-3/4 sm:px-16 lg:w-2/3 w-full text-white flex flex-col">
        <div className="w-full text-md lg:text-xl font-bold">
          <h1 className="w-full text-primary lg:w-2/3">Descubre cómo podemos ayudarte. ¡Contáctanos!</h1>
        </div>
        <div className="flex mt-4 flex-col md:flex-row md:justify-between">
          <p className="w-full text-sm lg:text-md md:w-2/3 text-gray-600">En nuestro rincón de bienestar, estamos aquí para ti en cada paso de tu camino. Si tienes alguna pregunta o necesitas apoyo, no dudes en contactarnos. Creemos en construir juntos un camino hacia el bienestar.</p>
          <div className="w-44 pt-3 md:pt-0">
            <Link href="/contact" className="bg-primary justify-center text-center font-bold rounded-lg shadow px-10 py-3 flex items-center">Contáctanos</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-6 mb-3 flex-row justify-between items-center">
            <div>
              <Logo />
            </div>
            <Link href="/about" className="hidden md:block cursor-pointer text-gray-600 hover:text-primary uppercase">About</Link>
            <Link href="/services" className="hidden md:block cursor-pointer text-gray-600 hover:text-primary uppercase">Services</Link>
            <Link href="/testimony" className="hidden md:block cursor-pointer text-gray-600 hover:text-primary uppercase">Why us</Link>
            <Link href="/contact" className="hidden md:block cursor-pointer text-gray-600 hover:text-primary uppercase">Contact</Link>
            <div className="flex flex-row space-x-2 lg:space-x-4 items-center justify-between">
              <Link href="https://www.instagram.com/valeriadelreald" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://www.tiktok.com/@valeriadelreald" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://web.facebook.com/valeria.d.9?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
            </div>

          </div>
          <hr className="border-primary" />
          <p className="w-full text-center my-2 text-gray-600">Copyright © 2024 Valeria del Real</p>
        </div>
      </div>
    </footer>
  );
}
