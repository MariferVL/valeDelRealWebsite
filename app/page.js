import styles from './page.module.css';
import Banner from '@/components/banner';
import CTA from '@/components/cta';

export default function Home() {
  return (
    <>
      <section>
        <video preload="none" autoPlay muted loop className={styles.video}>
          <source src="/images/valeria/mainVideo.mp4" type="video/mp4" />
          Tu navegador no admite la etiqueta de video.
        </video>
      </section>
      <section>
        <Banner />
        <CTA />
      </section>

    </>
  );
}
