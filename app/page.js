"use client";
import { useEffect } from 'react';
import styles from './page.module.css';
import Banner from '@/components/banner';
import CTA from '@/components/cta';

export default function Home() {
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

      // Ajustar la fórmula según si el navegador está en modo pantalla completa
      const diagonal = window.screen.width === width ? Math.sqrt(width * width + height * height) : Math.sqrt(width * width + height * height + 250000);
      const maxRotation = diagonal / 244;

      return maxRotation;
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main>
      <div id='hero-section' className={styles.hero}></div>
      <div className={styles.description}>
        <Banner />
        <CTA />
      </div>
      <p></p>
    </main>
  );
}
