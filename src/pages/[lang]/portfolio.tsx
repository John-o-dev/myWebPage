import Layout from '../../components/Layout'
import Portfolio from '@/src/components/Portfolio';

import useTranslation from '../../hooks/useTranslation'

export default function PortfolioPage () {
    const { t } = useTranslation();
    
    return (
        <Layout title={t('portfolio', 'title')}>
            <Portfolio />
        </Layout>
    )
}