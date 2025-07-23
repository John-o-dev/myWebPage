import useTranslation from '@/src/hooks/useTranslation';
import ButtonBox from '../ButtonBox'
import styles from './contact.module.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const className = "contact";
    const classComponent = "contactForm";
    const { t } = useTranslation();

    const form = useRef<HTMLFormElement>(null);
     const [successMessage, setSuccessMessage] = useState("");
    
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID, 
            process.env.NEXT_PUBLIC_TEMPLATE_ID, 
            form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        })
        .then(
        () => {
            alert(t(className, `${classComponent}_form_success`));
            form.current?.reset();
        },
        (error) => {
            console.error("FAILED...", error);
            alert(t(className, `${classComponent}_form_error`));
        },
        );
    };

    return (
        <article>
            <section className={styles.contact} id="contact">

                <div className={`${styles.contact_content} ${styles.section_content}`}>

                    <p className={styles.section_subtitle}>{t(className, 'section_subtitle')}</p>

                    <h2 className={`${styles.h3} ${styles.section_title}`}>{t(className, 'section_title')}</h2>

                    <p className={styles.section_text}>
                        {t(className, 'section_description')}
                    </p>

                    <ul className={styles.contact_list}>

                        <li className={styles.contact_list_item}>

                            <div className={styles.contact_item_icon}>
                                <span className="material-symbols-outlined">person_pin_circle</span>
                            </div>

                            <div className={styles.wrapper}>
                                <h3 className={`${styles.h4} ${styles.contact_item_title}`}>{t(className, 'address_title')}:</h3>

                                <address className={styles.contact_info}>
                                    {t(className, 'address_info')}
                                </address>
                            </div>

                        </li>

                        <li className={styles.contact_list_item}>

                            <div className={styles.contact_item_icon}>
                                <span className="material-symbols-outlined">contact_phone</span>
                            </div>

                            <div className={styles.wrapper}>
                                <h3 className={`${styles.h4} ${styles.contact_item_title}`}>{t(className, 'phone_title')}:</h3>

                                <a href="tel:01234567789" className={styles.contact_info}>{t(className, 'phone_info')}</a>

                            </div>

                        </li>

                        <li className={styles.contact_list_item}>

                            <div className={styles.contact_item_icon}>
                                <span className="material-symbols-outlined">mail</span>
                            </div>

                            <div className={styles.wrapper}>
                                <h3 className={`${styles.h4} ${styles.contact_item_title}`}>{t(className, 'email_title')}:</h3>

                                <a href="mailto:info@jack.com" className={styles.contact_info}>{t(className, 'email_info')}</a>

                            </div>

                        </li>

                        <li>
                            <ul className={styles.contact_social_list}>

                                <li>
                                    <a href="#" className={styles.contact_social_link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                                            <g fill="#12f7ff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
                                        </svg>
                                        <div className={styles.tooltip}>Facebook</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={styles.contact_social_link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                                            <g fill="#12f7ff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path></g></g>
                                        </svg>
                                        <div className={styles.tooltip}>Twitter</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={styles.contact_social_link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                                            <g fill="#12f7ff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.682,0 23,-10.317 23,-23c0,-12.683 -10.318,-23 -23,-23zM18,35h-4v-15h4zM16,17c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM37,35h-4v-5v-2.5c0,-1.925 -1.575,-3.5 -3.5,-3.5c-1.925,0 -3.5,1.575 -3.5,3.5v7.5h-4v-15h4v1.816c1.168,-1.122 2.752,-1.816 4.5,-1.816c3.59,0 6.5,2.91 6.5,6.5z"></path></g></g>
                                        </svg>
                                        <div className={styles.tooltip}>LinkedIn</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={styles.contact_social_link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                                            <g fill="#12f7ff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                                        </svg>
                                        <div className={styles.tooltip}>Instagram</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className={styles.contact_social_link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                                            <g fill="#12f7ff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path></g></g>
                                        </svg>
                                        <div className={styles.tooltip}>Github</div>
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>

                </div>

                <form ref={form} onSubmit={sendEmail} className={styles.contact_form}>

                    <div className={styles.form_wrapper}>

                        <label htmlFor="user_name" className={styles.form_label}>{t(className, `${classComponent}_input_name`)}:</label>

                        <div className={styles.input_wrapper}>

                            <span className={`material-symbols-outlined ${styles.icon}`}>person</span>
                            <input 
                            type="text" 
                            id='user_name'
                            name="user_name"
                            className={styles.input_field} 
                            placeholder={t(className, `${classComponent}_placeholder_name`)} 
                            required />

                        </div>

                    </div>

                    <div className={styles.form_wrapper}>

                        <label htmlFor="user_email" className={styles.form_label}>{t(className, `${classComponent}_input_email`)}:</label>

                        <div className={styles.input_wrapper}>

                            <span className={`material-symbols-outlined ${styles.icon}`}>mail</span>
                            <input 
                            type="email" 
                            id='user_email'
                            name="user_email"
                            className={styles.input_field} 
                            placeholder={t(className, `${classComponent}_placeholder_email`) }
                            required />

                        </div>

                    </div>

                    <div className={styles.form_wrapper}>

                        <label htmlFor="user_phone" className={styles.form_label}>{t(className, `${classComponent}_input_phone`)}</label>

                        <div className={styles.input_wrapper}>

                            <span className={`material-symbols-outlined ${styles.icon}`}>phone_enabled</span>
                            <input 
                            type="tel" 
                            id='user_phone'
                            name="user_phone" 
                            className={styles.input_field} 
                            placeholder={t(className, `${classComponent}_placeholder_phone`)} 
                            required />
                        </div>

                    </div>

                    <div className={styles.form_wrapper}>

                        <label htmlFor="message" className={styles.form_label}>{t(className, `${classComponent}_input_message`)}</label>

                        <div className={styles.input_wrapper}>

                            <span className={`material-symbols-outlined ${styles.icon}`}>text_snippet</span>
                            <textarea 
                            id='message'
                            name="message" 
                            className={styles.input_field}
                            placeholder={t(className, `${classComponent}_placeholder_message`)}
                            required >
                            </textarea>

                        </div>

                    </div>

                    <ButtonBox className={styles.btn_primary}>{t(className, `${classComponent}_btn_send`)}</ButtonBox>

                </form>

                {successMessage && <p>{successMessage}</p>}

            </section>
        </article>
    )
}