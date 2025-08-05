"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
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
      className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={itemVariants}
        className={`grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ${imageOrderClass}`}
      >
        {images.slice(0, 4).map((imgSrc) => (
          <div
            key={imgSrc}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={imgSrc}
              alt={`Imagen ilustrativa del servicio ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-gray-600">{description}</p>
        <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
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
