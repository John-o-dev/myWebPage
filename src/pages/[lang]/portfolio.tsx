import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout'
import Portfolio from '@/src/components/Portfolio';
import useTranslation from '../../hooks/useTranslation'
import { ReposProps } from '@/src/types/repos';
import { UserProps } from '@/src/types/user';
import { getLanguagesUrl } from '@/src/utils/getLanguagesUrl';

interface PortfolioPageProps {
    user: UserProps | null;
    repos: ReposProps[];
}

type LangStats = Record<string, number>;

export default function PortfolioPage({ user, repos }: PortfolioPageProps) {
    const { t } = useTranslation();

    return (
        <Layout title={t('portfolio', 'title')}>
            <Portfolio user={user} repos={repos} />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { lang: 'pt' } },
            { params: { lang: 'en' } },
            // adicione aqui todos os idiomas que seu site suporta
        ],
        fallback: false, // ou 'blocking' se quiser gerar sob demanda idiomas não listados
    };
};

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
    const headers = {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
    };

    let user: UserProps | null = null;
    let repos: ReposProps[] = [];

    try {

        const userRes = await fetch(`https://api.github.com/users/John-o-dev`, { headers });

        if (userRes.ok) {
            const data = await userRes.json();
            const { html_url, avatar_url, login, name, location, followers, following, public_repos } = data;
            user = { html_url, avatar_url, login, name, location, followers, following, public_repos };
        } else {
            console.error(`Erro ao buscar usuário: status ${userRes.status}`);
        }

        // 2. Buscar todos os starred repos
        const allRepos: ReposProps[] = [];
        let page = 1;
        const perPage = 100;

        while (true) {

            const reposRes = await fetch(
                `https://api.github.com/users/John-o-dev/starred?per_page=${perPage}&page=${page}`,
                { headers }
            );

            if (!reposRes.ok) {
                console.error(`Erro ao buscar página ${page}: status ${reposRes.status}`);
                break;
            }

            const data: ReposProps[] = await reposRes.json();
            if (data.length === 0) break;

            allRepos.push(...data);

            if (data.length < perPage) break;
            page++;
        }

        const filteredData = allRepos.filter(
            (repo) => repo.owner?.login === 'John-o-dev'
        );

        const reposComLinguagens = await Promise.all(
            filteredData.map(async (repo) => {
                try {
                    const response = await fetch(repo.languages_url, { headers });

                    if (!response.ok) {
                        throw new Error(
                            `Erro HTTP( ${response.status} ) ao buscar linguagens do repositório ${repo.name}`
                        );
                    }

                    const data: LangStats = await response.json();
                    const linguagens = getLanguagesUrl(data);

                    return {
                        ...repo,
                        linguagens,
                    };
                } catch (error) {
                    console.error(
                        `Erro ao buscar linguagens do repositório ${repo.name}:`,
                        error
                    );

                    return {
                        ...repo,
                        linguagens: [],
                    };
                }
            })
        );

        repos = reposComLinguagens.sort(
            (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
    } catch (error) {
        console.error("Erro ao buscar dados do GitHub durante build/revalidate:", error);
        // Não relança o erro: prefere renderizar a página com listas vazias
        // a derrubar o build inteiro
    }

    return {
        props: { user, repos },
        revalidate: 3600,
    };
};