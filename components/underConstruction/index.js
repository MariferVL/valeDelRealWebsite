"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function UnderConstruction() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agrega el listener para escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const isLargeScreen = windowWidth >= 1024;

  return (
    <div>
      <Image
        src={isLargeScreen ? '/images/UnderConstructionlg.png' : '/images/UnderConstructionsm.png'}
        alt="Under Construction"
        width={1920}
        height={1080}
      />
    </div>
  );
}
