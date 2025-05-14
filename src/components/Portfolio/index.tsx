import { UserProps } from "@/src/types/user";
import { ReposProps } from "@/src/types/repos";

import { useState } from "react";

import GithubPerfil from './GithubPerfil'
import Repos from './Repos'
import Filters from './Filters'
import LastProjects from './LastProjects'

export default function Portfolio() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState<ReposProps[]>([]);
  const [loading, setLoading] = useState(true);
  // const [repos, setRepos] = useState<ReposProps[]>([]);

  const loadUser = async () => {
    const res = await fetch(`https://api.github.com/users/John-o-dev`);
    const data = await res.json();

    const { avatar_url, login, location, html_url, followers, following, public_repos } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      html_url,
      followers,
      following,
      public_repos
    };
    setUser(userData);
  }

  loadUser();

  const loadRepos = async () => {
    const res = await fetch(`https://api.github.com/users/John-o-dev/starred`);
    const data = await res.json();

    const reposData: ReposProps[] = data.map((repo: any) => {
      const { owner, name, created_at, updated_at, pushed_at, languages_url, description, html_url } = repo;
      return {
        owner,
        name,
        created_at,
        updated_at,
        pushed_at,
        languages_url,
        description,
        html_url
      };
    });
    setRepos(reposData);
  }

  loadRepos();
  console.log("REPOSITÓRIOS", repos);
  return (
    <article className="portfolio">

      <header>
        <h2 className="article_title">Portfólio</h2>
      </header>

      {user && <GithubPerfil {...user} />}

      <LastProjects />

      <div className="separator"></div>

      <section className="projects">
        <Filters />
        <Repos />
      </section>
    </article>
  )
}