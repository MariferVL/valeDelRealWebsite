"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      {/* SECCIÓN 1: Héroe de Presentación */}
      <section className="bg-gray-50 pt-24">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Contenedor de la imagen de Valeria */}
            <motion.div
              className="relative h-[60vh] lg:h-[70vh] rounded-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                alt="Foto de Valeria del Real de cuerpo completo"
                src="/images/valeria.webp"
                fill
                className="rounded-lg object-contain object-bottom"
              />
            </motion.div>

            <motion.div
              className="lg:py-12 text-center lg:text-left"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold sm:text-5xl font-serif text-primary">
                Valeria del Real
              </h1>
              <p className="mt-4 text-gray-600 font-sans">
                Creadora de la Escuela de Sexualidad Sagrada Latinoamericana y
                Terapeuta Holística.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contacto"
                  className="block w-full rounded-full bg-primary px-12 py-3 text-sm font-bold text-white shadow hover:bg-accent sm:w-auto transition-colors"
                >
                  Ponte en Contacto
                </Link>
                <Link
                  href="/servicios"
                  className="block w-full rounded-full bg-white px-12 py-3 text-sm font-bold text-primary shadow hover:text-accent sm:w-auto"
                >
                  Ver Servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: La Historia */}
      <section className="py-16 overflow-x-hidden">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center mb-16"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-96">
              <Image
                alt="Imagen representativa de la Isla de Pascua"
                src="/images/rapanui.webp"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="lg:py-12">
              <h2 className="text-3xl font-bold sm:text-4xl font-serif text-primary">
                Mi Historia
              </h2>
              <p className="mt-4 text-gray-700">
                Hace más de dos décadas, tuve una experiencia que transformó por
                completo mi vida. En 1997, en la mística isla de Rapa Nui,
                experimenté el Maha Mudra o el Orgasmo Cósmico, una iniciación
                inesperada que marcó el comienzo de un viaje de autoconocimiento
                y despertar espiritual. Desde entonces, he dedicado mi vida a
                explorar y compartir los misterios de la Sexualidad Sagrada.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-96 lg:order-last">
              <Image
                alt="Imagen representando transformación y bienestar"
                src="/images/vision.webp"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="lg:py-12 lg:order-first">
              <h2 className="text-3xl font-bold sm:text-4xl font-serif text-primary">
                Mi Visión
              </h2>
              <p className="mt-4 text-gray-700">
                La Sexualidad Sagrada transformó mi vida en 360 grados,
                abriéndome al autoamor, la abundancia, la creatividad y las
                relaciones auténticas. Mi misión es compartir estos
                conocimientos y experiencias contigo para que también puedas
                experimentar una vida plena y consciente. En la Escuela de
                Sexualidad Sagrada, ofrezco una variedad de programas y
                acompañamientos diseñados para ayudarte en tu camino de
                autoexploración y sanación.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
