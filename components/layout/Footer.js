import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "./navigation/Logo";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-gray-100 to-white">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        {/* Sección Superior: Título, Párrafo y Botón */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-center md:text-left">
          <div className="w-full md:w-2/3">
            <h2 className="text-xl lg:text-2xl font-bold text-primary">
              Descubre cómo podemos ayudarte. ¡Contáctanos!
            </h2>
            <p className="mt-2 text-sm lg:text-base text-gray-600">
              Estamos aquí para ti en cada paso de tu camino. Si tienes alguna
              pregunta o necesitas apoyo, no dudes en contactarnos.
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <Link
              href="https://api.whatsapp.com/send?phone=56990897824&text=Hola,%20quiero%20recibir%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white text-center font-bold rounded-lg shadow px-8 py-3 hover:bg-accent transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Sección Inferior: Logo, Links, Copyright */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="hidden md:block">
              <Logo showButton={false} logoSrc="/images/mainLogo2.webp" />
            </div>

            <div className="hidden md:flex gap-4 text-sm">
              <Link
                href="/acerca-de-mi"
                className="cursor-pointer text-gray-600 hover:text-primary uppercase"
              >
                Descubre mi Esencia
              </Link>
              <Link
                href="/servicios"
                className="cursor-pointer text-gray-600 hover:text-primary uppercase"
              >
                Explora mis Servicios
              </Link>
            </div>

            <div className="flex flex-row space-x-4 items-center">
              <Link
                href="https://api.whatsapp.com/send?phone=56990897824&text=Hola"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escríbenos en WhatsApp"
              >
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/valeriadelreald"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCL3girZaKpqnHMoaGp0AwhQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita nuestro canal de YouTube"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link
                href="https://www.tiktok.com/@valeriadelreald"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en TikTok"
              >
                <span className="sr-only">TikTok</span>
                <FaTiktok className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
              <Link
                href="https://web.facebook.com/valeria.d.9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="text-xl text-icon hover:text-yellow-400 transition duration-300" />
              </Link>
            </div>
          </div>

          <hr className="w-full border-primary" />

          <p className="w-full text-center text-xs lg:text-base text-gray-500">
            Desarrollado y diseñado con amor por{" "}
            <Link
              href="https://github.com/MariferVL"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-primary"
            >
              MariferVL
            </Link>
            <br />
            <strong>
              © 2024 <em>Valeria del Real</em>. Todos los derechos reservados.
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
