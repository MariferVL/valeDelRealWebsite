import Image from "next/image";
import styles from './about.module.css';

export default function AboutPage() {
    return <main>
        <h1>Acerca de mi</h1>
        <p>Información personal y profesional de Valeria</p>
        <Image src="/images/valeria/vale3.png" alt="Foto perfil de Valeria del Real"/>
        <p>Filosofía y enfoque en la terapia holística</p>

    </main>
}