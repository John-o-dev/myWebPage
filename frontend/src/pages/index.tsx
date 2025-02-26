import Layout from '../components/Layout';
import HomePage from '../components/Home';

import useTranslation from '../hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout title={t('layout', 'title')}>
      
        <HomePage />

    </Layout>
  );
}
