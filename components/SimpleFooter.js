// components/SimpleFooter.js

import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function SimpleFooter() {
  return (
    // AÑADIMOS CLASES para posicionarlo de forma absoluta en la parte inferior
    <footer className="absolute bottom-0 left-0 w-full z-10 p-4">
      <div className="w-full text-white flex flex-col items-center">
        <div className="flex space-x-4">
          <Link href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl text-white hover:text-yellow-400 transition duration-300" />
          </Link>
          <Link href="https://www.instagram.com/valeriadelreald" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl text-white hover:text-yellow-400 transition duration-300" />
          </Link>
          <Link href="https://www.youtube.com/@escueladesexualidadsSgrada" target="_blank" rel="noopener noreferrer">
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
          Desarrollado y diseñado con amor por{" "}
          <Link href="https://github.com/MariferVL" target="_blank" rel="noopener noreferrer">
            <strong>MariferVL</strong>
          </Link>
          <br />
          <strong>
            © 2024 <em>Valeria del Real</em>. Todos los derechos reservados.
          </strong>
        </p>
      </div>
    </footer>
  );
}