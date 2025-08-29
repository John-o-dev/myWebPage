"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

type ModalProps = {
    onClose: () => void;
    fullName: string;
    children: React.ReactNode;
};

export default function Modal({ onClose, fullName, children  }: ModalProps) {
    const [mounted, setMounted] = useState(false);

    const formatRepoImg = (urlImg: string) => {
        return `https://raw.githubusercontent.com/${urlImg}/refs/heads/master/thumbnail.jpg`
    }

    useEffect(() => setMounted(true), []);

    if (!mounted || !open) return null;

    return createPortal(
        <div className={styles.info_card_modal_overlay} onClick={onClose}>
            <div className={styles.info_card_modal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.info_card_close_btn} onClick={onClose}>
                    ✕
                </button>
                
                <div className={styles.info_card_modal_header}>
                    <img className={styles.info_card_modal_logo} src={formatRepoImg(fullName)} alt={fullName} loading="lazy" />
                </div>

                <div className={styles.info_card_modal_body}>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}
