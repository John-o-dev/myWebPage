/*
  Arquivo que gera rota dinâmica e lê para cada arquivo em posts

  Criar outro arquivo para quando for listar os projetos do github
*/
/* - getAllIds: Pega o id do arquivo, ou seja, o nome do arquivo 
    markdown sem a extensão *.md
   - getContentData: Coleta a informação de um único artigo pelo id informado.
*/
import { GetStaticProps, GetStaticPaths } from 'next';

import { getAllIds, getContentData } from '../../../lib/files';
import Layout from '../../../components/Layout';

type PostProps = {
  locale: string;
  postData: {
    lang: string;
    title: string;
    slug: string;
    date: string;
    category: string;
    contentHtml: string;
  };
};

export default function Post({ postData }: PostProps) {
  const { title, contentHtml } = postData;

  return (
    <Layout title={title}>
      <article className="post-content">
        <h1>{title}</h1>
        <div
          className="post-text"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </Layout>
  );
}

// Como na página de listagem, passa a informação capturada para as propriedades da página
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Coleta os dados do post "en/filename"
  const postData = await getContentData(`/${params.lang}/${params.id}`);

  return {
    props: {
      locale: params?.lang || 'pt', // Captura a [lang] da URL
      postData,
    },
  };
};

// Usa a getAllPostIds para informar quais páginas a serem geradas na exportação para arquivos estáticos.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds();

  return {
    paths,
    fallback: false,
  };
};
