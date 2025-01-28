import styles from './aboutContainer.module.css'

export default function AboutContainer() {
    return (
        <section id="about-container" className={styles.about_container}>
            <div className={styles.img_about}>
                <figure className={styles.img_box}>
                    <img src="img/img-about-bg.png" alt="Picture about me section" />
                </figure>
            </div>
        
            <div className={styles.about_content}>
                <span>Deixe eu me apresentar</span>
                <h2>Quem Sou Eu</h2>
                <p>
                    Sou Antonio Rodrigues, trabalho como Desenvolvedor Web, Web Design e Motion Design sempre buscando aprender e evoluir. No meu trabalho profissional, eu uso meu nome real, mas também sou conhecido como John'Odev no meu canal do YouTube onde compartilho minhas ideias e projetos e em projetos paralelos. John'Odev é o pseudônimo que uso para explorar e compartilhar minha criatividade em Web Design, e você pode conferir mais sobre isso (Clicando aqui).
                </p>
                <p>
                    Meu trabalho é construir websites funcionais, atrativos e amigáveis. Adicionando um toque pessoal e garantindo que seja atraente e fácil de usar.
                </p>	
                <p>
                    Meu objetivo é transmitir a mensagem e identidade da sua marca ou produto da maneira mais criativa.
                </p>
        
                <div className={styles.btn_box}>
                    <a href="#" className={styles.btn}>
                        {/* <ion-icon name="download-outline"></ion-icon> */}
                        Download Currículo
                    </a>
                </div>
            </div>
        </section>
    )
}