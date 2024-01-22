import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Información de contacto */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Contacto</h2>
          <p>Email: valeria@gmail.com</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Enlaces Rápidos</h2>
          <ul>
            <li>
              <a href="" className="text-gray-800 hover:text-yellow-400 transition duration-300">
                Link 1
              </a>
            </li>
            <li>
              <a href="" className="text-gray-800 hover:text-yellow-400 transition duration-300">
                 Link 2
              </a>
            </li>
          </ul>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/valeriadelreald" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="https://www.tiktok.com/@valeriadelreald" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-3xl hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="https://web.facebook.com/valeria.d.9?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n%20de%20la%20Escuela%20de%20Sexualidad%20Sagrada%20Latinoamericana,%20gracias" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-3xl hover:text-yellow-400 transition duration-300" />
          </a>
        </div>

      </div>

      {/* Derechos de autor */}
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Valeria Del Real. Todos los derechos reservados.</p>
        <p>
          Desarrollado por{' '}
          <a href="https://github.com/MariferVL" className="text-yellow-400 hover:text-gray-900 transition duration-300">
            MariferVL
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
