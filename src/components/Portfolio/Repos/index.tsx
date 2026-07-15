import useTranslation from '@/src/hooks/useTranslation';
import { useMemo, useState } from 'react';
import styles from './repos.module.css'
import Card from './Card';

import { ReposProps } from '@/src/types/repos';
import { filterRepos, filterReposByTopic } from '@/src/utils/portfolioUtils';

type Props = {
    repos: ReposProps[];
    searchByName: string;
    searchByTopic: string;
}

export default function Repos({ repos, searchByName, searchByTopic }: Props) {
    const [openIndex, setOpenIndex] = useState<{ section: string; index: number } | null>(null);
    const className = "portfolio";
    const classComponent = "repos";
    const { t } = useTranslation();

    const filteredRepos = useMemo(() => {
        return filterRepos(repos, searchByName, searchByTopic);
    }, [repos, searchByName, searchByTopic]);

    return (
        <main>
            <section className={styles.repos}>
                <h2 className={styles.subtitle}>
                    {searchByName
                        ? `Resultados para "${searchByName}"`
                        : t(className, `${classComponent}_subtitle`)}
                </h2>

                <ul className={styles.project_list}>
                    {filteredRepos.map((repo, index) => (
                        <Card 
                        key={index} 
                        index={index} 
                        section={'filteredRepos'} 
                        repo={repo as ReposProps} 
                        openIndex={openIndex} 
                        setOpenIndex={setOpenIndex} 
                        className={className} 
                        classComponent={classComponent} />
                    ))}
                </ul>
            </section>

            <div className={styles.separator}></div>
{/* 
            {filterReposByTopic("angular", repos) &&
                <section className={styles.repos}>
                    <h2 className={styles.subtitle}>
                        Angular
                    </h2>
                    {filterReposByTopic("angular", repos).map((repo, index) => (
                        <Card 
                        key={index} 
                        section={'angular'} 
                        repo={repo} 
                        openIndex={openIndex} 
                        setOpenIndex={setOpenIndex} 
                        className={className} 
                        classComponent={classComponent} />
                    ))}
                    <div className={styles.separator}></div>
                </section>
            }

            {filterReposByTopic("react", repos) &&
                <section className={styles.repos}>
                    <h2 className={styles.subtitle}>
                        React
                    </h2>
                    {filterReposByTopic("react", repos).map((repo, index) => (
                        <Card 
                        key={index} 
                        section={'react'} 
                        repo={repo} 
                        openIndex={openIndex} 
                        setOpenIndex={setOpenIndex} 
                        className={className} 
                        classComponent={classComponent} />
                    ))}
                    <div className={styles.separator}></div>
                </section>
            }

            {filterReposByTopic("python", repos) &&
                <section className={styles.repos}>
                    <h2 className={styles.subtitle}>
                        Python
                    </h2>
                    {filterReposByTopic("python", repos).map((repo, index) => (
                        <Card 
                        key={index} 
                        section={'python'} 
                        repo={repo} 
                        openIndex={openIndex} 
                        setOpenIndex={setOpenIndex} 
                        className={className} 
                        classComponent={classComponent} />
                    ))}
                    <div className={styles.separator}></div>
                </section>
            }

            {filterReposByTopic("ui/ux design", repos) &&
                <section className={styles.repos}>
                    <h2 className={styles.subtitle}>
                        UI/UX Design
                    </h2>
                    {filterReposByTopic("ui/ux design", repos).map((repo, index) => (
                        <Card 
                        key={index} 
                        section={'ui/ux design'} 
                        repo={repo} 
                        openIndex={openIndex} 
                        setOpenIndex={setOpenIndex} 
                        className={className} 
                        classComponent={classComponent} />
                    ))}
                    <div className={styles.separator}></div>
                </section>
            }

            {filterReposByTopic("layout", repos) &&
                <section className={styles.repos}>
                    <h2 className={styles.subtitle}>
                        Parts/Layout
                    </h2>
                    {filterReposByTopic("layout", repos).map((repo, index) => (
                        <Card 
                        key={index} 
                        section={'layout'} 
                        repo={repo} 
                        openIndex={openIndex} 
                        setOpenIndex={setOpenIndex} 
                        className={className} 
                        classComponent={classComponent} />
                    ))}
                    <div className={styles.separator}></div>
                </section>
            } 
*/}
        </main>
    )
}
// 584
// 169 - card
// 104