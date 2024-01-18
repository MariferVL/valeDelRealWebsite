import Link from "next/link";
import classes from '../navigation.module.css';

const Sidebar = ({
    isOpen,
    toggle,
}) => {
    return (
        <>
            <div
                className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >
                <button className="absolute right-0 p-5" onClick={toggle}>
                    {/* Close icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        />
                    </svg>
                </button>

                <ul className="sidebar-nav text-center leading-relaxed text-xl">
                    <li>
                        <Link href="/about">Acerca de mi</Link>
                    </li>
                    <li>
                        <Link href="/services">Servicios</Link>
                    </li>
                    <li>
                        <Link href="/services/share">Compartir</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contacto</Link>
                    </li>
                    <li>
                        <Link href="/testimony">Testimonios</Link>
                    </li>
                    <li>
                        <Link href="/resources">Recursos Descargables</Link>
                    </li>
                    <li>
                        <Link href="/gallery">Galeria</Link>
                    </li>
                    <li>
                        <Link href="/faq">Preguntas Frecuentes</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
