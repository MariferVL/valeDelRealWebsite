"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function DoorTransition () {
  const [playMusic, setPlayMusic] = useState(false);

  const handleEntrarConMusica = () => {
    setPlayMusic(true);
    router.push('/home');
  };

  const handleEntrarSinMusica = () => {
    setPlayMusic(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">¡Bienvenido/a al Sitio Web de Valeria del Real!</h1>
      <p className="text-center mb-6">Valeria del Real es una terapeuta especializada en terapias de sexualidad sagrada, formaciones, retiros y acompañamiento en bienestar personal.</p>
      <div className="space-y-2">
        <button
          className="px-6 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-accent"
          onClick={handleEntrarConMusica}
        >
          Entrar
        </button>
        <button
          className="px-6 py-3 bg-white text-primary font-bold rounded-lg shadow hover:bg-secondary"
          onClick={handleEntrarSinMusica}
        >
          Entrar sin música
        </button>
      </div>
    </div>
  );
};


