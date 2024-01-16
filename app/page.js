import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Probando Ando;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>
      <p>
      <Link href="/about">Acerca de mi</Link>
      <Link href="/services">Servicios</Link>
      <Link href="/services/share">Compartir</Link>
      <Link href="/contact">Contacto</Link>
      <Link href="/testimony">Testimonios</Link>
      <Link href="/resources">Recursos Descargables</Link>
      <Link href="/gallery">Galeria</Link>
      <Link href="/faq">Preguntas Frecuentes</Link>
      <Link href="/blog">Blog</Link>



      </p>
    </main>
  )
}
