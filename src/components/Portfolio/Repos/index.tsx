import useTranslation from '@/src/hooks/useTranslation';
import styles from './repos.module.css'

import { ReposProps } from '@/src/types/repos';
import { formatDate } from "@/src/utils/format";

type Props = {
  repos: ReposProps[];
}

export default function Repos({ repos }: Props) {
    const className = "portfolio";
    const classComponent = "repos";
    const { t } = useTranslation();
    return (
        <div className={styles.repos}>
            <h2 className={styles.subtitle}>{t(className, `${classComponent}_subtitle`)}: </h2>
            <ul className={styles.project_list}>

                {repos.map(repo => (
                    <li className={`${styles.project_item} ${styles.active}`} key={repo.name}>
                        <div>
                            <div className={styles.project_name_img}>
                                <a href="#">
                                    <h3 className={styles.projects_item_title}>{repo.description}</h3>
                                    <figure className={styles.project_img}>
                                        <div className={styles.project_item_icon_box}>
                                            {/* <ion-icon name="eye-outline"></ion-icon> */}
                                        </div>
                                        <img src="https://raw.githubusercontent.com/John-o-dev/webpage-Multi-Language/refs/heads/master/thumbnail.jpeg" alt="thumbnail rep" loading="lazy" />
                                    </figure>
                                </a>
                            </div>

                            <div className={styles.projects_item_infos}>
                                <div className={styles.date_container}>
                                    <span className={styles.createAt}>{t(className, `${classComponent}_createdAt`)}: <br />{formatDate(repo.created_at)}</span>
                                    <span className={styles.updateAt}>{t(className, `${classComponent}_updatedAt`)}: <br />{formatDate(repo.updated_at)}</span>
                                </div>
                                <div className={styles.languages_container}>
                                    <div className={styles.language_content}>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='javascript' />
                                        <span>Javascrip</span>
                                    </div>
                                    <div className={styles.language_content}>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css3' />
                                        <span>CSS</span>
                                    </div>
                                    <div className={styles.language_content}>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html5' />
                                        <span>HTML</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projects_item_actions}>
                                <div className={styles.projects_item_btn_box}>
                                    <a className={styles.projects_item_btn} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        <span className="material-symbols-outlined">open_in_new</span>
                                        {t(className, `${classComponent}_btn_github_repo`)}
                                    </a>
                                </div>
                                <div className={styles.projects_item_btn_box}>
                                    <a className={styles.projects_item_btn} href={`https://john-o-dev.github.io/${repo.name}/`} target="_blank" rel="noopener noreferrer">
                                        <span className="material-symbols-outlined">open_in_new</span>
                                        {t(className, `${classComponent}_btn_github_page`)}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}