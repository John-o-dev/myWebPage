import Head from 'next/head';

import Sidebar from '../Sidebar'
import Header from '../Header';
import styles from './layout.module.css'

type Props = {
	children: React.ReactNode;
	desc?: string;
	title: string;
	thumb?: string;
};

export default function Layout({
	children,
	title,
	desc,
	thumb,
}: Props) {

	const description = desc || "John O'Dev Portfolio";
	const thumbnail = thumb || '/img/default-thumb.png';

	return (
		<main className={styles.main}>
			<Head>
				<meta charSet="utf-8" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={thumbnail} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />
				<meta property="twitter:image" content={thumbnail} />
			</Head>

			<div className={styles.box_container}>

				<Sidebar />
				<div className={styles.box_content}>
					<Header />
					{children}
				</div>

			</div>
		</main>
	);
}
