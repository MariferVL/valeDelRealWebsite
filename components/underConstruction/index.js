"use client";
import { useEffect, useState } from 'react';

export default function UnderConstruction() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const videoSrc =
    windowWidth > 700
      ? '/animations/constructionL.webm'
      : '/animations/constructionS.webm';

  return (
    <div>
      {/* FIXME: */}
      <video preload="auto" autoPlay muted loop>
        <source
          src={videoSrc}
          alt="Animación sobre página en construcción."
          type="video/mp4"
        />
        Tu navegador no admite la etiqueta de video.
      </video>
    </div>
  );
}
