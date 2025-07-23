import styles from './buttonBox.module.css'

type ButtonBoxProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    href?: string;
}

export default function ButtonBox({ 
    href, 
    className,
    children,
    ...props 
}: ButtonBoxProps) {
    return (
        <button 
        type="submit" 
        value="Send"
        className={`${styles.btn_box} ${className}`}>
            <a 
            href={href} 
            {...props} 
            className={styles.btn}>
                {children}
            </a>
        </button>
    )
}
