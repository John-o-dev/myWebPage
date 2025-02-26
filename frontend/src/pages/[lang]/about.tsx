import Layout from '../../components/Layout'
import About from '../../components/About'
import useTranslation from '../../hooks/useTranslation'

export default function AboutPage () {
    const { t } = useTranslation();
    return (
        <Layout className="about" title={t('about')}>
            <h1>Página About...</h1>
        </Layout>
    )
}