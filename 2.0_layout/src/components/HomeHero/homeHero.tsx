import VideoBackground from '../VideoBackground/videoBackground'
import styles from './homeHero.module.css'

export default function HomeHero() {
  return (
    <section className={styles.page}>
      <VideoBackground
        desktop={{
          webm: "/video/earth_desktop/earth_desktop-web.webm",
          mp4: "/video/earth_desktop/earth_desktop.mp4",
          poster: "/video/earth_desktop/earth_desktop.jpg",
        }}
        mobile={{
          webm: "/video/earth_mobile/earth_mobile-web.webm",
          mp4: "/video/earth_mobile/earth_mobile.mp4",
          poster: "/video/earth_mobile/earth_mobile.jpg",
        }}
      />
      <div className={styles.home_hero}>
        <div className={styles.home_text}>
          <p className={styles.eyebrow}>Olá, eu sou</p>
          <h1 className={styles.headline}>Antonio Rodrigues<br />Lima Filho</h1>
          <p className={styles.lede}>
            <span className={styles.accent}>Desenvolvedor Web</span> apaixonado por criar experiências digitais. Compartilho meu processo e projetos como <strong>John Odev</strong>.
          </p>
          <div className={styles.btn_row}>
            <button className={`${styles.btn} ${styles.btn_primary}`}>Ver Currículo Online</button>
            <button className={`${styles.btn} ${styles.btn_outline}`}>Download CV</button>
          </div>
          <div className={styles.social_row}>
            <a href="#"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1 3.6 3.7-1A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 1 1 12 20z" /></svg></a>
            <a href="#"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.4H3.7V20h3.2V8.4zM5.3 3.3a1.9 1.9 0 1 0 0 3.7 1.9 1.9 0 0 0 0-3.7zM20.3 20h-3.2v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20H9.6V8.4h3v1.6h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9V20z" /></svg></a>
            <a href="#"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" /></svg></a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.3" cy="6.7" r="1" /></svg></a>
          </div>
        </div>
        <div className={styles.home_visual}>
          <div className={styles.avatar_ring}>
            <div className={`${styles.float_chip} ${styles.chip_1}`}>
              <strong>68</strong><span>Repositórios</span>
            </div>
            <div className={`${styles.float_chip} ${styles.chip_2}`}>
              <strong>5+</strong><span>Stacks</span>
            </div>
            <div className={`${styles.float_chip} ${styles.chip_3}`}>
              <strong>2027</strong><span>Formatura prevista</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}