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
  return (
    <div className={styles.last_projects}>
      <h2>{t(className, `${classComponent}_title`)}</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.name} className={styles.project_name_img}>
            <div>
              <a href="#">
                <h3 className={styles.projects_item_title}>{repo.description}</h3>
                <figure className={styles.project_img}>
                  <div className={styles.project_item_icon_box}>
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                  </div>
                  <img src="https://raw.githubusercontent.com/John-o-dev/webpage-Multi-Language/refs/heads/master/thumbnail.jpeg" alt="thumbnail rep" loading="lazy" />
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