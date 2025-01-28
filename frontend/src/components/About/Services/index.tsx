import styles from './services.module.css'

export default function Services() {
    return (
        <section className={styles.service}>
            <h3 className={styles.service_title}>Serviços Profissionais</h3>
            <ul className={styles.service_list}>
                <li className={styles.service_item}>
                    <figure className={styles.service_icon_box}>
                        <img data-url="img/icon-design.svg" alt="design icon" width="40" />
                    </figure>

                    <div className={styles.service_content_box}>
                        <h4 className={styles.service_item_title}>Web Design</h4>
                        <p className={styles.service_item_text}>
                        O Web Designer foca na criação de layouts e interfaces para sites e aplicações web. Além de habilidades em design gráfico, um web designer precisa ter conhecimentos em linguagens de programação e marcação, como HTML, CSS e JavaScript, além de outros aspectos como a seleção de cores, tipografia, imagens e outros elementos gráficos para transformar seus designs em páginas atraentes e funcionais para os usuários.<br/>

                        Eles também precisam considerar a usabilidade, acessibilidade e a experiência do usuário (UX) ao projetar interfaces que sejam não apenas esteticamente agradáveis, mas também intuitivas e fáceis de navegar.<br/>

                        Outra parte importante do trabalho do web designer é garantir que o site seja responsivo, ou seja, que se adapte bem a diferentes dispositivos, como computadores, tablets e smartphones. 
                        </p>
                    </div>
                </li>

                <li className={styles.service_item}>
                    <figure className={styles.service_icon_box}>
                        <img data-url="img/icon-dev.svg" alt="Web development icon" width="40" />
                    </figure>

                    <div className={styles.service_content_box}>
                        <h4 className={styles.service_item_title}>Desenvolvedor Web</h4>
                        <p className={styles.service_item_text}>
                        O Desenvolvedor web realiza o desenvolvimento de websites na internet. Ou seja, planeja, constrói e dá manutenção em toda a estrutura de um determinado site garantindo que tudo funcione de acordo com o esperado.<br/>

                        Podendo utilizar diferentes linguagens de programação e ferramentas de desenvolvimento para traduzir requisitos e ideias em código executável.<br/>

                        O processo de desenvolvimento envolve várias etapas, Isso inclui o entendimento dos requisitos do cliente ou usuário final, a codificação, e a realização de testes para identificar e corrigir erros.<br/>

                        Também chamado de web developer ou programador, podendo atuar no front-end e back-end.
                        </p>
                    </div>
                </li>

                <li className={styles.service_item}>
                    <figure className={styles.service_icon_box}>
                        <img data-url="img/icon-app.svg" alt="mobile app icon" width="40" />
                    </figure>

                    <div className={styles.service_content_box}>
                        <h4 className={styles.service_item_title}>Motion Designer</h4>
                        <p className={styles.service_item_text}>
                        Projetos de animação que dão vida às imagens estáticas por meio dos elementos gráficos em movimento que criam usando animação em 2D e 3D para diversas plataformas e fins, como aberturas e encerramentos de filmes, youtube, propagandas entre outros.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}