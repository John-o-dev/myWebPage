import useTranslation from '@/src/hooks/useTranslation';
import ButtonBox from '../../ButtonBox'
import styles from './aboutMe.module.css'

export default function About() {
  const className = "resume";
  const classComponent = "about_me";
  const { t } = useTranslation();
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>{t(className, `${classComponent}_title`)}</h1>
      <p className={styles.description}>{'<>Hello Dev\'s</>'}</p>
      <p className={styles.description}>
        {/* {t(className, 'description_1')} */}
        {t(className, `${classComponent}_description_1`)}
      </p>

      <p className={styles.description}>
        {t(className, `${classComponent}_description_2`)}
      </p>

      <p className={styles.description}>
        {t(className, `${classComponent}_description_3`)}
      </p>

      <p className={styles.description}>
        {t(className, `${classComponent}_description_4`)}
      </p>

      <p className={styles.description}>
        {t(className, `${classComponent}_description_5`)}
      </p>

      <p className={styles.description}>
        {t(className, `${classComponent}_description_6`)}
      </p>

      <div className={styles.btn_box}>
        <ButtonBox className={styles.btn_actions} href="/pdf/Currículo_Profissional_Antonio.pdf" target="_blank" rel="noopener noreferrer">
          {t(className, `${classComponent}_btn_look_cv`)}
        </ButtonBox>

        <ButtonBox className={styles.btn_actions} href="/pdf/Currículo_Profissional_Antonio.pdf" download>
          {t(className, `${classComponent}_btn_download_cv`)}
        </ButtonBox>
      </div>
    </section>
  )
}