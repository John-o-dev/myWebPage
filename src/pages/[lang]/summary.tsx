import Layout from '../../components/Layout'
import Resume from '@/src/components/Resume';

import useTranslation from '../../hooks/useTranslation'

export default function ResumePage () {
    const { t } = useTranslation();
    
    return (
        <Layout title={t('resume', 'title')}>
            <Resume />
        </Layout>
    )
}