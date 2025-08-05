"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServiceCard({
  title,
  description,
  features,
  images,
  imagePosition = "left",
}) {
  const imageOrderClass =
    imagePosition === "left" ? "lg:order-first" : "lg:order-last";

  return (
    <motion.div
      className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-y-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-x-16 lg:px-8"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Columna de Imágenes con el diseño '1+3' */}
      <motion.div
        variants={itemVariants}
        className={`grid grid-cols-3 grid-rows-3 gap-2 w-full ${imageOrderClass}`}
      >
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
          <div
            key={imgSrc}
            className="relative aspect-square rounded-lg overflow-hidden" 
          >
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

      {/* Columna de Texto */}
      <motion.div variants={itemVariants} className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-gray-600">{description}</p>
        <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-accent">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </motion.div>
  );
}