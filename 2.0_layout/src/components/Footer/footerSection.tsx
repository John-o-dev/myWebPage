import styles from './footerSection.module.css'

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
        <span>© Antonio Rodrigues · JohnOdev</span>
        <span>Feito com React + carinho</span>
      </footer>
  )
}