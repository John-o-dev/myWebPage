import styles from './learning.module.css'
import IconBox from '../../IconBox'
import Tooltip from '../../Tooltip'

export default function Learning() {
    return (
        <section className={styles.timeline}>

            <div className={styles.title_wrapper}>
                < IconBox />
                <h3>Estou aprendendo</h3>
            </div>

            <ol className={styles.timeline_list}>
                <li className={styles.degree_timeline_item}>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular Icon" />
                        < Tooltip >Angular</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP Icon" />
                        < Tooltip >PHP</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Sass Icon" />
                        < Tooltip >Sass</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg" alt="Redis Icon" />
                        < Tooltip >Redis</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySql Icon" />
                        < Tooltip >MySql</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL Icon" />
                        < Tooltip >SQL</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <i className="devicon-mongoose-original-wordmark"></i>
                        < Tooltip >Mongoose</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB Icon" />
                        < Tooltip >MongoDB</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="Postgresql Icon" />
                        < Tooltip >Postgresql</Tooltip>
                    </div>
                </li>
            </ol>
        </section>
    )
}