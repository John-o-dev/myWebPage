import { UserProps } from "@/src/types/user";
import { ReposProps } from "@/src/types/repos";

import { useEffect, useState } from "react";

import GithubPerfil from './GithubPerfil'
import Repos from './Repos'
import Filters from './Filters'
import LastProjects from './LastProjects'
import useTranslation from "@/src/hooks/useTranslation";
import { responseLinguist } from "@/src/utils/responseLinguist";

export default function Portfolio() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState<ReposProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchRepos, setSearchRepos] = useState("");
  const className = "portfolio";
  const { t } = useTranslation();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/John-o-dev`);

        if (!res.ok) {
          console.log("Erro ao buscar usuário do GitHub:", res);
          return;
        }

        const data = await res.json();

        const { html_url, avatar_url, login, name, location, followers, following, public_repos } = data;
        const userData: UserProps = {
          html_url,
          avatar_url,
          login,
          name,
          location,
          followers,
          following,
          public_repos
        };
        setUser(userData);
      } catch (error) {
        console.log("Erro ao buscar usuário do GitHub. error:", error);
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/John-o-dev/starred`);

        if (!res.ok) {
          console.log("Erro ao buscar repositórios do GitHub:", res);
          return;
        }

        const data = await res.json();

        const filteredData = data.filter((repo: any) => {
          return repo.owner.login === 'John-o-dev';
        });

        const reposData: ReposProps[] = filteredData.map((repo: any) => {
          const {
            name,
            full_name,
            created_at,
            updated_at,
            pushed_at,
            languages_url,
            description,
            html_url,
            topics
          } = repo;

          return {
            name,
            full_name,
            created_at,
            updated_at,
            pushed_at,
            languages_url,
            description,
            html_url,
            topics
          };

        });

        const reposComLinguagens = await Promise.all(
          filteredData.map(async (repo: any) => {
            const linguagens = await responseLinguist(repo.languages_url);
            return { ...repo, linguagens }; // adiciona o campo linguagens
          })
        );

        const sortedRepos = reposComLinguagens.sort((a, b) => {
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });

        setRepos(sortedRepos);
      } catch (error) {
        console.log("Erro ao buscar repositório do GitHub. error:", error);
      }
    };

    loadRepos();
  }, []);

  return (
    <article>

      <header>
        <h2 className="article_title">{t(className, 'title_header')}</h2>
      </header>

      {user && <GithubPerfil {...user} />}

      {repos.length > 0 && <LastProjects repos={repos.slice(0, 10)} />}

      <div className="separator"></div>

      <section className="projects">
        {repos.length > 0 && <Filters repos={repos} searchRepos={searchRepos} setSearchRepos={setSearchRepos}/>}
        {repos.length > 0 && <Repos repos={repos} searchRepos={searchRepos} />}
      </section>
    </article>
  )
}