import React from 'react'
import { Certificate, skillType } from "@/src/types/certificates";
import ImageCard from '../DetailsCertificate'
import styles from './modalFullScreen.module.css'
import { getTechIcon } from '../GetTechIcon';

import { LuGithub, LuGlobe, LuX } from "react-icons/lu";
import useTranslation from '@/src/hooks/useTranslation';

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
            <ImageCard
              onClick={null}
              certificate={certificate}
            />
          </div>

          <div>
            <h4 className={styles.sectionTitle}>{t(className, `sections_title_description`)}</h4>
            <p className={styles.text}>{certificate.description}</p>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>{t(className, `sections_title_goals`)}</h4>
            <p className={styles.text}>{certificate.goals}</p>
          </div>

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


          <section className={styles.containerMoreInfo}>
            <div className={styles.containerMoreInfoHeader}>
              <LuGlobe className={styles.moreInfoIcons} />
              <h2 className={styles.sectionTitle}>{t(className, `sections_title_project`)}</h2>
            </div>

            <a
              href={certificate.projectUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={styles.moreInfoLink}
            >
              {certificate.projectUrl}
            </a>
          </section>

          <section className={styles.containerMoreInfo}>
            <div className={styles.containerMoreInfoHeader}>
              <LuGithub className={styles.moreInfoIcons} />
              <h2 className={styles.sectionTitle}>{t(className, `sections_title_github`)}</h2>
            </div>
            <a
              href={certificate.repoUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={styles.moreInfoLink}
            >
              {certificate.repoUrl}
            </a>
          </section>
{/* COMPONENTIZAR */}
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Habilidades</h4>

            {!Array.isArray(certificate.skills) && certificate.skills.technical.length > 0 && (
              <div className={styles.PaddingTop}>
                <h3 className={styles.sectionSubtitle}>Técnicas:</h3>
                <ul className={styles.skillsList}>
                  {certificate.skills.technical.map((item, index) => (
                    <li key={index} className={styles.item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}


            {!Array.isArray(certificate.skills) && certificate.skills.technical.length > 0 && (
              <div className={styles.PaddingTop}>
                <h3 className={styles.sectionSubtitle}>Tecnologias:</h3>
                <ul className={styles.technologiesList}>
                  {certificate.skills.technologies.map((item) => {
                    const Icon = getTechIcon(item);
                    return <Icon key={item} size={32} />;
                  })}
                </ul>
              </div>
            )}

            {!Array.isArray(certificate.skills) && certificate.skills.behavioral.length > 0 && (
              <div className={styles.PaddingTop}>
                <h3 className={styles.sectionSubtitle}>Comportamentais:</h3>
                <ul className={styles.behavioralList}>
                  {certificate.skills.behavioral.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

          </section>

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

        </div>
      </div>
    </div>
  )
}
