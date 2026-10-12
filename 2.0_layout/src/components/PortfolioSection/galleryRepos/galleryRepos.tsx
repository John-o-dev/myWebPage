import styles from './galleryRepos.module.css'

export default function GalleryRepos() {
  return (
    <>
      <section>
        <div className={styles.chip_row}>
          <button className={`${styles.lang_chip} ${styles.active}`}>
            <span className={`${styles.dot} ${styles.dotAll}`}></span>Todos
          </button>
          <button className={styles.lang_chip}>
            <span className={`${styles.dot} ${styles.dotJavascript}`}></span>JavaScript
          </button>
          <button className={styles.lang_chip}>
            <span className={`${styles.dot} ${styles.dotPython}`}></span>Python
          </button>
          <button className={styles.lang_chip}>
            <span className={`${styles.dot} ${styles.dotReact}`}></span>React
          </button>
          <button className={styles.lang_chip}>
            <span className={`${styles.dot} ${styles.dotNode}`}></span>Node
          </button>
          <button className={styles.lang_chip}>
            <span className={`${styles.dot} ${styles.dotTypeScript}`}></span>TypeScript
          </button>
        </div>

        {/* PYTHON */}
        <div className={styles.section_block} id="python">
          <div className={styles.section_header}>
            <div className={`${styles.section_badge} ${styles.color_python}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 4c-2.2 0-3 1-3 3v2H3v2h2v2c0 2 .8 3 3 3h2v-2H8c-1 0-1-.5-1-1v-2h4V9H7V7c0-.5 0-1 1-1h2V4z" /><path d="M16 20c2.2 0 3-1 3-3v-2h2v-2h-2v-2c0-2-.8-3-3-3h-2v2h2c1 0 1 .5 1 1v2h-4v2h4v2c0 .5 0 1-1 1h-2v2z" /></svg>
            </div>
            <h3>Python</h3>
            <span className={styles.section_count}>4 repositórios</span>
          </div>

          <div className={styles.grid}>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_python}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 4c-2.2 0-3 1-3 3v2H3v2h2v2c0 2 .8 3 3 3h2v-2H8c-1 0-1-.5-1-1v-2h4V9H7V7c0-.5 0-1 1-1h2V4z" /><path d="M16 20c2.2 0 3-1 3-3v-2h2v-2h-2v-2c0-2-.8-3-3-3h-2v2h2c1 0 1 .5 1 1v2h-4v2h4v2c0 .5 0 1-1 1h-2v2z" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Project Python Powerup</h4>
                <p>Automação do processo de cadastro de clientes com validação de dados.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_python}`}></span>
                    Python
                  </span>
                  <div className={styles.meta}>
                    <span>
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>
                      14
                    </span>
                    <span>29/12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_python}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 4c-2.2 0-3 1-3 3v2H3v2h2v2c0 2 .8 3 3 3h2v-2H8c-1 0-1-.5-1-1v-2h4V9H7V7c0-.5 0-1 1-1h2V4z" /><path d="M16 20c2.2 0 3-1 3-3v-2h2v-2h-2v-2c0-2-.8-3-3-3h-2v2h2c1 0 1 .5 1 1v2h-4v2h4v2c0 .5 0 1-1 1h-2v2z" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Project Python Insights</h4>
                <p>Análise de cancelamento de clientes com dashboards e métricas.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_python}`}></span>
                    Python
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>9</span>
                    <span>29/12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_python}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 4c-2.2 0-3 1-3 3v2H3v2h2v2c0 2 .8 3 3 3h2v-2H8c-1 0-1-.5-1-1v-2h4V9H7V7c0-.5 0-1 1-1h2V4z" /><path d="M16 20c2.2 0 3-1 3-3v-2h2v-2h-2v-2c0-2-.8-3-3-3h-2v2h2c1 0 1 .5 1 1v2h-4v2h4v2c0 .5 0 1-1 1h-2v2z" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Project Python IA</h4>
                <p>Experimentos com modelos de machine learning para classNameificação de texto.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_python}`}></span>
                    Python
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>21</span>
                    <span>29/12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_python}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 4c-2.2 0-3 1-3 3v2H3v2h2v2c0 2 .8 3 3 3h2v-2H8c-1 0-1-.5-1-1v-2h4V9H7V7c0-.5 0-1 1-1h2V4z" /><path d="M16 20c2.2 0 3-1 3-3v-2h2v-2h-2v-2c0-2-.8-3-3-3h-2v2h2c1 0 1 .5 1 1v2h-4v2h4v2c0 .5 0 1-1 1h-2v2z" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Data Scraper</h4>
                <p>Coletor de dados públicos com exportação automática para planilhas.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_python}`}></span>
                    Python
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>4</span>
                    <span>24/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JAVASCRIPT */}
        <div className={styles.section_block} id="javascript">

          <div className={styles.section_header}>
            <div className={`${styles.section_badge} ${styles.color_javascript}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h12M9 4v13a2 2 0 0 1-4 0M18 4v11a2.5 2.5 0 0 1-5 0v-1" /></svg>
            </div>
            <h3>JavaScript</h3>
            <span className={styles.section_count}>2 repositórios</span>
          </div>

          <div className={`${styles.grid} ${styles.cols_2}`}>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_javascript}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h12M9 4v13a2 2 0 0 1-4 0M18 4v11a2.5 2.5 0 0 1-5 0v-1" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Google Glass Project</h4>
                <p>Estudo de interface para dispositivos wearable com foco em acessibilidade.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_javascript}`}></span>
                    JavaScript
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>5</span>
                    <span>20/11</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_javascript}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h12M9 4v13a2 2 0 0 1-4 0M18 4v11a2.5 2.5 0 0 1-5 0v-1" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Chatbot Studies</h4>
                <p>Protótipo de chatbot com integração a API de linguagem natural.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_javascript}`}></span>
                    JavaScript
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>3</span>
                    <span>09/10</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* REACT */}
        <div className={styles.section_block} id="react">
          <div className={styles.section_header}>
            <div className={`${styles.section_badge} ${styles.color_react}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="12" rx="9" ry="3.6" /><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" /></svg>
            </div>
            <h3>React</h3>
            <span className={styles.section_count}>1 repositório</span>
          </div>

          <div className={`${styles.grid} ${styles.cols_1}`}>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_react}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><ellipse cx="12" cy="12" rx="9" ry="3.6" /><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Portfolio Next.js</h4>
                <p>Site pessoal em Next.js com rotas dinâmicas e suporte a i18n.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_react}`}></span>
                    React
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>7</span>
                    <span>18/12</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TYPESCRIPT */}
        <div className={styles.section_block} id="typescript">

          <div className={styles.section_header}>
            <div className={`${styles.section_badge} ${styles.color_typescript}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 8h8M8 8v10M14 12c0-1 1-1.6 2-1.6s2 .5 2 1.4c0 2-4.2 1.7-4.2 4 0 1 1 1.6 2.2 1.6s2-.4 2-1.2" /></svg>
            </div>
            <h3>TypeScript</h3>
            <span className={styles.section_count}>1 repositório</span>
          </div>

          <div className={`${styles.grid} ${styles.cols_1}`}>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_typescript}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 8h8M8 8v10M14 12c0-1 1-1.6 2-1.6s2 .5 2 1.4c0 2-4.2 1.7-4.2 4 0 1 1 1.6 2.2 1.6s2-.4 2-1.2" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>UI Kit — Design System</h4>
                <p>Biblioteca de componentes reutilizáveis em TypeScript e CSS Modules.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_typescript}`}></span>
                    TypeScript
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>16</span>
                    <span>02/11</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ANGULAR */}
        <div className={styles.section_block} id="angular">
          <div className={styles.section_header}>
            <div className={`${styles.section_badge} ${styles.color_angular}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l8 3-1.2 10L12 21l-6.8-5L4 6z" /><path d="M8.5 15h7M9.6 12.5h4.8M12 7l-2.4 5.5M12 7l2.4 5.5" /></svg>
            </div>
            <h3>Angular</h3>
            <span className={styles.section_count}>1 repositório</span>
          </div>

          <div className={`${styles.grid} ${styles.cols_1}`}>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_angular}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3l8 3-1.2 10L12 21l-6.8-5L4 6z" /><path d="M8.5 15h7M9.6 12.5h4.8M12 7l-2.4 5.5M12 7l2.4 5.5" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Dashboard Financeiro</h4>
                <p>Painel administrativo com gráficos, filtros dinâmicos e gestão de usuários.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_angular}`}></span>
                    Angular
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>6</span>
                    <span>14/09</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* C# */}
        <div className={styles.section_block} id="csharp">
          <div className={styles.section_header}>
            <div className={`${styles.section_badge} ${styles.color_csharp}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 4l-1 16M15.5 4l-1 16M5 9h14M4.5 15h14" /></svg>
            </div>
            <h3>C#</h3>
            <span className={styles.section_count}>1 repositório</span>
          </div>
          <div className={`${styles.grid} ${styles.cols_1}`}>
            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_csharp}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 4l-1 16M15.5 4l-1 16M5 9h14M4.5 15h14" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>Sistema de Estoque .NET</h4>
                <p>API em C# com sistema desktop para controle de estoque e relatórios.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_csharp}`}></span>
                    C#
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>8</span>
                    <span>02/09</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE */}
        <div className={styles.section_block} id="node">

          <div className={styles.section_header}>
            <div className={`${styles.section_badge} ${styles.color_node}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l8 4.6v10.8L12 22l-8-4.6V6.6z" /></svg>
            </div>
            <h3>Node</h3>
            <span className={styles.section_count}>1 repositório</span>
          </div>

          <div className={`${styles.grid} ${styles.cols_1}`}>

            <div className={styles.card}>
              <div className={`${styles.card_thumb} ${styles.color_node}`}>
                <svg className={styles.thumb_icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 2l8 4.6v10.8L12 22l-8-4.6V6.6z" /></svg>
              </div>
              <div className={styles.card_body}>
                <h4>API Node Auth</h4>
                <p>API REST com autenticação JWT e boas práticas de segurança.</p>
                <div className={styles.card_foot}>
                  <span className={styles.lang_tag}>
                    <span className={`${styles.dot} ${styles.bg_dot_node}`}></span>
                    Node
                  </span>
                  <div className={styles.meta}>
                    <span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 1-4.5 4.5L17 20l-5-3-5 3 1.5-6.5L4 9l6-1z" /></svg>11</span>
                    <span>08/11</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}