import Layout from '../../components/Layout'
import About from '../../components/About'

import useTranslation from '../../hooks/useTranslation'

export default function AboutPage () {
    const { t } = useTranslation();
    
    return (
        <Layout title={t('about', 'title')}>
            <About />
        </Layout>
    )
}