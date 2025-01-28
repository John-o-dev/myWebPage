import styles from './sidebarInfoMore.module.css'

export default function SidebarInfoMore() {
    return (
        <div className={styles.sidebar_info_more}>
            <ul className={styles.contacts_list}>
                <li className={styles.contact_item}>
                    <a href="#" className={styles.contact_link}>
                    <div className={styles.item_container}>
                        <div className={styles.sidebar_icon_box}>
                        {/* <ion-icon name="mail-outline"></ion-icon> */}
                        </div>
                        <p className={styles.contact_title}>Email</p>
                    </div>
                    john_o_dev@gmail.com
                    </a>
                </li>

                <li className={styles.contact_item}>
                    <a href="#" className={styles.contact_link}>
                    <div className={styles.item_container}>
                        <div className={styles.sidebar_icon_box}>
                        {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
                        </div>
                        <p className={styles.contact_title}>Telefone</p>
                    </div>
                    +55 (11) 91062-2590
                    </a>
                </li>

                <li className={styles.contact_item}>
                    <a href="#" className={styles.contact_link}>
                    <div className={styles.item_container}>
                        <div className={styles.sidebar_icon_box}>
                        {/* <ion-icon name="location-outline"></ion-icon> */}
                        </div>
                        <p className={styles.contact_title}>Localidade</p>
                    </div>
                    <address>SP - São Paulo, BR</address>
                    </a>
                </li>
            </ul>

            <ul className={styles.social_list}>
                <li className={styles.social_item}>
                    <a href="https://www.facebook.com/people/John-ODev/100071663284338/" className={styles.social_link}>
                    {/* <ion-icon className = "socials-icons " name="logo-facebook"></ion-icon> */}
                    <div className={styles.tooltip}>Facebook</div>
                    </a>
                </li>

                <li className="social_item">
                    <a href="https://twitter.com/JohnODev4" className={styles.social_link}>
                    {/* <ion-icon className = "socials-icons" name="logo-twitter"></ion-icon> */}
                    <div className={styles.tooltip}>Twitter</div>
                    </a>
                </li>

                <li className="social_item">
                    <a href="https://www.instagram.com/john_o_dev/" className={styles.social_link}>
                    {/* <ion-icon className = "socials-icons" name="logo-instagram"></ion-icon> */}
                    <div className={styles.tooltip}>Instagram</div>
                    </a>
                </li>

                <li className="social_item">
                    <a href="github.com/John-o-dev" className={styles.social_link}>
                    {/* <ion-icon className = "socials-icons" name="logo-github"></ion-icon> */}
                    <div className={styles.tooltip}>Github</div>
                    </a>
                </li>
            </ul>
        </div>
    )
}