import styles from './tooltip.module.css'

export default function Tooltip({ children }) {
    return (
        <div className={styles.tooltip}>{children}</div>
    )
}