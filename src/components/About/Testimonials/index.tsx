import { useState } from "react";

import testimonials from '../../../lib/testimonials'
import styles from './testemonials.module.css'
import ModalContainer from "../ModalContainer";

export default function Testimonials() {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const openModal = (item) => {
        setSelected(item);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelected(null);
    };

    return (
        <section className={styles.testimonials}>
            <h3 className={styles.testimonials_title}>Comentários</h3>

            <ul className={styles.testimonials_list}>
                {testimonials.map((item, index) => (
                    <li key={index} className={styles.testimonials_item}>
                        <div className={styles.content_card} onClick={() => openModal(item)}>
                            <figure className={styles.testimonials_avatar_box}>
                                <img src="/img/youtube-icon.png" alt="Testimonial" width="60" />
                            </figure>

                            <h4 className={styles.testimonials_item_title}>{item.name}<span>{item.platform}</span></h4>

                            <div className={styles.testimonials_text}>
                                <p>
                                    {item.text}
                                </p>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>

            <ModalContainer isOpen={isOpen} selected={selected} closeModal={closeModal}/>

        </section >
    )
}