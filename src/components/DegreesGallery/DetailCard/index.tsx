import { useState } from "react";
import styles from "./detailCard.module.css";
import { Certificate, skillType } from "@/src/types/certificates";
import DetailsCertificate from "./DetailsCertificate";
import MoreInfos from "./MoreInfos";
import ModalFullScreen from "./ModalFullScreen"

import { LuGithub, LuGlobe, LuMessageSquareDiff } from "react-icons/lu";
import useTranslation from "@/src/hooks/useTranslation";

export default function DetailCard({ certificate }: { certificate: Certificate }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const className = "degreesGallery";
  const classComponent = "detail_card";

  return (
    <article className={styles.detailCard}>
      <header className={styles.detailHeader}>
        <h1 className={styles.detailTitle}>
          {certificate.title}
        </h1>
      </header>
      <div className={styles.detailInstitution}>
        <p className={styles.detailInstitutionName}>
          {certificate.educationalInstitution}
        </p>
      </div>

      <div className={styles.box}>
        <DetailsCertificate
          onClick={() => setIsOpen(true)}
          certificate={certificate}
        />
        <div className={styles.overlay}>
          <span>{t(className, `${classComponent}_overlay`)}</span>
        </div>
      </div>

      <section className={styles.containerTexts}>
        <div className={styles.titleTexts}>
          <h3>
            {t(className, `sections_title_description`)}
          </h3>
        </div>
        <div className={styles.contentTexts}>
          <p>
            {certificate.description}
          </p>
          <div
            onClick={() => {
              setIsOpen(true);
            }}>
            <LuMessageSquareDiff className={styles.ellipsisTextIcons} />
          </div>
        </div>
      </section>
      <section className={styles.containerTexts}>
        <div className={styles.titleTexts}>
          <h3>
            {t(className, `sections_title_goals`)}
          </h3>
        </div>
        <div className={styles.contentTexts}>
          <p>
            {certificate.goals}
          </p>
          <div
            onClick={() => {
              setIsOpen(true);
            }}>
            <LuMessageSquareDiff className={styles.ellipsisTextIcons} />
          </div>
        </div>
      </section>

      {isOpen && (
        <ModalFullScreen
          onClose={() => setIsOpen(false)}
          certificate={certificate}
        />
      )}

      <section className={styles.containerMoreInfo}>
        <div className={styles.containerMoreInfoHeader}>
          <LuGlobe className={styles.moreInfoIcons} />
          <h3>
            {t(className, `sections_title_project`)}
          </h3>
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
          <h3>
            {t(className, `sections_title_github`)}
          </h3>
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

      <MoreInfos certificate={certificate} />
    </article>
  );
};
