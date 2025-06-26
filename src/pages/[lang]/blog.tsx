import Blog from '@/src/components/Blog';
import Layout from '../../components/Layout'


import useTranslation from '../../hooks/useTranslation'

export default function PortfolioPage () {
    const { t } = useTranslation();
    
    return (
        <Layout title={t('blog', 'title')}>
            <Blog />
        </Layout>
    )
}