import ButtonBox from '../../ButtonBox'
import styles from './aboutMe.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>Perfil Profissional</h1>
      <p className={styles.description}>{'<>Hello Dev\'s</>'}</p>
      <p className={styles.description}>
        Sou o Antonio Rodrigues, Desenvolvedor Web com foco em tecnologias modernas como Angular, React, Next.js, JavaScript, HTML/CSS entre outras. Atualmente curso Análise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi e me especializo por meio de projetos práticos e cursos online (nanodegrees).
      </p>

      <p className={styles.description}>
        Tenho experiência com desenvolvimento de interfaces responsivas e foco em performance, acessibilidade e boas práticas de código.
      </p>

      <p className={styles.description}>
        Ao longo da minha trajetória, também tive contato com áreas técnicas como mecatrônica, o que fortaleceu minha lógica e pensamento analítico.
      </p>

      <p className={styles.description}>
        Estou sempre buscando aprender e evoluir, com o objetivo de contribuir em projetos que unam tecnologia, criatividade e impacto real.
      </p>

      <p className={styles.description}>
        Meu trabalho é construir websites funcionais, atrativos e amigáveis. Adicionando um toque pessoal e garantindo que seja atraente e fácil de usar.
      </p>

      <p className={styles.description}>
        Meu objetivo é transmitir a mensagem e identidade da sua marca ou produto da maneira mais criativa.
      </p>

      <div className={styles.buttons}>
        <ButtonBox className={styles.btn_actions} href="/pdf/Currículo_Profissional_Antonio.pdf" target="_blank" rel="noopener noreferrer">
          Visualizar Currículo Online
        </ButtonBox>

        <ButtonBox className={styles.btn_actions} href="/pdf/Currículo_Profissional_Antonio.pdf" download>
          Download Currículo
        </ButtonBox>
      </div>
    </section>
  )
}