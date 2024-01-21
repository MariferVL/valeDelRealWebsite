// En HeroSection.js
import { useEffect } from 'react';
import { handleMove } from '@/utils/hero-section';

export default function HeroSection() {
  useEffect(() => {
    const el = document.getElementById('hero-section');

    const handleMouseMove = (e) => {
      if (el) {
        const xVal = e.clientX;
        const yVal = e.clientY;

        const maxRotation = updateMaxRotation();

        const yRotation = maxRotation * ((xVal - window.innerWidth / 2) / window.innerWidth);
        const xRotation = -maxRotation * ((yVal - window.innerHeight / 2) / window.innerHeight);

        const limitedYRotation = Math.min(Math.max(yRotation, -maxRotation), maxRotation);
        const limitedXRotation = Math.min(Math.max(xRotation, -maxRotation), maxRotation);

        const string = `perspective(500px) rotateX(${limitedXRotation}deg) rotateY(${limitedYRotation}deg)`;

        el.style.transform = string;
      }
    };

    const updateMaxRotation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const diagonal = Math.sqrt(width * width + height * height);
      const maxRotation = diagonal / 440;

      return maxRotation;
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // No renderizamos nada en este componente
}
