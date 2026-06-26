import Layout from '../../components/Layout'
import Resume from '@/src/components/Resume';
import DegreesGallery from '@/src/components/DegreesGallery';
import useTranslation from '../../hooks/useTranslation'

export default function ResumePage() {
    const { t } = useTranslation();

    return (
        <Layout title={t('resume', 'title')}>
            <article>
                <Resume />

                <div className="separator"></div>

                <DegreesGallery />
            </article>
        </Layout>
    )
}