import styles from './filters.module.css'

export default function Filters() {
    return (
        <div className={styles.filter_select_box}>

            <button className={styles.filter_select} data-select>
                <div data-select-value>Selecione...</div>

                <div>
                    {/* <ion-icon name="chevron-down"></ion-icon> */}
                </div>
            </button>

            <ul>
                <li className={styles.select_item}>
                    <button data-select-item>Tudo</button>
                </li>

                <li className={styles.select_item}>
                    <button data-select-item>Frontend</button>
                </li>

                <li className={styles.select_item}>
                    <button data-select-item>Backend</button>
                </li>

                <li className={styles.select_item}>
                    <button data-select-item>React/Next</button>
                </li>

                <li className={styles.select_item}>
                    <button data-select-item>Angular</button>
                </li>

                <li className={styles.select_item}>
                    <button data-select-item>Web design</button>
                </li>

                <li className={styles.select_item}>
                    <button data-select-item>CSS</button>
                </li>

                <li className={styles.select_item}>
                    <button data-select-item>Python</button>
                </li>
            </ul>
        </div>
    )
}