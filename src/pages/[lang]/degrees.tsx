import Layout from '../../components/Layout'
// import Degress from '@/src/components/Degress';

import useTranslation from '../../hooks/useTranslation'

export default function DegreesPage () {
    const { t } = useTranslation();
    
    return (
        <Layout title={t('degrees', 'title')}>
            {/* <Degrees /> */}
            <h1>Degrees Gallery</h1>
        </Layout>
    )
}