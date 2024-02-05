"use client";
import Lottie from 'react-lottie-player';
import lottieJson from '../../public/images/loading.json';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url('/images/load2.png')] bg-cover bg-center bg-no-repeat">
      <Lottie
        loop
        animationData={lottieJson}
        play
        speed={3}
        className="w-1/2 h-1/2 z-10"  
      />

      <p className="text-white text-2xl mt-4">Cargando...</p>
    </div>
  );
}
