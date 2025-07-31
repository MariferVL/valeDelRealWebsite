"use client";
import Link from "next/link";
import { Great_Vibes, Montserrat } from "next/font/google";

const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="h-full w-full hero-background relative flex items-center justify-center">
      
      {/* Capa semitransparente y contenido */}
      <div className="absolute inset-0 bg-black bg-opacity-30 lg:bg-opacity-10" />
      <div className="relative text-center lg:text-white lg:ml-64">
        <h1 className={`text-primary font-extrabold text-4xl mb-6 ${montserrat.className}`}>
          Explora Tu
          <strong className={`block lg:ml-32 font-extrabold text-white text-5xl lg:text-6xl ${great_vibes.className}`}>
            Bienestar Interior
          </strong>
        </h1>
        <div className="mt-6 lg:ml-32 flex justify-center">
          <Link href="/servicios" className="block rounded-full bg-transparent border border-primary px-4 py-3 text-lg w-56 lg:text-sm font-bold text-primary shadow hover:text-white hover:bg-primary transition-colors">
            Comienza tu viaje
          </Link>
        </div>
        <div className="mt-6 lg:ml-32 flex justify-center">
          <Link href="/acerca-de-mi" className="block rounded-full bg-transparent border border-white px-4 py-3 text-lg w-56 lg:text-sm font-bold text-white shadow hover:text-white hover:bg-secondary transition-colors">
            Conóceme
          </Link>
        </div>
      </div>
    </div>
  );
}
