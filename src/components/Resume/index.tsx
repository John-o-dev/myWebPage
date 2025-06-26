import styles from './resume.module.css'

import AboutMe from './AboutMe'
import Education from './Education'

import programsIcons from '@/src/lib/programsIcons'
import learningIcons from '@/src/lib/learningIcons'
import toolsTecnologiesIcons from '@/src/lib/toolsTecnologiesIcons'
import Stacks from './Stacks'

export default function Resume() {
    return (
        <article>

            <div className={styles.container}>
                <div className={styles.left_column}>
                    <AboutMe />
                </div>
                <div className={styles.right_column}>
                    <Education />

                    <Stacks icons={toolsTecnologiesIcons} symbol="code" title="Stacks e Tecnologias" />
                    <Stacks icons={programsIcons} symbol="apps" title="Ferramentas Criativas" />
                    <Stacks icons={learningIcons} symbol="auto_stories" title="Aprendizados em Andamento"/>
                </div>
            </div>

        </article>
    )
}