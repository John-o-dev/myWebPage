import styles from './home.module.css'
import useTranslation from '@/src/hooks/useTranslation';

export default function HomePage() {
	const className = "homePage";
	const { t } = useTranslation();
	return (
		<article className={styles.homePage}>

			<section className={styles.home_container}>

				<div className={styles.home_content}>

					<h1 className="article-title">{t(className, 'fullName')}</h1>

					<h2>{t(className, 'carrer')}</h2>

					<p>{t(className, 'description')}</p>

					<div className={styles.center_name}>
						<h3>&lt;j&gt; John O'Dev &lt;/j&gt; </h3>
						<div className={styles.change_text}>
							<h4>
								<span className={styles.word}>Web&nbsp;Designer</span>
								<span className={styles.word}>Web&nbsp;Developer</span>
								<span className={styles.word}>Motion&nbsp;Designer</span>
								<span className={styles.word}>Youtuber</span>
							</h4>
						</div>
					</div>
				</div>

				<div className={styles.home_image}>
					<figure className={styles.img_box}>
						<img src="img/img-home-bg.jpg" alt="home" />
					</figure>
				</div>

			</section>

		</article>
	)
}