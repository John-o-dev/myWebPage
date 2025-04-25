import styles from './toolstecnologies.module.css'
import IconBox from '../../IconBox'
import Tooltip from '../../Tooltip'

export default function ToolsTecnologies () {
    return (
        <section className={styles.timeline}>

            <div className={styles.title_wrapper}>
                {/* < IconBox /> */}
                <h3>Linguagem | Framework | Software</h3>
            </div>

            <ol className={styles.timeline_list}>
                <li className={styles.degree_timeline_item}>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="Html5 Icon" />
                    <Tooltip>HTML5</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS3 Icon" />
                    <Tooltip>CSS3</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="bootstrap Icon"  />
                    <Tooltip>Bootstrap</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Icon" />
                    <Tooltip>JavaScript</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="ReactJS Icon"  />
                    <Tooltip>ReactJS</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="NextJS Icon" />
                    <Tooltip>NextJS</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJs Icon" />
                    <Tooltip>NodeJs</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python Icon" />
                    <Tooltip>Python</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt="Git Icon" />
                    <Tooltip>Git</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <i className="devicon-github-original-wordmark"></i>
                    <Tooltip>Github</Tooltip>
                </div>
                <div className={styles.skills_icons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="NPM Icon" />
                    <Tooltip>NPM</Tooltip>
                </div>							
                </li>
            </ol>
            </section>
    )
}