import styles from './bgConstellation.module.css'

export default function BgConstellation() {
  return (
    <>
      <div className={styles.glow_a}></div>
      <div className={styles.glow_b}></div>
      <div className={styles.deco}>
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <g stroke="rgba(255,255,255,.25)" strokeWidth="1">
            <line x1="40" y1="60" x2="160" y2="120" />
            <line x1="160" y1="120" x2="120" y2="230" />
            <line x1="160" y1="120" x2="280" y2="90" />
            <line x1="280" y1="90" x2="360" y2="180" />
            <line x1="120" y1="230" x2="240" y2="260" />
          </g>
          <g fill="#ff5b3c">
            <circle cx="40" cy="60" r="3" /><circle cx="160" cy="120" r="3" />
            <circle cx="280" cy="90" r="3" /><circle cx="360" cy="180" r="3" />
          </g>
          <g fill="#7c5cff">
            <circle cx="120" cy="230" r="3" /><circle cx="240" cy="260" r="3" />
          </g>
        </svg>
      </div>
    </>
  )
}