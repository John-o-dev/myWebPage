import useTranslation from '@/src/hooks/useTranslation';
import styles from './blog.module.css'

export default function Blog() {
    const className = "blog";
    const { t } = useTranslation();
    return (
        <article className={styles.blog}>

            <header>
                <h2 className="article_title">Blog</h2>
            </header>

            <div className={styles.blog_bg}>
                <p>
                    {t(className, 'soon')}
                </p>
                <div className={styles.gif_container}>
                    <img src="/img/dino.gif" alt="GIF animado" />
                </div>
            </div>

        </article>
    )
}