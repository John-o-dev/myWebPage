import styles from './buttonBox.module.css'

type ButtonBoxProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    classNameComponent?: string;
    children: React.ReactNode;
}

export default function ButtonBox({
    href,
    classNameComponent,
    children,
    ...props
}: ButtonBoxProps) {
    const newClass = `${styles.btn_box} ${classNameComponent ?? ''}`;
    const className = newClass.trim();
    return (
        <button
            type="submit"
            value="Send"
            className={className}>
            <a
                href={href}
                {...props}
                className={styles.btn}>
                {children}
            </a>
        </button>
    )
}
