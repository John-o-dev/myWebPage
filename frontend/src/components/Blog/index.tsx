import styles from './blog.module.css'

export default function Blog() {
    return (
        <article className={styles.blog} data-page="blog">

            <header>
                <h2 className="article_title">Blog</h2>
            </header>

            <div className={styles.blog_bg}>
                <p>
                    Em Breve...
                    Postagens sobre web design, programação e tecnologia.
                </p>
                <div className={styles.gif_container}>
                    <img src="img/dino.gif" alt="GIF animado" />
                </div>
            </div>

        </article>
    )
}