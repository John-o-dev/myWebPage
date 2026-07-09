import React, { useState } from 'react';
import styles from './moreInfos.module.css';
import { LuArrowUp, LuArrowDown } from "react-icons/lu";
import { Certificate } from "@/src/types/certificates";
import useTranslation from '@/src/hooks/useTranslation';
import SkillList from '../../SkillList';

import certificates from '@/src/lib/certificates';
import { getTechIcon } from '../GetTechIcon';

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
          <SkillList skills={certificate.skills}/>
        </div>
      )}

    </div>
  );
}
