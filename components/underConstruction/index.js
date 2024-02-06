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
      ? '/videos/underConstructionVideolg.mp4'
      : '/videos/underConstructionVideosm.mp4';

  return (
    <div>
      <video preload="none" autoPlay muted loop>
        <source
          src={videoSrc}
          alt="Video sobre página en construcción."
          type="video/mp4"
        />
        Tu navegador no admite la etiqueta de video.
      </video>
    </div>
  );
}
