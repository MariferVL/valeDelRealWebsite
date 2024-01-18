import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import CTA from '@/components/CTA'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Banner />
        <CTA />

      </div>
      <p>
      </p>
    </main>
  )
}
