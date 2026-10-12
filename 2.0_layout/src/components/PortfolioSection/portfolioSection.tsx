import BgConstellation from '../bgConstellation/bgConstallation'
import GalleryRepos from './galleryRepos/galleryRepos'
import styles from './portfolioSection.module.css'

export default function PortfolioSection() {
  return (
    <section className={styles.page}>

      <BgConstellation />

      <p className={styles.eyebrow}>Portfólio</p>
      <h2 className={styles.headlineSmall}>Perfil GitHub</h2>
      <p className={styles.lede}>Projetos e experimentos do meu GitHub, organizados por tecnologia — do automação de processos a estudos de IA.</p>
      <div className={styles.stat_bar}>
        <div className={styles.stat_pill}><strong>68</strong><span>Repositórios</span></div>
        <div className={styles.stat_pill}><strong>10</strong><span>Seguidores</span></div>
        <div className={styles.stat_pill}><strong>3</strong><span>Seguindo</span></div>
      </div>
      <div className={styles.section_head}>
        <h3 className={styles.block_title}>Últimos Projetos</h3>
      </div>
      <div className={styles.project_grid}>
        <div className={styles.proj_card}>
          <div className={styles.proj_thumb}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" /></svg>
          </div>
          <div className={styles.proj_body}>
            <h4>Python Powerup</h4>
            <span className={styles.muted}>Atualizado 29/12/2025</span>
            <button className={styles.ghost_btn}>Mais informações</button>
          </div>
        </div>
        <div className={styles.proj_card}>
          <div className={styles.proj_thumb}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" /></svg>
          </div>
          <div className={styles.proj_body}>
            <h4>Python Insights</h4>
            <span className={styles.muted}>Atualizado 29/12/2025</span>
            <button className={styles.ghost_btn}>Mais informações</button>
          </div>
        </div>
        <div className={styles.proj_card}>
          <div className={styles.proj_thumb}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" /></svg>
          </div>
          <div className={styles.proj_body}>
            <h4>Python IA</h4>
            <span className={styles.muted}>Atualizado 29/12/2025</span>
            <button className={styles.ghost_btn}>Mais informações</button>
          </div>
        </div>
        <div className={styles.proj_card}>
          <div className={styles.proj_thumb}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" /></svg>
          </div>
          <div className={styles.proj_body}>
            <h4>Google Glass</h4>
            <span className={styles.muted}>Atualizado 20/11/2025</span>
            <button className={styles.ghost_btn}>Mais informações</button>
          </div>
        </div>
      </div>
      <div className={styles.filter_row}>
        <input className={styles.search_input} placeholder="Buscar repositório..." type="search" />
          <button className={styles.ghost_btn}>Filtrar por tecnologia ✕</button>
      </div>

      <GalleryRepos />
    </section>
  )
}