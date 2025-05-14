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

  const loadUser = async () => {
    const res = await fetch(`https://api.github.com/users/John-o-dev`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'Next.js app' // opcional, mas recomendado
      }
    });

    if (!res.ok) console.log("Erro ao buscar repositórios do GitHub. res:", res);
    // if (!res.ok) throw new Error("Erro ao buscar usuário do GitHub");

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
    const res = await fetch(`https://api.github.com/users/John-o-dev/starred`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'Next.js app' // opcional, mas recomendado
      }
    });

    if (!res.ok) console.log("Erro ao buscar repositórios do GitHub. res:", res);
    // if (!res.ok) throw new Error("Erro ao buscar repositórios do GitHub");

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
        html_url,
        //revalidate: 3600, // ISR: atualiza a cada hora
      };
      console.log("OWNER: ", owner.login);
    });
    setRepos(reposData);
  }

  loadRepos();

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