import styles from './education.module.css'

export default function Education() {
    return (
        <section className={styles.timeline}>

            <div className={styles.title_wrapper}>
                <span className="material-symbols-outlined">school</span>
                <h3>Formação Acadêmica</h3>
            </div>

            <ol className={styles.timeline_list}>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>Faculdade de Análise e Desenvolvimento de Sistemas</h4>
                    <span>Cursando: 2º periodo</span>
                    <span>Previsão de formatura: Abril de 2027</span>
                    <p className={styles.timeline_text}>
                        Universidade Anhambi Morumbi
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>Técnico em Mecatrônica</h4>
                    <span>{'Janeiro de 2017 – Janeiro de 2019 (Trancado)'}</span>
                    <p className={styles.timeline_text}>
                        Etec Lauro Gomes em São Paulo
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>Auxiliar Técnico de Mecatrônica</h4>
                    <span>Outubro de 2013 a Junho de 2015</span>
                    <p className={styles.timeline_text}>
                        Instituto de Educação ABC
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>Informática Basica</h4>
                    <span>Outubro de 2010 a Outubro de 2011</span>
                    <p className={styles.timeline_text}>
                        Compuway Formação Profissional
                    </p>
                </li>

            </ol>

        </section>
    )
}