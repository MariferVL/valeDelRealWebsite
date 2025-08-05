"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Animación simple para las secciones, se puede reutilizar
const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  viewport: { once: true, amount: 0.2 }
};

export default function ServiceCard({ title, description, features, images }) {
  return (
    // Contenedor principal de una sola columna
    <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* SECCIÓN 1: Título y Descripción */}
      <motion.div {...sectionAnimation} className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">{description}</p>
      </motion.div>

      {/* SECCIÓN 2: Contenedor que cambia de 1 a 2 columnas */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Columna Izquierda: Galería de Imágenes */}
        <motion.div {...sectionAnimation} className="grid grid-cols-3 grid-rows-3 gap-2 h-96 w-full">
          <div className="relative col-span-2 row-span-3 rounded-lg overflow-hidden">
            <Image
              src={images[0]}
              alt={`Imagen principal del servicio ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {images.slice(1, 4).map((imgSrc) => (
            <div key={imgSrc} className="relative rounded-lg overflow-hidden">
              <Image
                src={imgSrc}
                alt={`Imagen secundaria del servicio ${title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 15vw"
              />
            </div>
          ))}
        </motion.div>

        {/* Columna Derecha: Lista de Detalles */}
        <motion.div {...sectionAnimation} transition={{ delay: 0.2 }}>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-accent">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}