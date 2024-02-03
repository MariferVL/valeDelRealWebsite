import ServiceCard from '@/components/servicecard';

const valeriaServices = [
  {
    title: 'Formación Anual para Facilitadores en Sexualidad Sagrada, Sanación de Útero y Próstata, y Alquimia Interior. Online',
    description: '¡Embárcate en un viaje transformador de 9 meses, desde abril a diciembre! Descubre la magia de la Sexualidad Sagrada en un entorno 100% vivencial, incluso en línea. ¿Listo para sanar y explorar tu ser integral?',
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
      { name: 'Duración', description: 'Pendiente' },
      { name: 'Modalidad', description: 'Online' },
      { name: 'Enfoque', description: 'Energía sexual, placer y buen vivir' },
      { name: 'Beneficios', description: 'Transformación de la relación con la sexualidad, potenciación del amor propio y la autoestima.' },
      { name: 'Incluye', description: 'Material didáctico, sesiones prácticas, acceso a recursos exclusivos' },
      { name: 'Requisitos', description: 'Abierto a todos, sin restricciones de género o experiencia previa en el tema.' },
    ],
    images: [
      "/images/workshops/w3.jpg",
      "/images/workshops/w5.jpg",
      "/images/workshops/w6.jpg",
      "/images/workshops/w7.jpg",
    ],
  },
  {
    title: 'Talleres Vivenciales',
    description: 'Sumérgete en espacios lúdicos y llenos de magia. Descubre la liberación de miedos y corazas mientras te permites vivir y disfrutarte plenamente. El contacto sutil y amoroso contigo y con los demás te espera.',
    features: [
      { name: 'Duración', description: 'Pendiente' },
      { name: 'Modalidad', description: 'Presencial' },
      { name: 'Enfoque', description: 'Liberación de miedos y corazas' },
      { name: 'Beneficios', description: '--' },
      { name: 'Incluye', description: 'Actividades prácticas, recursos para la autorreflexión, guía personalizada' },
      { name: 'Requisitos', description: 'No se requieren habilidades específicas, solo el deseo de explorar y conectarse.' },
    ],
    images: [
      "/images/workshops/taller2.jpg",
      "/images/workshops/taller3.jpg",
      "/images/workshops/taller4.jpg",
      "/images/workshops/taller1.jpg",
    ],
  },
  {
    title: 'Retiros',
    description: 'Ama retirarte y partir juntos a vivir la aventura de lo nuevo. Descubre lo desconocido y abre puertas a la renovación completa. Sal de tu zona de confort y deja que el alma y la mente se expandan.',
    features: [
      { name: 'Duración', description: 'Pendiente' },
      { name: 'Modalidad', description: 'Presencial' },
      { name: 'Enfoque', description: 'Renovación completa' },
      { name: 'Beneficios', description: '--' },
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
      { name: 'Duración', description: 'Pendiente' },
      { name: 'Modalidad', description: 'Online' },
      { name: 'Enfoque', description: 'Reconocer y sanar heridas para evolucionar junto a tu Alfa Familiar.' },
      { name: 'Beneficios', description: '--' },
      { name: 'Incluye', description: 'Sesión individual, seguimiento personalizado, material de apoyo' },
      { name: 'Requisitos', description: 'Disponibilidad para la introspección y el compromiso con el proceso.' },
    ],
    images: [
      "/images/workshops/w3.jpg",
      "/images/workshops/w5.jpg",
      "/images/workshops/w6.jpg",
      "/images/workshops/w7.jpg",
    ],
  },
  {
    title: 'Constelaciones Temáticas Grupales',
    description: 'Conéctate con heridas sistémicas a través de constelaciones temáticas grupales presenciales. Honra el espacio de dolor vivo en el Alma Familiar y encuentra nuevas fuerzas para continuar tu camino.',
    features: [
      { name: 'Duración', description: 'Pendiente' },
      { name: 'Modalidad', description: 'Presencial' },
      { name: 'Enfoque', description: '--' },
      { name: 'Beneficios', description: '--' },
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
      { name: 'Duración', description: 'Pendiente' },
      { name: 'Modalidad', description: 'Pendiente' },
      { name: 'Enfoque', description: '--' },
      { name: 'Bienestar', description: 'Libera heridas y bloqueos para tu total bienestar.' },
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
    <main className='mt-32 mx-16'>
      <header className='px-8'>
        <h1 className="text-4xl font-bold text-left mb-8 text-primary">
          Descubre una Jornada de Autoconocimiento y Bienestar
        </h1>
        <p className="text-lg text-left text-gray-700 mb-8">
          Transforma tu vida a través de servicios especializados en sexualidad sagrada y crecimiento personal.
        </p>
      </header>
      <div>
        {valeriaServices.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </main>

  );
}
