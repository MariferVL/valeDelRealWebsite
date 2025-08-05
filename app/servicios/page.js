"use client";
import valeriaServices from "@/lib/servicesData";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section
        id="hero-section"
        className="relative w-full h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_services.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <motion.div
          className="relative max-w-2xl px-4 z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold font-serif"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            Descubre una Jornada de
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-3xl md:text-4xl text-primary font-sans font-bold"
          >
            Autoconocimiento y Bienestar.
          </motion.p>
        </motion.div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 pb-24">
        {valeriaServices.map((service, index) => (
          <div key={service.title}>
            <ServiceCard
              {...service}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />

            {index < valeriaServices.length - 1 && (
              <div className="relative my-12 mx-auto w-64 h-16">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: "url('/images/separador.webp')" }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
