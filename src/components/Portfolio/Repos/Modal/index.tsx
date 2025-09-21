"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { ReposProps } from "@/src/types/repos";
import useTranslation from "@/src/hooks/useTranslation";
import { formatDate } from "@/src/utils/format";
import { formatRepoImg, formatRepoName, linkToGithubPage } from "@/src/utils/portfolioUtils";

type ModalProps = {
    onClose: () => void;
    repo: ReposProps;
    className: string;
    classComponent: string;
};

export default function Modal({ onClose, repo, className, classComponent }: ModalProps) {
    const [mounted, setMounted] = useState(false);
    const { t } = useTranslation();

    useEffect(() => setMounted(true), []);

    if (!mounted || !open) return null;

    return createPortal(
        <div className={styles.info_card_modal_overlay} onClick={onClose}>
            <div className={styles.info_card_modal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.info_card_close_btn} onClick={onClose}>
                    ✕
                </button>

                <div className={styles.info_card_modal_header}>
                    <img className={styles.info_card_modal_logo} src={formatRepoImg(repo.full_name)} alt={repo.full_name} loading="lazy" />
                </div>

                <div className={styles.info_card_modal_body}>
                    <h2 className={styles.repo_title_modal}>{formatRepoName(repo.name)}</h2>

                    <p className={styles.repo_dates_modal}>
                        <span className={styles.createAt}>
                            {t(className, `${classComponent}_createdAt`)}: &nbsp;
                            <span>{formatDate(repo.created_at)}</span>
                        </span>
                        <span className={styles.updateAt}>
                            {t(className, `${classComponent}_updatedAt`)}: &nbsp;
                            <span>{formatDate(repo.updated_at)}</span>
                        </span>
                    </p>

                    <p>{repo.description}</p>

                    <div className={styles.language_bar}>
                        {repo.linguagens?.map(lang => (
                            <span key={lang.name} className={styles[`language_bar_${lang.name}`]} style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}></span>
                        ))}
                    </div>

                    <div className={styles.language_legend_modal}>
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

                    <div className={styles.buttons_modal}>
                        <a href={repo.html_url} className={`${styles.btn} ${styles.repo}`} target="_blank" rel="noopener noreferrer">
                            📦&nbsp;
                            {t(className, `${classComponent}_btn_github_repo`)}
                        </a>
                        <a href='#' onClick={(e) => { e.preventDefault(); linkToGithubPage(repo.name) }} className={`${styles.btn} ${styles.demo}`}>
                            🌐&nbsp;
                            {t(className, `${classComponent}_btn_github_page`)}
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
