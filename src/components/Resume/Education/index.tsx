import useTranslation from '@/src/hooks/useTranslation';
import styles from './education.module.css'

export default function Education() {
    const className = "resume";
    const classComponent = "education";
    const { t } = useTranslation();
    return (
        <section className={styles.timeline}>

            <div className={styles.title_wrapper}>
                <span className="material-symbols-outlined">school</span>
                <h3>{t(className, `${classComponent}_title`)}</h3>
            </div>

            <ol className={styles.timeline_list}>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>{t(className, `${classComponent}_faculty`)}</h4>
                    <span>{t(className, `${classComponent}_current_period`)}</span>
                    <span>{t(className, `${classComponent}_graduation_forecast`)}</span>
                    <p className={styles.timeline_text}>
                        {t(className, `${classComponent}_university`)}
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>{t(className, `${classComponent}_technology`)}</h4>
                    <span>{t(className, `${classComponent}_technology_description`)}</span>
                    <p className={styles.timeline_text}>
                        {t(className, `${classComponent}_technology_institution`)}
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>{t(className, `${classComponent}_technology_2`)}</h4>
                    <span>{t(className, `${classComponent}_technology_2_description`)}</span>
                    <p className={styles.timeline_text}>
                        {t(className, `${classComponent}_technology_2_institution`)}
                    </p>
                </li>

                <li className={styles.timeline_item}>
                    <h4 className={styles.timeline_item_title}>{t(className, `${classComponent}_technology_3`)}</h4>
                    <span>{t(className, `${classComponent}_technology_3_description`)}</span>
                    <p className={styles.timeline_text}>
                        {t(className, `${classComponent}_technology_3_institution`)}
                    </p>
                </li>

            </ol>

        </section>
    )
}