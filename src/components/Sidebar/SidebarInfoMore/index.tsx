import styles from './sidebarInfoMore.module.css'

export default function SidebarInfoMore() {
    return (
        <div className={styles.sidebar_info_more}>
            <ul className={styles.contacts_list}>
                <li className={styles.contact_item}>
                    <a href="#" className={styles.contact_link}>
                        <div className={styles.sidebar_icon_box}>
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                            <p className={styles.contact_title}>Email</p>
                            <span>john_o_dev@gmail.com</span>
                        </div>
                    </a>
                </li>

                <li className={styles.contact_item}>
                    <a href="#" className={styles.contact_link}>
                        <div className={styles.sidebar_icon_box}>
                        <span className="material-symbols-outlined">contact_phone</span>
                        </div>
                        <div>
                            <p className={styles.contact_title}>Telefone</p>
                            <span>+55 (11) 91062-2590</span>
                        </div>
                    </a>
                </li>

                <li className={styles.contact_item}>
                    <a href="#" className={styles.contact_link}>
                        <div className={styles.sidebar_icon_box}>
                        <span className="material-symbols-outlined">person_pin_circle</span>
                        </div>
                        <div>
                            <p className={styles.contact_title}>Localidade</p>
                            <span><address>SP - São Paulo, BR</address></span>
                        </div>
                    </a>
                </li>
            </ul>

            <ul className={styles.social_list}>
                <li className={styles.social_item}>
                    <a href="https://www.facebook.com/people/John-ODev/100071663284338/" className={styles.social_link}>
                        <img src="/img/facebook-icon.png" className='social-icons' alt="facebook icon"/>
                        <div className={styles.tooltip}>Facebook</div>
                    </a>
                </li>

                <li className={styles.social_item}>
                    <a href="https://twitter.com/JohnODev4" className={styles.social_link}>
                        <img src="/img/twitter-icon.png" className='social-icons' alt="twitter icon"/>
                        <div className={styles.tooltip}>Twitter</div>
                    </a>
                </li>

                <li className={styles.social_item}>
                    <a href="https://www.instagram.com/john_o_dev/" className={styles.social_link}>
                        <img src="/img/instagram-icon.png" className='social-icons' alt="instagram icon"/>
                        <div className={styles.tooltip}>Instagram</div>
                    </a>
                </li>

                <li className={styles.social_item}>
                    <a href="github.com/John-o-dev" className={styles.social_link}>
                        <img src="/img/github-icon.png" className='social-icons' alt="github icon"/>
                        <div className={styles.tooltip}>Github</div>
                    </a>
                </li>
            </ul>
        </div>
    )
}