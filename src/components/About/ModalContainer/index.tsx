import styles from './modalContainer.module.css'

type ModalContainerProps = {
    isOpen: boolean;
    selected: any;
    closeModal: () => void;
}

export default function ModalContainer({isOpen, selected, closeModal}: ModalContainerProps) {
    return (
        <>
            {/* Modal */}
            {isOpen && selected && (
                <div className={`${styles.modal_container} ${styles.active}`}>

                    <div className={`${styles.overlay} ${styles.active}`} onClick={closeModal}></div>
                    <section className={styles.testimonials_modal}>

                        <button className={styles.modal_close_btn} onClick={closeModal}>
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <div className={styles.modal_img_wrapper}>
                            <figure className={styles.modal_avatar_box}>
                                <img src="/img/youtube-icon.png" alt="Testimonial" width="80" />
                            </figure>

                            <img src="/img/icon-quote.svg" alt="quote icon" />
                        </div>

                        <div className={styles.modal_content}>
                            <h4 className={styles.modal_title}>{selected.name}</h4>

                            <div className={styles.modal_text}>
                                <p>{selected.text}</p>
                            </div>
                        </div>

                    </section>
                </div>

            )}
        </>
    )
}