import Link from 'next/link';

import Layout from '../components/Layout';
import useTranslation from '../hooks/useTranslation';

export default function Home() {
  const { t, locale } = useTranslation();

  return (
    <Layout title={t('home')} className="home">
      <section className="hero">
        {/* <div className="message">
          <h1>Johnny</h1>
          <p>{t('slogan')}</p>
          <Link href={`/${locale}/${t('about').toLowerCase()}`}>
            <a className="button">{t('about')}</a>
          </Link>
          <Link href={`/${locale}/${t('blog').toLowerCase()}`}>
            <a className="button">{t('blog')}</a>
          </Link>
          <Link href={`/${locale}/${t('home').toLowerCase()}`}>
            <a className="button">{t('home')}</a>
          </Link>
        </div> */}
      </section>
    </Layout>
  );
}
