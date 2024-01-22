import Image from "next/image";
import styles from './about.module.css';
import UnderConstruction from "@/components/underConstruction";

export default function AboutPage() {
    return (
        <>
        <UnderConstruction />
            <h1>Acerca de mi</h1>
            <p>Información personal y profesional de Valeria</p>
            <div>
                <Image
                    src="/images/valeria/vale3.png"
                    alt="Valeria"
                    width={600}
                    height={400}
                />
            </div>            
            <p>Filosofía y enfoque en la terapia holística</p>
            </>
    );
}