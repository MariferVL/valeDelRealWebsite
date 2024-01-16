import Link from "next/link";

export default function ServicesPage() {
    return <main>
        <h1>Los Servicios que te ofrezco:</h1>
        <p><Link href="/services/servicio-1">servicio 1</Link></p>
        <p><Link href="/services/servicio-2">servicio 2</Link></p>
        <p><Link href="/services/servicio-3">servicio 3</Link></p>
        
    </main>
}