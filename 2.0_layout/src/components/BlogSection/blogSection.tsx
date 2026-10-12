import styles from './blog.module.css'

export default function BlogSection() {
  return (
    <section className={styles.page}>
      <div className={styles.blog_hero}>
        <div className={styles.blog_icon_wrap}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h13l3 3v13H4z" /><path d="M9 9h7M9 13h7M9 17h4" /></svg>
        </div>
        <h2 className={styles.headlineSmall}>Em breve, novos posts por aqui</h2>
        <p className={styles.lede}>Estou preparando conteúdos sobre web design, programação e tecnologia — processo, aprendizados e bastidores de projetos.</p>
        <div className={styles.notify_row}>
          <input placeholder="seu@email.com" />
          <button className={`${styles.btn} ${styles.btn_primary}`}>Avisar quando publicar</button>
        </div>
      </div>
    </section>
  )
}