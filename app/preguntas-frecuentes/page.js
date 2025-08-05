"use client";
import { useState } from 'react';
import FaqAccordion from '@/components/ui/FaqAccordion'; 

const faqData = [
  {
    question: "¿Qué es la Sexualidad Sagrada?",
    answer: "La Sexualidad Sagrada es una filosofía y práctica que ve la sexualidad como una fuerza vital y espiritual, una vía para la sanación, el autoconocimiento y la conexión profunda contigo mismo y con los demás. Va más allá del acto físico, integrando cuerpo, mente, emociones y espíritu."
  },
  {
    question: "¿Necesito tener experiencia previa para unirme a un taller o formación?",
    answer: "No, en absoluto. Mis programas están diseñados para recibir a personas de todos los niveles, desde quienes recién comienzan su camino de autodescubrimiento hasta facilitadores que buscan profundizar sus conocimientos. Lo único que necesitas es una mente y un corazón abiertos."
  },
  {
    question: "¿En qué se diferencia una Formación de un Diplomado?",
    answer: "La Formación Anual es un viaje profundo de 9 meses diseñado para quienes desean convertirse en facilitadores. El Diplomado es un programa más intensivo de 4 meses, enfocado en la transformación personal y en potenciar tu relación con la sexualidad y el amor propio."
  },
  {
    question: "¿Las actividades online son realmente vivenciales?",
    answer: "Sí. He desarrollado metodologías para que la experiencia online sea 100% vivencial y transformadora. Creamos un espacio sagrado y de confianza donde la conexión y la profundidad son igual de potentes que en un encuentro presencial."
  },
  {
    question: "¿Qué es una Constelación Familiar?",
    answer: "Es una terapia sistémica que nos permite mirar y sanar heridas profundas que a menudo provienen de nuestra historia familiar (biográficas, parentales y transgeneracionales). Es una herramienta poderosa para liberar bloqueos y encontrar un nuevo orden en tu vida."
  },
  {
    question: "¿Cómo puedo inscribirme o agendar una sesión?",
    answer: "Es muy fácil. Simplemente ve a la sección de 'Contacto' o haz clic en cualquiera de los botones de WhatsApp en el sitio para hablar directamente conmigo. Te guiaré en el proceso de inscripción y resolveré cualquier otra duda que tengas."
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <section 
        className="relative w-full min-h-[50vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/naturaleza2.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-serif" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Preguntas Frecuentes
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Encuentra respuestas a las dudas más comunes sobre mis servicios y la Sexualidad Sagrada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          {faqData.map((faq, index) => (
            <FaqAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}