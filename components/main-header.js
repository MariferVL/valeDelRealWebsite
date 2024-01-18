"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react'; 
import { FaBars } from 'react-icons/fa';  
import logoHorizontal from '@/assets/logoHorizontal.png'
import classes from '@/components/main-header.module.css';

export default function MainHeader() {
    const [showNav, setShowNav] = useState(false); 

    const toggleNavHandler = () => {
        setShowNav((prevShowNav) => !prevShowNav);
    };

    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoHorizontal} alt="Logo de Escuela Sexualidad Sagrada color amarillo y rojo" />
                Escuela de Sexualidad Sagrada Latinoamericana
            </Link>
            <div className={classes.menuIcon} onClick={toggleNavHandler}>
                <FaBars />
            </div>
            <nav className={`${classes.nav} ${showNav ? classes.show : ''}`}>
                <ul>
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
            </nav>
        </header>
    );

}