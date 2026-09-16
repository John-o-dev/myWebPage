import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import GithubPerfil from './GithubPerfil'
import Repos from './Repos'
import Filters from './Filters'
import LastProjects from './LastProjects'

import { UserProps } from "@/src/types/user";
import { ReposProps } from "@/src/types/repos";

import useTranslation from "@/src/hooks/useTranslation";

interface PortfolioProps {
  user: UserProps | null;
  repos: ReposProps[];
}

export default function Portfolio({ user, repos }: PortfolioProps) {
  const [searchByName, setSearchByName] = useState("");
  const [searchByTopic, setSearchByTopic] = useState("");
  const className = "portfolio";
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (typeof router.query.topic === "string") {
      setSearchByTopic(router.query.topic);
    }
  }, [router.query.topic]);

  return (
    <article>
      <header>
        <h3 className="article_title">{t(className, 'title_header')}</h3>
      </header>

      {user && <GithubPerfil {...user} />}

      {repos.length > 0 && <LastProjects repos={repos.slice(0, 10)} />}

      <div className="separator"></div>

      <section className="projects">
        {repos.length > 0 && <Filters
          repos={repos}
          searchByName={searchByName}
          searchByTopic={searchByTopic}
          setSearchByName={setSearchByName}
          setSearchByTopic={setSearchByTopic} />}
        {repos.length > 0 && <Repos
          repos={repos}
          searchByName={searchByName}
          searchByTopic={searchByTopic} />}
      </section>
    </article>
  )
}