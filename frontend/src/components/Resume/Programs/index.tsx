import styles from './programs.module.css'
import IconBox from '../../IconBox'
import Tooltip from '../../Tooltip'

export default function Programs() {
    return (
        <section className={styles.timeline}>

            <div className={styles.title_wrapper}>
                < IconBox />
                <h3>Programas</h3>
            </div>

            <ol className={styles.timeline_list}>
                <li className={styles.degree_timeline_item}>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="VSCode Icon" />
                        <Tooltip>VSCode</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" alt="PyCharm Icon" />
                        <Tooltip>PyCharm</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" alt="Premiere Icon" />
                        <Tooltip>Adobe Premiere</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" alt="After Icon" />
                        <Tooltip>Adobe After Effects</Tooltip>
                    </div>
                    <div className={styles.skills_icons}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop Icon"/>
                        <Tooltip>Adobe Photoshop</Tooltip>
                    </div>
                </li>
            </ol>
        </section>
    )
}