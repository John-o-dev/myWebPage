import styles from './testimonials.module.css'

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <h3 className={styles.testimonials_title}>Comentários</h3>

            <ul className={styles.testimonials_list}>

                <li className={styles.testimonials_item}>
                    <div className={styles.content_card} data-testimonials-item>

                        <figure className={styles.testimonials_avatar_box}>
                            <img data-url="img/youtube-icon.png" alt="Testimonial" width="60" data-testimonials-avatar />
                        </figure>

                        <h4 className={styles.testimonials_item_title} data-testimonials-title>@viniciuscg12ba <span>(Youtube)</span></h4>

                        <div className={styles.testimonials_text} data-testimonials-text>
                        <p>
                            Thanks! Me ajudou a escrever meu código
                        </p>
                        </div>

                    </div>
                </li>

                <li className={styles.testimonials_item}>
                    <div className={styles.content_card} data-testimonials-item>

                        <figure className={styles.testimonials_avatar_box}>
                            <img data-url="img/youtube-icon.png" alt="Testimonial" width="60" data-testimonials-avatar />
                        </figure>

                        <h4 className={styles.testimonials_item_title} data-testimonials-title>@deniskravchuk707 <span>(Youtube)</span></h4>

                        <div className={styles.testimonials_text} data-testimonials-text>
                        <p>
                            Great thanks! Really amazing and simple tutorial. It’s that what I need!
                        </p>
                        </div>

                    </div>
                </li>

                <li className={styles.testimonials_item}>
                    <div className={styles.content_card} data-testimonials-item>

                        <figure className={styles.testimonials_avatar_box}>
                            <img data-url="img/youtube-icon.png" alt="Emily evans Testimonial" width="60" data-testimonials-avatar />
                        </figure>

                        <h4 className={styles.testimonials_item_title} data-testimonials-title>@jonathanel-aziz7708 <span>(Youtube)</span></h4>

                        <div className={styles.testimonials_text} data-testimonials-text>
                        <p>
                            Wow incredible
                        </p>
                        </div>

                    </div>
                </li>
            </ul>
        </section>
    )
}