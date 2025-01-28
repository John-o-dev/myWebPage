import styles from './sidebar.module.css';
import SidebarInfoMore from './SidebarInfoMore';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar} data-sidebar>
            <div className={styles.sidebar_info}>
                <div className={styles.sidebar_container}>
                    <figure className={styles.avatar_box}>
                        <img src="img/my-avatar.png" alt="Avatar de John O'Dev" />
                    </figure>
            
                    <div className={styles.info_content}>
                        <h1 className={styles.name}>Antonio Rodrigues<br/>Lima Filho</h1>
                        <p>Desenvolvedor Web</p>
                        <p className={styles.title}>Criador de Conteúdo como <span>John'Odev</span></p>
                    </div>
                </div>
                
                <button className={styles.info_more_btn} data-sidebar-btn>
                <span>Contatos</span>
                {/* <ion-icon name="chevron-down"></ion-icon> */}
                </button>
            </div>

            <div className="separator"></div>

            <SidebarInfoMore />
        </aside>
    )
}