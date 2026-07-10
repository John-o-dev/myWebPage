import useTranslation from '@/src/hooks/useTranslation';
import styles from './githubPerfil.module.css';

import { UserProps } from '@/src/types/user';

export default function GithubPerfil({
    html_url,
    avatar_url,
    login,
    name,
    location,
    followers,
    following,
    public_repos
}: UserProps) {
    const className = "portfolio";
    const classComponent = "githubPerfil";
    const { t } = useTranslation();
    return (
        <div className={styles.github_perfil}>
            
            <div className={styles.github_user}>
                <img className={styles.github_user_img} src={avatar_url} alt={login} />
                <div className={styles.github_user_container}>
                    <h1>
                        <a className={styles.github_username} href={html_url} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                    </h1>

                    <ul className={styles.repos_info}>
                        {location && (
                            <li>{t(className, `${classComponent}_location`)}: {location}</li>
                        )}
                        <li>{t(className, `${classComponent}_repositories`)}: {public_repos}</li>
                        <li>{t(className, `${classComponent}_followers`)}: {followers}</li>
                        <li>{t(className, `${classComponent}_following`)}: {following}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}