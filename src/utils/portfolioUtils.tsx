import { ReposProps } from "../types/repos";

// Formata a URL da imagem do repositório
export function formatRepoImg(urlImg: string) {
    return `https://raw.githubusercontent.com/${urlImg}/refs/heads/master/thumbnail.jpg`
}

// Abre o link do GitHub Page em uma nova aba, se existir
export async function linkToGithubPage(urlPage: string) {
    const pageUrl = `https://john-o-dev.github.io/${urlPage}/`;

    try {
        const response = await fetch(pageUrl, { method: 'HEAD' });

        if (response.ok) {
            window.open(pageUrl, '_blank', 'noopener,noreferrer');
        } else {
            alert('Não possui GitHub Page!');
        }
    } catch (error) {
        alert('Não possui GitHub Page!');
    }
}

// Remove acentos
export function removerAcentos(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Remove traços
export function formatRepoName(name: string): string {
    const repoRegex = /-/g;
    return name.replace(repoRegex, ' ');
}

// Trás os repositórios filtrados pela busca
export function filterRepos(
    repos: { name: string; topics: string[] }[],
    searchByName: string,
    searchByTopic: string
) {
    return repos.filter(repo => {
        // Normaliza strings (para ignorar acentos e maiúsculas/minúsculas)
        const repoName = removerAcentos(repo.name).toLowerCase();
        const topics = repo.topics.map(t => removerAcentos(t).toLowerCase());

        const nameMatch = searchByName
            ? repoName.includes(removerAcentos(searchByName).toLowerCase())
            : true; // se o campo estiver vazio, não restringe

        const topicMatch = searchByTopic
            ? topics.some(topic => topic.includes(removerAcentos(searchByTopic).toLowerCase()))
            : true; // se não tiver select, ignora

        return nameMatch && topicMatch; // precisa passar nos dois filtros
    });
}

// Função que filtra repositórios pelo tópico
export function filterReposByTopic(
    topicParam: string,
    repos: ReposProps[],
): ReposProps[] | undefined {
    const termoNormalizado = removerAcentos(topicParam).toLowerCase();

    const results = repos.filter(repo =>
        repo.topics.some(topic =>
            removerAcentos(topic).toLowerCase().includes(termoNormalizado)
        )
    );

    if (results.length === 0) {
        return undefined;
    }

    return results;
}