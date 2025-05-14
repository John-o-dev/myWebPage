import styles from './githubPerfil.module.css';

import { UserProps } from '@/src/types/user';

export default function GithubPerfil({
    avatar_url,
    login,
    location,
    html_url,
    followers,
    following,
    public_repos
}: UserProps) {

    return (
        <div className={styles.github_perfil}>
            <span>Perfil Github</span>
            <div className={styles.github_user}>
                <img src={avatar_url} alt={login} />
                <div>
                    <h1>
                        <a className={styles.github_username} href="#">
                            Johnny Developer
                        </a>
                    </h1>

                    <ul className={styles.repos_info}>
                        {location && (
                            <li>Location: {location}</li>
                        )}
                        <li>Repositórios: {public_repos}</li>
                        <li>Seguidores: {followers}</li>
                        <li>Seguindo: {following}</li>
                        <li>html_url: {html_url}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}