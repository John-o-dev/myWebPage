import styles from './resume.module.css'

import AboutMe from './AboutMe'
import Education from './Education'

import programsIcons from '@/src/lib/programsIcons'
import learningIcons from '@/src/lib/learningIcons'
import toolsTecnologiesIcons from '@/src/lib/toolsTecnologiesIcons'
import Stacks from './Stacks'
import useTranslation from '@/src/hooks/useTranslation'

export default function Resume() {
    const className = "resume";
    const { t } = useTranslation();
    return (
        <article>

            <header>
                <h2 className="article_title">{t(className, 'title')}</h2>
            </header>

            <div className={styles.container}>
                <div className={styles.left_column}>
                    <AboutMe />
                </div>
                <div className={styles.right_column}>
                    <Education />

                    <Stacks icons={toolsTecnologiesIcons} symbol="code" title={t(className, 'Stacks_1')} />
                    <Stacks icons={programsIcons} symbol="apps" title={t(className, 'Stacks_2')} />
                    <Stacks icons={learningIcons} symbol="auto_stories" title={t(className, 'Stacks_3')} />
                </div>
            </div>

        </article>
    )
}