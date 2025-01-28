import styles from './headerMobile.module.css';

export default function headerMobile() {
    return (
        <header className={styles.header_mobile}>
            <div><span>J</span>ohn <span>O</span>'<span>D</span>ev</div>
                <ul className={styles.nav_list_mobile}>
                    <li><a href="#" data-nav-link>Página Inicial</a></li>
                    <li><a href="#" data-nav-link>Sobre</a></li>
                    <li><a href="#" data-nav-link>Resumo</a></li>
                    <li><a href="#" data-nav-link>Portfólio</a></li>
                    <li><a href="#" data-nav-link>Blog</a></li>
                </ul>
            <div id="menu-icon" className={styles.bx}></div>
        </header>
    )
}