import Layout from '../../components/Layout'
import Contact from '@/src/components/Contact';

import useTranslation from '../../hooks/useTranslation'

export default function ContactPage () {
    const { t } = useTranslation();
    
    return (
        <Layout title={t('contact', 'title')}>
            <Contact />
        </Layout>
    )
}