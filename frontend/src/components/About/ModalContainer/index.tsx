import styles from './modalContainer.module.css'

export default function ModalContainer() {
    return (
        <div className={styles.modal_container} data-modal-container>
            <div className={styles.overlay} data-overlay></div>
            <section className={styles.testimonials_modal}>

                <button className={styles.modal_close_btn} data-modal-close-btn>
                {/* <ion-icon name="close-outline"></ion-icon> */}
                </button>

                <div className={styles.modal_img_wrapper}>
                    <figure className={styles.modal_avatar_box}>
                        <img data-url="img/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
                    </figure>

                    <img src="img/icon-quote.svg" alt="quote icon" />
                </div>

                <div className={styles.modal_content}>
                    <h4 className={styles.modal_title} data-modal-title>User</h4>

                    {/* <time datetime="2021-06-14">01 Janeiro, 2024</time> */}
                    <time>01 Janeiro, 2024</time>

                    <div data-modal-text>
                        <p>
                        Lorem ipsum dolor sit amet, ullamcous cididt
                        consectetur adipiscing
                        elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}