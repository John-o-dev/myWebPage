import { skillType } from '@/src/types/certificates';
import styles from './skillList.module.css'
import useTranslation from '@/src/hooks/useTranslation';
import { getTechIcon } from '../DetailCard/GetTechIcon';
import Link from "next/link";
import { useRouter } from "next/router";

export default function SkillList({ skills }: { skills: skillType }) {
  const { t } = useTranslation();
  const className = "degreesGallery";
  const classComponent = "skill_list";
  const router = useRouter();
  const { lang } = router.query;
  const hasSkillSections =
    skills.listSkill?.length > 0 ||
    skills.technical?.length > 0 ||
    skills.technologies?.length > 0 ||
    skills.behavioral?.length > 0;

  return (
    <>
      {hasSkillSections ? (
        <section className={styles.containerSkills}>
          <h3 className={styles.title}>{t(className, `${classComponent}_skills`)}</h3>

          {
            skills.listSkill?.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.subtitle}>{t(className, `${classComponent}_listSkill`)}</h3>
                <ul className={styles.skillsList}>
                  {skills.listSkill?.map((item, index) => (
                    <li key={index} className={styles.item}>{item}</li>
                  )) ?? []}
                </ul>
              </div>
            )
          }

          {
            skills.technical?.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.subtitle}>{t(className, `${classComponent}_technical`)}</h3>
                <ul className={styles.skillsList}>
                  {skills.technical?.map((item, index) => (
                    <li key={index} className={styles.item}>
                      <Link
                        href={{
                          pathname: "/[lang]/portfolio",
                          query: {
                            lang,
                            topic: item,
                          },
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }

          {
            skills.technologies?.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.subtitle}>{t(className, `${classComponent}_technologies`)}</h3>
                <ul className={styles.technologiesList}>
                  {skills.technologies?.map((item) => {
                    const { Icon, found } = getTechIcon(item);
                    return (
                      <Icon
                        key={item}
                        size={32}
                        color={found ? undefined : "#000000"}
                      />
                    );
                  }) ?? []}
                </ul>
              </div>
            )
          }

          {
            skills.behavioral?.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.subtitle}>{t(className, `${classComponent}_behavioral`)}</h3>
                <ul className={styles.behavioralList}>
                  {skills.behavioral?.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) ?? []}
                </ul>
              </div>
            )
          }
        </section>
      ) : (
        <div className={styles.containerSkills}>
          <span className={styles.subtitle}>
            {t(className, `${classComponent}_no_skills`)}
          </span>
        </div>
      )}
    </>
  )
}