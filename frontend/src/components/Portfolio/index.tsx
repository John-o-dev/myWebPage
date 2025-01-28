import styles from './portfolio.module.css'

export default function Portfolio() {
  return (
    <article className="portfolio" data-page="portfólio">

            <header>
                <h2 className="h2 article-title">Portfólio</h2>
            </header>

            <div className="github-perfil">
            <span>Perfil Github</span>
            <div className="github-user">
                <img src="img/github-perfil.jpeg" alt='GitHub Image Perfil' />
                <div>
                <h1>
                    <a className="github-username" href="#">
                    Johnny Developer
                    </a>
                </h1>

                <ul className='repos-info'>
                    <li>Repositórios: 5</li>
                    <li>Seguidores: 7</li>
                    <li>Seguindo: 3</li>
                </ul>
                </div>
            </div>
            </div>
        
            <div className="last-projects scroll-scale">

            <h2>Últimos Projetos</h2>
            
            </div>

            <div className="separator"></div>

            <section className="projects">

            <div className="projects-filter">

                <span>Filtros</span>

                <div className="frontend-projects">
                <h3 className="title-list">Frontend</h3>
                <ul className="filter-list">
                    <li className="filter-item">
                    <button className="active" data-filter-btn>Tudo</button>
                    </li>

                    <li className="filter-item">
                    <button data-filter-btn>Web Design</button>
                    </li>

                    <li className="filter-item">
                    <button data-filter-btn>Desenvolvimento Web</button>
                    </li>
                </ul>
                </div>

                <div className="backend-projects">
                <h3 className="title-list">Backend</h3>
                <ul className="filter-list">
                    <li className="filter-item">
                    <button className="active" data-filter-btn>Tudo</button>
                    </li>

                    <li className="filter-item">
                    <button data-filter-btn>Banco de Dados</button>
                    </li>

                    <li className="filter-item">
                    <button data-filter-btn>Desenvolvimento Web</button>
                    </li>
                </ul>
                </div>
            </div>

            <div className="filter-select-box">

                <button className="filter-select" data-select>

                <div className="select-value" data-selecct-value>Frontend</div>

                <div className="select-icon">
                    {/* <ion-icon name="chevron-down"></ion-icon> */}
                </div>

                </button>

                <ul className="select-list">

                <li className="select-item">
                    <button data-select-item>Tudo</button>
                </li>

                <li className="select-item">
                    <button data-select-item>Web design</button>
                </li>

                <li className="select-item">
                    <button data-select-item>Desenvolvimento Web</button>
                </li>
                </ul>
            </div>

            <div className="filter-select-box">

                <button className="filter-select" data-select>

                <div className="select-value" data-selecct-value>Backend</div>

                <div className="select-icon">
                    {/* <ion-icon name="chevron-down"></ion-icon> */}
                </div>

                </button>

                <ul className="select-list">

                <li className="select-item">
                    <button data-select-item>Tudo</button>
                </li>

                <li className="select-item">
                    <button data-select-item>Banco de dados</button>
                </li>

                <li className="select-item">
                    <button data-select-item>Desenvolvimento Web</button>
                </li>
                </ul>
            </div>
            
            <div className="starred">
                <h2>Repositórios: </h2>
                <ul className="project-list">

                <li className="project-item active" data-filter-item data-category="web development">
                    <div>
                    <div className="project-name-img">
                        <a href="#">
                        <h3 className="projects-item-title">Uma simples Webpage multi-idiomas feito utilizando apenas HTML CSS e jQuery</h3>
                        <figure className="project-img">
                            
                            <div className="project-item-icon-box">
                            {/* <ion-icon name="eye-outline"></ion-icon> */}
                            </div>
                            <img src="img/project-1.jpg" alt="thumbnail rep" loading="lazy" />
                        </figure>
                        </a>
                    </div>
                    <div className="projects-item-infos">
                        <div className="date-container">
                        <span className="createAt">Criado em:<br/> 02/09/2021</span>
                        <span className="updateAt">Última atualização:<br/> 07/08/2024</span>
                        </div>
                        <div className="languages-container">
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='javascript' />
                            <span>Javascrip</span>
                        </div>
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css3' />
                            <span>CSS</span>
                        </div>
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html5' />
                            <span>HTML</span>
                        </div>
                        </div>	
                    </div>
                    <div className="projects-item-actions">
                        <div className="projects-item-btn-box">	
                        <a className="projects-item-btn" href="#">
                            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                            Ver repositório no Github
                        </a>
                        </div>
                        <div className="projects-item-btn-box">	
                        <a className="projects-item-btn" href="#">
                            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                            Ver no Github page
                        </a>
                        </div>
                    </div>
                    </div>
                </li>

                <li className="project-item active" data-filter-item data-category="web development">
                    <div>
                    <div className="project-name-img">
                        <a href="#">
                        <h3 className="projects-item-title">Projeto Painel Administrativo</h3>
                        <figure className="project-img">
                            
                            <div className="project-item-icon-box">
                            {/* <ion-icon name="eye-outline"></ion-icon> */}
                            </div>
                            <img src="img/project-2.png" alt="orizon" loading="lazy" />
                        </figure>
                        </a>
                    </div>
                    <div className="projects-item-infos">
                        <div className="date-container">
                        <span className="createAt">Criado em:<br/> 02/09/2021</span>
                        <span className="updateAt">Última atualização:<br/> 07/08/2024</span>
                        </div>
                        <div className="languages-container">
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='javascript' />
                            <span>Javascrip</span>
                        </div>
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css3' />
                            <span>CSS</span>
                        </div>
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html5' />
                            <span>HTML</span>
                        </div>
                        </div>	
                    </div>
                    <div className="projects-item-actions">
                        <div className="projects-item-btn-box">	
                        <a className="projects-item-btn" href="#">
                            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                            Ver repositório no Github
                        </a>
                        </div>
                        <div className="projects-item-btn-box">	
                        <a className="projects-item-btn" href="#">
                            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                            Ver no Github page
                        </a>
                        </div>
                    </div>
                    </div>
                </li>

                <li className="project-item active" data-filter-item data-category="web development">
                    <div>
                    <div className="project-name-img">
                        <a href="#">
                        <h3 className="projects-item-title">Um website de aluguel de casas</h3>
                        <figure className="project-img">
                            
                            <div className="project-item-icon-box">
                            {/* <ion-icon name="eye-outline"></ion-icon> */}
                            </div>
                            <img src="img/project-3.jpg" alt="fundo" loading="lazy" />
                        </figure>
                        </a>
                    </div>
                    <div className="projects-item-infos">
                        <div className="date-container">
                        <span className="createAt">Criado em:<br/> 02/09/2021</span>
                        <span className="updateAt">Última atualização:<br/> 07/08/2024</span>
                        </div>
                        <div className="languages-container">
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='javascript' />
                            <span>Javascrip</span>
                        </div>
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css3' />
                            <span>CSS</span>
                        </div>
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html5' />
                            <span>HTML</span>
                        </div>
                        </div>	
                    </div>
                    <div className="projects-item-actions">
                        <div className="projects-item-btn-box">	
                        <a className="projects-item-btn" href="#">
                            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                            Ver repositório no Github
                        </a>
                        </div>
                        <div className="projects-item-btn-box">	
                        <a className="projects-item-btn" href="#">
                            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                            Ver no Github page
                        </a>
                        </div>
                    </div>
                    </div>
                </li>

                <li className="project-item active" data-filter-item data-category="web development">
                    <div>
                    <div className="project-name-img">
                        <a href="#">
                        <h3 className="projects-item-title">Projeto de site Responsivo</h3>
                        <figure className="project-img">
                            
                            <div className="project-item-icon-box">
                            {/* <ion-icon name="eye-outline"></ion-icon> */}
                            </div>
                            <img src="img/project-4.png" alt="brawlhalla" loading="lazy" />
                        </figure>
                        </a>
                    </div>
                    <div className="projects-item-infos">
                        <div className="date-container">
                        <span className="createAt">Criado em:<br/> 02/09/2021</span>
                        <span className="updateAt">Última atualização:<br/> 07/08/2024</span>
                        </div>
                        <div className="languages-container">
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='javascript' />
                            <span>Javascrip</span>
                        </div>
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css3' />
                            <span>CSS</span>
                        </div>
                        <div className="language-content">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html5' />
                            <span>HTML</span>
                        </div>
                        </div>	
                    </div>
                    <div className="projects-item-actions">
                        <div className="projects-item-btn-box">	
                        <a className="projects-item-btn" href="#">
                            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                            Ver repositório no Github
                        </a>
                        </div>
                        <div className="projects-item-btn-box">	
                        <a className="projects-item-btn" href="#">
                            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
                            Ver no Github page
                        </a>
                        </div>
                    </div>
                    </div>
                </li>

                </ul>
            </div>
            </section>
        </article>
  )
}