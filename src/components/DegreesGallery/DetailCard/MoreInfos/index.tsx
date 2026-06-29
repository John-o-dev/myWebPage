import React, { useState } from 'react';
import styles from './moreInfos.module.css';
import { LuArrowUp, LuArrowDown } from "react-icons/lu";
import { Certificate } from "@/src/types/certificates";
import { getTechIcon } from '../GetTechIcon';
import useTranslation from '@/src/hooks/useTranslation';

export default function MoreInfos({ certificate }: { certificate: Certificate }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const className = "degreesGallery";
  const classComponent = "more_info";

  return (
    <div className={styles.moreInfosContainer}>
      <div
        className={`${styles.moreInfoTitle} ${expanded ? styles.moreInfoTitleExpanded : ""}`}
        onClick={() => setExpanded(!expanded)}>
        <span className={styles.textWrapper}>{t(className, `${classComponent}_title`)}</span>
        {expanded ? <LuArrowDown className={styles.colorGray} /> : <LuArrowUp className={styles.colorGray} />}
      </div>

      {expanded && (
        <div className={styles.containerSkills}>
          <h3 className={styles.title}>{t(className, `${classComponent}_skills`)}</h3>

          {!Array.isArray(certificate.skills) && certificate.skills.technical.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.subtitle}>{t(className, `${classComponent}_technical`)}</h3>
              <ul className={styles.skillsList}>
                {certificate.skills.technical.map((item, index) => (
                  <li key={index} className={styles.item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {!Array.isArray(certificate.skills) && certificate.skills.technical.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.subtitle}>{t(className, `${classComponent}_technologies`)}</h3>
              <ul className={styles.technologiesList}>
                {certificate.skills.technologies.map((item) => {
                  const Icon = getTechIcon(item);
                  return <Icon key={item} size={32} />;
                })}
              </ul>
            </div>
          )}

          {!Array.isArray(certificate.skills) && certificate.skills.behavioral.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.subtitle}>{t(className, `${classComponent}_behavioral`)}</h3>
              <ul className={styles.behavioralList}>
                {certificate.skills.behavioral.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
