"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function UnderConstruction() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVideoSrc = () => {
    return windowWidth > 700 ? '/videos/underConstructionVideolg.mp4' : '/videos/underConstructionVideosm.mp4';
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
