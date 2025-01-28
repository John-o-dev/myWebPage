import styles from './resume.module.css'
import Education from './Education'
import ToolsTecnologies from './ToolsTechnologies'
import Learning from './Learning'
import Programs from './Programs'

export default function Resume () {
    return (
        <article className="resume">

            <header>
                <h2 className="article-title">Certificados</h2>
            </header>

            < Education />
            
            <ToolsTecnologies />

            <div className="separator"></div>

            < Learning />

            <div className="separator"></div>

            < Programs />

        </article>
    )
}