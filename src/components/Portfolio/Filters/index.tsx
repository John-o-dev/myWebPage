import { useMemo, useState } from 'react';
import styles from './filters.module.css'
import { ReposProps } from '@/src/types/repos';

type Props = {
    repos: ReposProps[];
}

export default function Filters({ repos }: Props) {
    const [searchTopics, setSearchTopics] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    // Extrair todos os tópicos sem duplicar
    const allTopics = useMemo(() => {
        const topics = repos.flatMap(repo => repo.topics);
        return Array.from(new Set(topics)); // Remove duplicados
    }, [repos]);

    // Remove acentos
    function removerAcentos(text: string): string {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const filteredTopics = useMemo(() => {
        const termoNormalizado = removerAcentos(searchTopics).toLowerCase();
        // Quando nada for digitado (searchTopics) o filter() retorna true
        // Então o .filter() mantém todos os elementos de allTopics.
        return allTopics.filter(topic =>
            removerAcentos(topic).toLowerCase().includes(termoNormalizado)
        );
    }, [searchTopics, allTopics]);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className={styles.filter_select_box}>

            <input
                className={`${styles.filter_select} ${styles.filter_input}`}
                type="text"
                placeholder="Buscar topic..."
                value={searchTopics}
                onChange={(e) => setSearchTopics(e.target.value)}
            />

            <div className={styles.filter_select_button_box}>    
                <button className={`${styles.filter_select} ${styles.filter_button}`} onClick={toggleMenu}>
                    <div data-select-value>Selecione...</div>
                    <div>
                        <span className="material-symbols-outlined">mystery</span>
                    </div>
                </button>

                <ul className={`${styles.select_list} ${menuOpen ? styles.active : ""}`}>
                    {filteredTopics.map((topic, index) => (
                        <li  className={styles.select_item} key={index}>
                            <button type='button'>{topic}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}