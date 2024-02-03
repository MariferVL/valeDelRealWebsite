"use client";
import Lottie from 'react-lottie-player';
import lottieJson from '../../public/images/loading.json';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <img
        src="/images/load2.png"  
        alt="Fondo de cielo nocturno en la Carga de Página"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <Lottie
        loop
        animationData={lottieJson}
        play
        speed="3"
        className="w-1/2 h-1/2 z-10"  
      />

      <p className="text-white text-2xl mt-4">Cargando...</p>
    </div>
  );
}
