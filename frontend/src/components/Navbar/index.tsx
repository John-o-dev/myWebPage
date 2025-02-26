"use client"

import { useEffect, useState } from 'react';
import { ActiveLink } from '../ActiveLink';
import useTranslation from '../..//hooks/useTranslation';
import useHandleLocaleChange from '@/src/utils/handleLocaleChange';

import styles from './navbar.module.css'


export default function Navbar() {
    const className = "navbar";
    const { t, locale, locales } = useTranslation();
    const handleLocaleChange = useHandleLocaleChange();

    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         console.log("ScrollY: ", window.scrollY);
    //         setIsScrolled(window.scrollY >= 12);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        // <nav className={`${isScrolled ? styles.navbar_scrolled : styles.navbar}`}>
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list} >
                <li>
                    <ActiveLink
                        href={`/`}
                        activeClassName="active">
                        <a className={styles.navbar_link}>{t(className, 'home')}</a>
                    </ActiveLink>
                </li>

                <li>
                    <ActiveLink
                        href={`/${locale}/about`}
                        activeClassName="active">
                        <a className={styles.navbar_link}>{t(className, 'about')}</a>
                    </ActiveLink>
                </li>

                <li>
                    <ActiveLink
                        href={`/${locale}/summary`}
                        activeClassName="active">
                        <a className={styles.navbar_link}>{t(className, 'summary')}</a>
                    </ActiveLink>
                </li>

                <li>
                    <ActiveLink
                        href={`/${locale}/portfolio`}
                        activeClassName="active">
                        <a className={styles.navbar_link}>{t(className, 'portfolio')}</a>
                    </ActiveLink>
                </li>

                <li>
                    <ActiveLink
                        href={`/${locale}/blog`}
                        activeClassName="active">
                        <a className={styles.navbar_link}>{t(className, 'blog')}</a>
                    </ActiveLink>
                </li>

                <li>
                    <div className={styles.langButton}>
                        {locales.map((locale) => (
                            <button 
                            className={styles.navbar_link} 
                            key={locale} 
                            onClick={() => handleLocaleChange(locale)}>
                                {locale}
                            </button>
                        ))}
                    </div>
                </li>

            </ul>
        </nav>
    )
}
