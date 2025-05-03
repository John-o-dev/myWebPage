import styles from './githubPerfil.module.css';

export default function GithubPerfil() {
    return (
        <div className={styles.github_perfil}>
            <span>Perfil Github</span>
            <div className={styles.github_user}>
                <img src="/img/github-perfil.jpeg" alt='GitHub Image Perfil' />
                <div>
                    <h1>
                        <a className={styles.github_username} href="#">
                        Johnny Developer
                        </a>
                    </h1>

                    <ul className={styles.repos_info}>
                        <li>Repositórios: 5</li>
                        <li>Seguidores: 7</li>
                        <li>Seguindo: 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}