import useTranslation from '@/src/hooks/useTranslation';
import { Fragment, useMemo, useState } from 'react';
import styles from './repos.module.css'

import { ReposProps } from '@/src/types/repos';
import { filterRepos, filterReposByTopic } from '@/src/utils/portfolioUtils';
import ReposSection from './ReposSection';

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

    const topics = [
        {
            title: "Angular",
            topic: "angular"
        },

        {
            title: "C#",
            topic: "csharp"
        },

        {
            title: "Python",
            topic: "python"
        },

        {
            title: "DB",
            topic: "db"
        }
    ];

    return (
        <main>
            <ReposSection
                title={
                    searchByName
                        ? `Resultados para "${searchByName}"`
                        : t(className, `${classComponent}_subtitle`)
                }
                section="filteredRepos"
                repos={filteredRepos as ReposProps[]}
                itemsPerPage={6}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                className={className}
                classComponent={classComponent}
            />

            <div className={styles.separator}></div>

            {topics.map(({ title, topic }) => {
                const reposByTopic = filterReposByTopic(
                    topic,
                    repos
                );

                if (!reposByTopic?.length)
                    return null;

                return (
                    <Fragment key={topic}>
                        <ReposSection
                            title={title}
                            section={topic}
                            repos={reposByTopic}
                            itemsPerPage={4}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                            className={className}
                            classComponent={classComponent}
                        />
                        <div className={styles.separator}></div>
                    </Fragment>
                );
            })}

        </main>
    )
}
