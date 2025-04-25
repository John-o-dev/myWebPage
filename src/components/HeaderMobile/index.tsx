
// FAZER UM COMPONENTE SÓ

import styles from './headerMobile.module.css';

export default function headerMobile() {
    return (
        <header className={styles.header_mobile}>
            <div className={styles.logo}><span>J</span>ohn <span>O</span>'<span>D</span>ev</div>
            <ul className={styles.nav_list_mobile}>
                <li><a href="#">Página Inicial</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Competências</a></li>
                <li><a href="#">Portfólio</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <div id="menu-icon" className={styles.bx}></div>
        </header>
    )
}