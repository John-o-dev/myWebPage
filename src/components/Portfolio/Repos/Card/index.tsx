import styles from './card.module.css';
import Modal from '../Modal';
import useTranslation from '@/src/hooks/useTranslation';
import { formatRepoImg, formatRepoName, linkToGithubPage } from '@/src/utils/portfolioUtils';
import { formatDate } from '@/src/utils/format';
import { useEffect } from 'react';

export default function Card({
    index, 
    section,
    repo, 
    openIndex, 
    setOpenIndex, 
    className, 
    classComponent}: any
) {
    const { t } = useTranslation();
        
    return (
        <li className={`${styles.project_item} ${styles.active}`} key={index}>

            <div className={styles.repo_card}>
                <div
                    className={styles.repo_card_content}
                    onClick={() => { setOpenIndex({ section: section, index: index }) }}>
                    <figure>
                        <img className={styles.repo_logo} src={formatRepoImg(repo.full_name)} alt={repo.full_name} loading="lazy" />
                    </figure>
                    <button
                        type="button"
                        className={styles.btn_info_card}
                        title="Ver descrição detalhada"
                        onClick={() => { setOpenIndex({ section: section, index: index }) }}>
                        Mais informações&nbsp;
                        <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z" fill="#ffffff"></path> </g></svg>
                    </button>

                    {openIndex?.section === section && openIndex.index === index && (
                        <Modal onClose={() => setOpenIndex(null)} repo={repo} className={className} classComponent={classComponent} />
                    )}

                    <h2 className={styles.repo_title}>{formatRepoName(repo.name)}</h2>
                </div>

                <p className={styles.repo_dates}>
                    <span className={styles.createAt}>{t(className, `${classComponent}_createdAt`)}: {formatDate(repo.created_at)}</span>
                    <span className={styles.updateAt}>{t(className, `${classComponent}_updatedAt`)}: {formatDate(repo.updated_at)}</span>
                </p>

                <div className={styles.repo_description} aria-live="polite">
                    <p id="short-desc">
                        {repo.description}
                    </p>
                    <button
                        type="button"
                        className={styles.btn_info_description}
                        aria-describedby="full-desc"
                        title="Ver descrição detalhada">
                        <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke="#12f7ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z" fill="#12f7ff"></path> </g></svg>
                    </button>

                    <div className={styles.tooltip} role="tooltip" id="full-desc">
                        <div className={styles.tooltip_inner}>
                            {repo.description}
                        </div>
                    </div>
                </div>

                <div className={styles.language_bar}>
                    {repo.linguagens?.map(lang => (
                        // className={styles[`language_bar_${lang.name}`]} NÂO UTILIZADO
                        <span key={lang.name} className={styles[`language_bar_${lang.name}`]} style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}></span>
                    ))}
                </div>

                <div className={styles.language_legend}>
                    {repo.linguagens?.map(lang => (
                        <div key={lang.name} className={styles.language_container}>
                            <span className={`${styles.dot} ${styles.js}`}></span>
                            <img className={styles.language_icon} src={lang.icon} alt={lang.name} />
                            <span className={styles.language_text}>{lang.name}: {lang.percent}%</span>
                        </div>
                    ))}
                </div>

                <div className={styles.tags}>
                    {repo.topics?.map((topic, idx) => (
                        <span key={idx} className={styles.tag}>
                            {topic}
                        </span>
                    ))}
                </div>

                <div className={styles.buttons}>
                    <a className={`${styles.btn} ${styles.repo}`} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        📦&nbsp;
                        {t(className, `${classComponent}_btn_github_repo`)}
                    </a>
                    <a href='#' onClick={(e) => { e.preventDefault(); linkToGithubPage(repo.name) }} className={`${styles.btn} ${styles.demo}`}>
                        🌐&nbsp;
                        {t(className, `${classComponent}_btn_github_page`)}
                    </a>
                </div>
            </div>
        </li>
    )
}