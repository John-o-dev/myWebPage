import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className={styles.navbar_list} >

            <li>
                <button className={styles.navbar_link} data-nav-link>Página Inicial</button>
            </li>

            <li>
                <button className={styles.navbar_link}  data-nav-link>Sobre</button>
            </li>

            <li>
                <button className={styles.navbar_link}  data-nav-link>Resumo</button>
            </li>

            <li>
                <button className={styles.navbar_link}  data-nav-link>Portfólio</button>
            </li>

            <li>
                <button className={styles.navbar_link}  data-nav-link>Blog</button>
            </li>

            </ul>
        </nav>
    )
}
