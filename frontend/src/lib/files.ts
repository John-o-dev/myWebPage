import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Diretório usado para ler os arquivos markdown posts
const postsDirectory = path.resolve(process.cwd(), 'content', 'posts');
// Diretório usado para ler os arquivos markdown pages
const pagesDirectory = path.resolve(process.cwd(), 'content', 'pages');

// Retorna uma lista com os arquivos nos diretórios e
// subdiretórios como ['en/filename.md']
// Get all filenames in posts directory as ['en/filename.md']
/*
  NO MEU ENTENDIMENTO:
  É UMA FUNÇÃO RECURSIVA, EM QUE AO SER CHAMADA, PASSANDO UM CAMINHO DE DIRETÓRIO (postsDirectory, pagesDirectory) IRA ENTRAR NO DIRETÓRIO E SUBDIRETÓRIOS (por isso recursiva), CASO EXISTA, ATÉ CHEGAR NO ARQUIVO, RETORNANDO O CAMINHO DESSE ARQUIVO.
  A FUNÇÃO RETORNA UMA LISTA FILTRADA APENAS DOS ARQUIVOS QUE TENHAM .md
*/
export function getAllFileNames(directoryPath: string, filesList = []) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {  // checa se é diretório, caso for chama a função recursiva novamente
      filesList = getAllFileNames(`${directoryPath}/${file}`, filesList);
    } else {
      const pathSegments = path.join(directoryPath).split(path.sep);
      const penultimateDir = pathSegments[pathSegments.length - 2];
      filesList.push(path.join(penultimateDir, path.basename(directoryPath), '/', file));
    }
  });

  // Filtro para incluir somente arquivos *.md
  // Se não usar isto, vem até .DS_Stores
  const filteredList = filesList.filter((file) => file.includes('.md'));
  return filteredList;
}

// Coleta as informações dos arquivos e os ordena por data
// Sorts posts by date
export function getSortedPostData() {
  // Pega a lista de arquivos *.md no diretório de posts
  const fileNames = getAllFileNames(postsDirectory);
  // Usa o gray-matter para coletar as informações do arquivo
  const allPostsData = fileNames.map((fileName) => {
    //Separa "en\\english.md" em ["en", "english.md"] e em seguida ficando apenas "english"
    const parts = fileName.split("\\");
    const id = parts[2] ? parts[2].replace(/\.md$/, '') : '';
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const frontMatter: GrayMatterFile<string> = matter(fileContents);

    return {
      id,
      ...(frontMatter.data as {
        lang: string;
        date: string;
        category: string;
      }),
    };
  });

  // Ordena as informações coletadas por data
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Separa o nome dos arquivos e do idioma.
// Get IDs for posts
export function getAllIds(type = 'post') {
  const dir = type === 'page' ? pagesDirectory : postsDirectory;
  // Pega a lista de arquivos *.md no diretório de posts
  const fileNames = getAllFileNames(dir);
  // Separa as partes "en" e "filename" de cada ['en/filename.md']
  // e retorna-os como parâmetros para uso posterior no Next
  return fileNames.map((fileName) => {
    const parts = fileName.split("\\");
    const id = parts[2] ? parts[2].replace(/\.md$/, '') : '';
    const lang = parts[1] || '';
    return {
      params: {
        id,
        lang,
      },
    };
  });
}

// Disponibiliza os dados para o post informado.
export async function getContentData(id: string, type = 'post') {
  const dir = type === 'page' ? pagesDirectory : postsDirectory;
  const fullPath = path.join(dir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const frontMatter = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(frontMatter.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    ...(frontMatter.data as { date: string; title: string }),
    contentHtml,
  };
}
