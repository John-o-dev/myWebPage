import styles from './repos.module.css'

export default function Repos() {
    return (
        <div className={styles.repos}>
            <h2 className={styles.subtitle}>Repositórios: </h2>
            <ul className={styles.project_list}>

                <li className={styles.project_item} data-filter-item data-category="web development">
                    <div>
                        <div className={styles.project_name_img}>
                            <a href="#">
                                <h3 className={styles.projects_item_title}>Uma simples Webpage multi-idiomas feito utilizando apenas HTML CSS e jQuery</h3>
                                <figure className={styles.project_img}>
                                    <div className={styles.project_item_icon_box}>
                                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                                    </div>
                                    <img src="img/project-1.jpg" alt="thumbnail rep" loading="lazy" />
                                </figure>
                            </a>
                        </div>

                        <div className={styles.projects_item_infos}>
                            <div className={styles.date_container}>
                                <span className={styles.createAt}>Criado em:<br /> 02/09/2021</span>
                                <span className={styles.updateAt}>Última atualização:<br /> 07/08/2024</span>
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
                                <a className={styles.projects_item_btn} href="#">
                                    {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                                    Ver repositório no Github
                                </a>
                            </div>
                            <div className={styles.projects_item_btn_box}>
                                <a className={styles.projects_item_btn} href="#">
                                    {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                                    Ver no Github page
                                </a>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}