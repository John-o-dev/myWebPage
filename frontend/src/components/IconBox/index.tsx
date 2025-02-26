import styles from './iconbox.module.css'

interface IconBoxProps {
    children: React.ReactNode;
    IconName: string;
}

export default function IconBox({ children, IconName = "" }: IconBoxProps) {
    return (
        <div className={styles.iconBox}>
            {/* <ion-icon name={IconName}></ion-icon> */}
            {children}
        </div>
    )
}