import ServiceCard from '@/components/servicecard';
import Link from 'next/link';
import { Great_Vibes, Montserrat } from 'next/font/google'
import Footer from '@/components/footer';

const great_vibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const valeriaServices = [
  {
    title: 'Formación Anual para Facilitadores en Sexualidad Sagrada, Sanación de Útero y Próstata, y Alquimia Interior. Online',
    description: 'Embárcate en un viaje transformador de 9 meses, desde abril a diciembre. Descubre la magia de la Sexualidad Sagrada en un entorno 100% vivencial, incluso en línea. Listo para sanar y explorar tu ser integral?',
    features: [
      { name: 'Duración', description: '9 meses, desde abril a diciembre' },
      { name: 'Modalidad', description: 'Online' },
      { name: 'Enfoque', description: 'Vivencial y experiencial' },
      { name: 'Beneficios', description: 'Comprender, recordar y habitar desde tu ser integral. Ideal para iniciantes y aquellos que buscan expandir sus conocimientos en Sexualidad Sagrada.' },
      { name: 'Incluye', description: 'Material de estudio, acceso a sesiones en línea, certificado de finalización' },
      { name: 'Requisitos', description: 'No se requieren conocimientos previos, solo una mente abierta y un deseo de crecimiento personal.' },
    ],
    images: [
      "/images/workshops/formacion1.jpg",
      "/images/workshops/formacion2.jpg",
      "/images/workshops/formacion3.png",
      "/images/workshops/formacion4.png",
    ],
  },
  {
    title: 'Diplomado de Sexualidad Sagrada y Alquimia Interior',
    description: 'Conecta con tu energía sexual, abre las puertas al placer y al buen vivir. Un programa intensivo de 4 meses que volará mientras transformas tu relación con la sexualidad, amor propio y autoestima.',
    features: [
      { name: 'Duración', description: '4 meses' },
      { name: 'Modalidad', description: 'Online' },
      { name: 'Enfoque', description: 'Energía sexual, placer y buen vivir' },
      { name: 'Beneficios', description: 'Transformación de la relación con la sexualidad, potenciación del amor propio y la autoestima.' },
      { name: 'Incluye', description: 'Material didáctico, sesiones prácticas, acceso a recursos exclusivos' },
      { name: 'Requisitos', description: 'Abierto a todos, sin restricciones de género o experiencia previa en el tema.' },
    ],
    images: [
      "/images/workshops/diplomado1.png",
      "/images/workshops/diplomado2.png",
      "/images/workshops/diplomado3.png",
      "/images/workshops/diplomado4.png",
    ],
  },
  {
    title: 'Talleres Vivenciales',
    description: 'Sumérgete en espacios lúdicos y llenos de magia. Descubre la liberación de miedos y corazas mientras te permites vivir y disfrutarte plenamente. El contacto sutil y amoroso contigo y con los demás te espera.',
    features: [
      { name: 'Duración', description: '3-4 horas aprox.' },
      { name: 'Modalidad', description: 'Presencial' },
      { name: 'Enfoque', description: 'Liberación de miedos y corazas' },
      { name: 'Beneficios', description: 'Experimenta la liberación de miedos y corazas, permitiéndote vivir plenamente.' },
      { name: 'Incluye', description: 'Actividades prácticas, recursos para la autorreflexión, guía personalizada' },
      { name: 'Requisitos', description: 'No se requieren habilidades específicas, solo el deseo de explorar y conectarse.' },
    ],
    images: [
      "/images/workshops/taller2.jpg",
      "/images/workshops/taller3.jpg",
      "/images/workshops/taller4.jpg",
      "/images/workshops/taller1.png",
    ],
  },
  {
    title: 'Retiros',
    description: 'Ama retirarte y partir juntos a vivir la aventura de lo nuevo. Descubre lo desconocido y abre puertas a la renovación completa. Sal de tu zona de confort y deja que el alma y la mente se expandan.',
    features: [
      { name: 'Duración', description: 'Consultanos por un retiro en específico.' },
      { name: 'Modalidad', description: 'Presencial' },
      { name: 'Enfoque', description: 'Renovación completa' },
      { name: 'Beneficios', description: 'Experimenta la aventura de lo nuevo, sal de tu zona de confort y permite la expansión del alma y la mente.' },
      { name: 'Incluye', description: 'Alojamiento, actividades programadas, materiales de retiro' },
      { name: 'Requisitos', description: 'Disposición para la exploración personal y apertura a nuevas experiencias.' },
    ],
    images: [
      "/images/workshops/extra1.jpg",
      "/images/workshops/extra2.jpg",
      "/images/workshops/w14.jpg",
      "/images/workshops/w1.jpg",
    ],
  },
  {
    title: 'Constelación Familiar Individual',
    description: '¿Qué te duele? ¿Qué necesitas mirar para dar un nuevo paso en tu vida? Explora a través de constelaciones familiares individuales online. Reconoce y sana heridas biográficas, parentales y transgeneracionales.',
    features: [
      { name: 'Duración', description: '1-2 horas aprox.' },
      { name: 'Modalidad', description: 'Online' },
      { name: 'Enfoque', description: 'Reconocer y sanar heridas para evolucionar junto a tu Alfa Familiar.' },
      { name: 'Beneficios', description: 'Exploración y sanación de heridas biográficas, parentales y transgeneracionales.' },
      { name: 'Incluye', description: 'Sesión individual, seguimiento personalizado, material de apoyo' },
      { name: 'Requisitos', description: 'Disponibilidad para la introspección y el compromiso con el proceso.' },
    ],
    images: [
      "/images/workshops/individual1.png",
      "/images/workshops/individual2.png",
      "/images/workshops/individual3.png",
      "/images/workshops/individual4.png",
    ],
  },
  {
    title: 'Constelaciones Temáticas Grupales',
    description: 'Conéctate con heridas sistémicas a través de constelaciones temáticas grupales presenciales. Honra el espacio de dolor vivo en el Alma Familiar y encuentra nuevas fuerzas para continuar tu camino.',
    features: [
      { name: 'Duración', description: '3-4 horas aprox.' },
      { name: 'Modalidad', description: 'Presencial' },
      { name: 'Enfoque', description: 'Conexión con heridas sistémicas' },
      { name: 'Beneficios', description: 'Honra el dolor vivo en el Alma Familiar, encuentra nuevas fuerzas para continuar tu camino.' },
      { name: 'Incluye', description: 'Sesión grupal, ejercicios de conexión, recursos temáticos' },
      { name: 'Requisitos', description: 'Participación activa y respeto hacia los demás miembros del grupo.' },
    ],
    images: [
      "/images/workshops/constela1.jpg",
      "/images/workshops/constela2.jpg",
      "/images/workshops/constela3.jpg",
      "/images/workshops/constela4.jpg",
    ],
  },
  {
    title: 'Acompañamiento en Sexualidad',
    description: 'Recibe terapia holística y descubre la integralidad de la sexualidad. Desde la mente y el cuerpo hasta el ser espiritual, las emociones, la historia y lo transgeneracional. Libera heridas y bloqueos para tu total bienestar.',
    features: [
      { name: 'Duración', description: '1 hora' },
      { name: 'Modalidad', description: 'Online' },
      { name: 'Enfoque', description: 'Terapia holística para la integralidad de la sexualidad' },
      { name: 'Beneficios', description: 'Libera heridas y bloqueos para tu total bienestar.' },
      { name: 'Incluye', description: 'Sesiones personalizadas, enfoque integral, recursos para el crecimiento personal' },
      { name: 'Requisitos', description: 'Compromiso con el proceso terapéutico y apertura a la transformación.' },
    ],
    images: [
      "/images/workshops/ext1.png",
      "/images/workshops/ext2.png",
      "/images/workshops/ext3.png",
      "/images/workshops/ext4.png",
    ],
  },
];


