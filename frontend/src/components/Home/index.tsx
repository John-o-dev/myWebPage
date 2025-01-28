import styles from './home.module.css'

export default function HomePage() {
    return (
        <article className={styles.home} data-page="home">

              <section className={styles.home_container}>
                <div className={styles.home_content}>

                  <h1 className="article-title">Antonio Rodrigues Lima Filho</h1>

                  <h2>Desenvolvedor Web | Web Designer | Criador de Conteúdo</h2>

                  <p>
                    Olá! Eu sou Antonio Rodrigues, um Desenvolvedor Web apaixonado por criar experiências digitais incríveis.<br/> No entanto, você pode me conhecer também como John'Odev, o pseudônimo que uso para meu trabalho no YouTube e em vários projetos criativos.<br/>

                    Com a missão de tornar problemas complexos em simples, bonitos e com design intuitivo.<br/>

                    Explore meu portfólio para ver alguns dos meus trabalhos mais recentes e descobrir como posso ajudar a transformar suas ideias em realidade.
                  </p>

                  <div className={styles.center_name}>
                    <h3>&lt;j&gt; John O'Dev &lt;/j&gt; </h3>
                    <div className={styles.change_text}>
                      <h4>
                        <span className={styles.word}>Web&nbsp;Designer</span>
                        <span className={styles.word}>Web&nbsp;Developer</span>
                        <span className={styles.word}>Motion&nbsp;Designer</span>
                        <span className={styles.word}>Youtuber</span>
                      </h4>
                    </div>
                  </div>
                </div>
            
                <div className={styles.home_image}>
                  <figure className={styles.img_box}>
                    <img src="img/img-home-bg.jpg" alt="home" />
                  </figure>
                </div>
            
            </section>
        </article>
    )
}