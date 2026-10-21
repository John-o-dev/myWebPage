import CertificadosPage from './CertificadosPage/certificadosPage'
import styles from './perfilSection.module.css'

export default function PerfilSection() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>Perfil Profissional</p>
      <h2 className={styles.headlineSmall}>&lt;/&gt; Hello Devs</h2>
      <p className={styles.lede}>Desenvolvedor Web com foco em React, Next.js, JavaScript e HTML/CSS. Busco unir tecnologia, criatividade e impacto real em cada projeto.</p>
      <div className={styles.btn_row}>
        <button className={`${styles.btn} ${styles.btn_primary}`}>Ver Currículo Online</button>
        <button className={`${styles.btn} ${styles.btn_outline}`}>Download CV</button>
      </div>
      <div className={`${styles.section} ${styles.profile_grid}`}>
        <div>
          <h3 className={styles.block_title}>Formação Acadêmica</h3>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.dot}></span>
              <strong>Análise e Desenvolvimento de Sistemas</strong>
              <span className={styles.muted}>Cursando · 2º período · Anhembi Morumbi</span>
            </li>
            <li>
              <span className={styles.dot}></span>
              <strong>Técnico em Mecatrônica</strong>
              <span className={styles.muted}>2017 - 2019 · Etec Laura Gomes</span>
            </li>
            <li>
              <span className={styles.dot}></span>
              <strong>Auxiliar Técnico de Mecatrônica</strong>
              <span className={styles.muted}>2013 - 2015 · Instituto ABC</span>
            </li>
            <li>
              <span className={styles.dot}></span>
              <strong>Informática Básica</strong>
              <span className={styles.muted}>2010 - 2011 · Compuway</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.block_title}>Stacks e Tecnologias</h3>
          <div className={styles.icon_grid}>
            <div className={styles.chip_icon}>JS</div>
            <div className={styles.chip_icon}>TS</div>
            <div className={styles.chip_icon}>⚛</div>
            <div className={styles.chip_icon}>Py</div>
            <div className={styles.chip_icon}>N</div>
            <div className={styles.chip_icon}>CSS</div>
          </div>
          <h3 className={styles.block_title}>Ferramentas Criativas</h3>
          <div className={styles.icon_grid}>
            <div className={styles.chip_icon}>Fig</div>
            <div className={styles.chip_icon}>Ai</div>
            <div className={styles.chip_icon}>Ps</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>

        {/* <div className={styles.section_head}>
          <h3 className={styles.block_title}>Certificados</h3>
          <input className={styles.search_input} placeholder="Pesquisar..." type='search' />
        </div>
        
        <div className={styles.cert_grid}>
          <div className={styles.cert_card}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>
          </div>
          <div className={styles.cert_card}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>
          </div>
          <div className={styles.cert_card}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>
          </div>
        </div> */}

        <CertificadosPage />

      </div>
    </section>
  )
}