export default function ServicesPage() {
  return (

    <>
      <main>
        <section
          id='hero-section'
          className="relative mb-16 z-1 bg-[url('/images/mainService.png')] bg-contain lg:bg-cover bg-center bg-no-repeat"
        >
          <div
            className="absolute inset-0 bg-white bg-opacity-40 lg:bg-opacity-10"
          ></div>

          <div
            className="relative mx-auto max-w-screen-xl pl-4 sm:px-6 lg:flex lg:h-screen lg:justify-end lg:items-center lg:pl-8"
          >
            <div className="max-w-lg lg:p-5 lg:mt-48  rtl:sm:text-right lg:bg-light lg:bg-opacity-30">
              <h1 className={`text-5xl font-extrabold font-bold text-left mb-3 text-white  ${great_vibes.className}`}>
                Descubre una Jornada de
                <strong className={`block text-4xl font-extrabold text-rose-700 ${montserrat.className}`}> Autoconocimiento y Bienestar. </strong>
              </h1>

              <p className={`max-w-lg sm:text-3xl/relaxed  ${great_vibes.className}`}>
                Transforma tu vida a través de servicios especializados en sexualidad sagrada y crecimiento personal.
              </p>
            </div>

          </div>
        </section>
        <div className='mx-8'>
          <div className="relative my-6 mx-auto w-64 h-16">
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/separador.png')" }}></div>
          </div>
          {valeriaServices.map((service, index) => (
            <>
              <ServiceCard key={index} {...service} />
              <div className="relative my-6 mx-auto w-64 h-16">
                <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/separador.png')" }}></div>
              </div>
            </>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
