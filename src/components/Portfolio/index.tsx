import styles from './portfolio.module.css'
import GithubPerfil from './GithubPerfil'
import Repos from './Repos'
import Filters from './Filters'
import LastProjects from './LastProjects'

export default function Portfolio() {
  return (
    <article className="portfolio">

            <header>
                <h2 className="article_title">Portfólio</h2>
            </header>

            <GithubPerfil />
            <LastProjects />

            <div className="separator"></div>

            <section className="projects">
                <Filters />
                <Repos />
            </section>
    </article>
  )
}