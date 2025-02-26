import styles from './buttonBox.module.css'

interface ButtonBoxProps {
    children: React.ReactNode;
    href?: string;
}

export default function ButtonBox({ href = "#", children }: ButtonBoxProps) {
    return (
        <div className={styles.btn_box}>
            <a href={href} >
                {children}
            </a>
        </div>
    )
}
