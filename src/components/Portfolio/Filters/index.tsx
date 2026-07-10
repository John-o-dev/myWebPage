import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './filters.module.css'
import { ReposProps } from '@/src/types/repos';

type Props = {
    repos: ReposProps[];
    searchByName: string;
    searchByTopic: string;
    setSearchByName: (value: string) => void;
    setSearchByTopic: (value: string) => void;
}

export default function Filters({ repos, searchByName, searchByTopic, setSearchByName, setSearchByTopic }: Props) {
    const menuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Extrair todos os tópicos sem duplicar
    const allTopics = useMemo(() => {
        const topics = repos.flatMap(repo => repo.topics);
        return Array.from(new Set(topics)); // Remove duplicados
    }, [repos]);

    return (
        <div className={styles.filter_select_box}>

            <input
                className={`${styles.filter_select} ${styles.filter_input}`}
                type="text"
                placeholder="Buscar repositório..."
                value={searchByName}
                onChange={(e) => setSearchByName(e.target.value)}
            />

            <div ref={menuRef} className={styles.filter_select_button_box}>
                <button className={`${styles.filter_select} ${styles.filter_button}`} onClick={toggleMenu}>
                    <div>{searchByTopic ? searchByTopic : "Selecione..."}</div>
                    <div>
                        <span className={styles.clear_selection} onClick={() => {
                            setSearchByTopic("")
                        }}>X</span>
                    </div>
                </button>

                <ul className={`${styles.select_list} ${menuOpen ? styles.active : ""}`}>
                    {allTopics.map((topic, index) => (
                        <li className={styles.select_item} key={index}>
                            <button type='button' onClick={() => {
                                setSearchByTopic(topic)
                            }}>{topic}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}