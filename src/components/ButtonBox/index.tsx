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
        <div className={styles.btn_box}>
            <a 
            href={href} 
            {...props} 
            className={`${styles.btn} ${className}`}>
                {children}
            </a>
        </div>
    )
}
