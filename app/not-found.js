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

  const fadeInStyle = {
    opacity: 1,
    animation: 'fadeIn 1s ease-in',
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-initial to-white">
      <div className="text-center" style={fadeInStyle}>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">¡Oops! Página no encontrada</h1>
        <p className="text-gray-600 mb-4">La página que buscas no existe.</p>
        <p className="text-gray-600 mb-8">Vuelve a la <Link href="/">página principal</Link> o intenta otra vez.</p>
        {/* <Image
          src={windowWidth >= 1024 ? '/images/404-lg.png' : '/images/404-sm.png'}
          alt="404 Not Found"
          width={800}
          height={600}
          className="mx-auto"
        /> */}
      </div>
    </div>
  );
};

