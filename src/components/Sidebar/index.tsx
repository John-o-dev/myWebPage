import useTranslation from '@/src/hooks/useTranslation';
import styles from './sidebar.module.css';
import SidebarInfoMore from './SidebarInfoMore';

export default function Sidebar() {
    const className = "sidebar";
    const { t } = useTranslation();
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar_info}>
                <div className={styles.sidebar_container}>
                    <figure className={styles.avatar_box}>
                        <img src="/img/Photo.jpg" alt="Imegem de John O'Dev" />
                    </figure>
            
                    <div className={styles.info_content}>
                        <h1 className={styles.name}>Antonio Rodrigues<br/>Lima Filho</h1>
                        <p>{t(className, 'occupation')}</p>
                        <p className={styles.title}>{t(className, 'youtube_presentation')} <span>John'Odev</span></p>
                    </div>
                </div>
                
                <button className={styles.info_more_btn}>
                <span>{t(className, 'contacts')}</span>
                    <span className="material-symbols-outlined">arrow_downward</span>
                </button>
            </div>

            <div className={styles.separator}></div>

            <SidebarInfoMore />
        </aside>
    )
}