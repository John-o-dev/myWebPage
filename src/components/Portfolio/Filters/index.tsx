import { useState } from 'react';
import styles from './filters.module.css'

export default function Filters() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    return (
        <div className={styles.filter_select_box}>

            <button className={styles.filter_select} onClick={toggleMenu}>
                <div data-select-value>Selecione...</div>
                <div>
                    <span className="material-symbols-outlined">mystery</span>
                </div>
            </button>

            <ul className={`${styles.select_list} ${ menuOpen ? styles.active : "" }`}>
                <li className={styles.select_item}>
                    <button type='button'>Tudo</button>
                </li>

                <li className={styles.select_item}>
                    <button type='button'>Frontend</button>
                </li>

                <li className={styles.select_item}>
                    <button type='button'>Backend</button>
                </li>

                <li className={styles.select_item}>
                    <button type='button'>React/Next</button>
                </li>

                <li className={styles.select_item}>
                    <button type='button'>Angular</button>
                </li>

                <li className={styles.select_item}>
                    <button type='button'>Web design</button>
                </li>

                <li className={styles.select_item}>
                    <button type='button'>CSS</button>
                </li>

                <li className={styles.select_item}>
                    <button type='button'>Python</button>
                </li>
            </ul>
        </div>
    )
}