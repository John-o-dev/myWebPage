import Head from 'next/head';
import { ActiveLink } from '../ActiveLink';
import useTranslation from '../../hooks/useTranslation';

import style from './layout.module.css'
import navigationStyle from '../Navigation/navigation.module.css'

// import Header from '../Header';
// import Footer from '../Footer';

type Props = {
	className?: string;
	children: React.ReactNode;
	desc?: string;
	title: string;
	thumb?: string;
};

export default function Layout({
	className,
	children,
	title,
	desc,
	thumb,
}: Props) {
	const { t, locale } = useTranslation();

	const description = desc || "John O'Dev Portfolio";
	const thumbnail = thumb || '/img/default-thumb.png';

	return (
		<main className={style.main_container}>
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
		
		</main>
  	);
}
