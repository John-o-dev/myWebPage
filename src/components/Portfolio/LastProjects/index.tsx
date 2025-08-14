import useTranslation from '@/src/hooks/useTranslation';
import styles from './lastProjects.module.css'

import { ReposProps } from '@/src/types/repos';
import { formatDate } from '@/src/utils/format';

type Props = {
  repos: ReposProps[];
}

export default function LastProjects({ repos }: Props) {
  const className = "portfolio";
  const classComponent = "lastProjects";
  const { t } = useTranslation();
  const repoRegex = /-/g;
  const formatRepoName = (name: string) => {
      return name.replace(repoRegex, ' ');
  }
  const formatRepoImg = (urlImg: string) => {
      return `https://raw.githubusercontent.com/${urlImg}/refs/heads/master/thumbnail.jpg`
  }
  return (
    <div className={styles.last_projects}>
      <h2>{t(className, `${classComponent}_title`)}</h2>
      <ul className={styles.horizontal_list}>
        {repos.map(repo => (
          <li key={repo.name} className={styles.project_item}>
            <div className={styles.project_name_img}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h3 className={styles.projects_item_title}>{formatRepoName(repo.name)}</h3>
                <figure className={styles.project_img}>
                  <div className={styles.project_item_icon_box}>
                    <span className="material-symbols-outlined">mystery</span>
                  </div>
                  <img src={formatRepoImg(repo.full_name)} alt={repo.full_name} loading="lazy" />
                </figure>
              </a>
            </div>
            <span className={styles.updateAt}>{t(className, `${classComponent}_updated`)}: <br />{formatDate(repo.updated_at)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}   