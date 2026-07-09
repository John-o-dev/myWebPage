import React, { useEffect } from 'react'
import { Certificate, skillType } from "@/src/types/certificates";
import DetailsCertificate from '../DetailsCertificate'
import styles from './modalFullScreen.module.css'
import { getTechIcon } from '../GetTechIcon';

import { LuGithub, LuGlobe, LuX } from "react-icons/lu";
import useTranslation from '@/src/hooks/useTranslation';
import SkillList from '../../SkillList';

type ModalFullScreenProps = {
  onClose: () => void;
  certificate: Certificate;
};

export default function ModalFullScreen({
  onClose,
  certificate
}: ModalFullScreenProps) {
  const { t } = useTranslation();
  const className = "degreesGallery";
  const classComponent = "modal_fullscreen";

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.container}>
        <div onClick={onClose} className={styles.closeBtn}>
          <LuX className={styles.iconBtn} />
        </div>
        <div className={styles.panel}>

          <div className={styles.panelHeader}>
            <div className={styles.panelHeaderTitle}>
              <h3 className={styles.title}>{certificate.title}</h3>
              <p className={styles.institution}>{certificate.educationalInstitution}</p>
            </div>
            <DetailsCertificate
              certificate={certificate}
            />
          </div>

          <div>
            <h4 className={styles.sectionTitle}>{t(className, `sections_title_description`)}</h4>
            <p className={styles.text}>{certificate.description}</p>
          </div>

          {certificate.goals && (
            <div>
              <h4 className={styles.sectionTitle}>{t(className, `sections_title_goals`)}</h4>
              <p className={styles.text}>{certificate.goals}</p>
            </div>
          )}

          {certificate.activitiesDeveloped && (
            <div>
              <h4 className={styles.sectionTitle}>{t(className, `${classComponent}_activities`)}</h4>
              <ul className={styles.list}>
                {certificate.activitiesDeveloped ? (
                  certificate.activitiesDeveloped.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })
                ) : ''}
              </ul>
            </div>
          )}

          {certificate.projectUrl && (
            <section className={styles.containerMoreInfo}>
              <div className={styles.containerMoreInfoHeader}>
                <LuGlobe className={styles.moreInfoIcons} />
                <h4 className={styles.sectionTitle}>{t(className, `sections_title_project`)}</h4>
              </div>

              <a
                href={certificate.projectUrl}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.moreInfoLink}>
                {certificate.projectUrl}
              </a>
            </section>
          )}

          {certificate.repoUrl && (
            <section className={styles.containerMoreInfo}>
              <div className={styles.containerMoreInfoHeader}>
                <LuGithub className={styles.moreInfoIcons} />
                <h4 className={styles.sectionTitle}>{t(className, `sections_title_github`)}</h4>
              </div>
              <a
                href={certificate.repoUrl}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.moreInfoLink}>
                {certificate.repoUrl}
              </a>
            </section>
          )}

          {certificate.skills && (            
            <div className={styles.textWhite}>
              <SkillList skills={certificate.skills}/>
            </div>
          )}

          {certificate.contentLearned.length > 0 && (
            <section>
              <h4 className={styles.sectionTitle}>{t(className, `${classComponent}_content_learned`)}</h4>
              <ul className={styles.list}>
                {certificate.contentLearned ? (
                  certificate.contentLearned.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })
                ) : ''}
              </ul>
            </section>
          )}

        </div>
      </div>
    </div>
  )
}
