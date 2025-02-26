import styles from './education.module.css'
import IconBox from '../../IconBox'

export default function Education() {
    return (
        <section className={styles.timeline}>

            <div className={styles.title_wrapper}>
                < IconBox />
                <h3>Formação</h3>
            </div>

            <ol className={styles.timeline_list}>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>Faculdade de Análise e Desenvolvimento de Sistemas</h4>
                    <span>2024 — Atualmente</span>
                    <p className={styles.timeline_text}>
                        Anhambi Morumbi
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>Técnico em Mecatrônica</h4>
                    <span>2000 — 2000</span>
                    <p className={styles.timeline_text}>
                        ETEC Lauto Gomes
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>Profissionalizante de Mecatrônica</h4>
                    <span>2014 — 2015</span>
                    <p className={styles.timeline_text}>
                        Instituto de Educação ABC
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>Informática Basica</h4>
                    <span>2010 — 2011</span>
                    <p className={styles.timeline_text}>
                        Compuway
                    </p>
                </li>

            </ol>

        </section>
    )
}