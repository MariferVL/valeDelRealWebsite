"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function UnderConstruction() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agrega el listener para escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVideoSrc = () => {
    return windowWidth >= 768 ? '/videos/underConstructionVideolg.mp4' : '/videos/underConstructionVideosm.mp4';
  };

  return (
    <div>
      <video preload="none" autoPlay muted loop>
        <source
          src={getVideoSrc()}
          alt="Under Construction"
          type="video/mp4"
        />
        Tu navegador no admite la etiqueta de video.
      </video>
    </div>
  );
}
