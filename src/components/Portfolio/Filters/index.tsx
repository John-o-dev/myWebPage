import { useMemo, useState } from 'react';
import styles from './filters.module.css'
import { ReposProps } from '@/src/types/repos';

type Props = {
    repos: ReposProps[];
    searchRepos: string;
    setSearchRepos: (value: string) => void;
}

export default function Filters({ repos, searchRepos, setSearchRepos }: Props) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Extrair todos os tópicos sem duplicar
    const allTopics = useMemo(() => {
        const topics = repos.flatMap(repo => repo.topics);
        return Array.from(new Set(topics)); // Remove duplicados
    }, [repos]);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className={styles.filter_select_box}>

            <input
                className={`${styles.filter_select} ${styles.filter_input}`}
                type="text"
                placeholder="Buscar repositório..."
                value={searchRepos}
                onChange={(e) => setSearchRepos(e.target.value)}
            />

            <div className={styles.filter_select_button_box}>    
                <button className={`${styles.filter_select} ${styles.filter_button}`} onClick={toggleMenu}>
                    <div data-select-value>Selecione...</div>
                    <div>
                        <span className="material-symbols-outlined">mystery</span>
                    </div>
                </button>

                <ul className={`${styles.select_list} ${menuOpen ? styles.active : ""}`}>
                    {allTopics.map((topic, index) => (
                        <li  className={styles.select_item} key={index}>
                            <button type='button'>{topic}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}