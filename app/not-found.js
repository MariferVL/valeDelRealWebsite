"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function NotFound() {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>

      <Image
        src={windowWidth >= 760 ? '/images/404-lg.png' : '/images/404-sm.png'}
        alt="404 Error. Página No Encontrada"
        width={windowWidth < 700 ? 800 : 1366}
        height={windowWidth < 700 ? 800 : 768}
        priority={true} 
        loading="eager" 
         
      />

      <Link href="/" className="absolute left-111 top-318 lg:left-885 lg:top-474 bg-transparent border border-secondary text-secondary rounded-full px-4 py-2">
        Volver al Inicio
      </Link>
    </main>
  );
};

