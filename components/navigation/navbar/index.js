import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import classes from '../navigation.module.css';

const Navbar = ({ toggle }) => {

    const [isHeader, setHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`w-full sticky text-text-color top-0 z-50 ${isHeader ? 'bg-primary h-16' : 'bg-transparent h-20'}`}>
                <div className="flex justify-between items-center h-full">
                    <Logo />
                    <button
                        type="button"
                        className="inline-flex items-center md:hidden"
                        onClick={toggle}
                    >
                        <svg
                            xmlns="http:www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#ffffff"
                                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                            />
                        </svg>
                    </button>
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li className={classes.link}>
                            <Link href="/about">Acerca de mí</Link>
                        </li>
                        <li className={classes.link}>

                            <Link href="/services">Servicios</Link>
                        </li>
                        <li className={classes.link}>

                            <Link href="/testimony">Testimonios</Link>
                        </li>
                        <li className={`${classes.link} ${isHeader ? 'text-text-color' : 'text-end'} relative group pb-1`}>
                            <span className={classes.link}>Información</span>
                            <ul className="absolute hidden group-hover:block bg-light text-white p-2 space-y-2">
                                <li>
                                    <Link href="/resources">Descargables</Link>
                                </li>
                                <li>
                                    <Link href="/gallery">Galería</Link>
                                </li>

                                <li>
                                    <Link href="/faq">Preguntas Frecuentes</Link>
                                </li>

                            </ul>
                        </li>
                        <li className={classes.link}>

                            <Link href="/blog">Blog</Link>
                        </li>


                    </ul>
                    <div className="hidden md:block">
                        <Button />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
