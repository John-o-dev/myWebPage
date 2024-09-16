/*
  PÁGINA QUE LISTA OS ARTIGOS
*/
import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

import Layout from '../../components/Layout';
// Importação da função que lista os artigos por data
import { getSortedPostData } from '../../lib/files';
import useTranslation from '../../hooks/useTranslation';

type PostsPageProps = {
  locale: string;
  allPostsData: {
    date: string;
    title: string;
    lang: string;
    description: string;
    id: any;
  }[];
};

export default function PostsPage({ locale, allPostsData }: PostsPageProps) {
  const { t } = useTranslation();

  // Artigos filtrados por idioma
  const postsData = allPostsData.filter((post) => post.lang === locale);

  // Paginação
  const postsPerPage = 10;
  const numPages = Math.ceil(postsData.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pagedPosts = postsData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <Layout className="posts" title={t('articles')}>
      <section className="page-content">
        <h1>{t('articles')}</h1>
        {/* Listagem dos artigos */}
        {pagedPosts.map((post) => (
          <article key={post.id} className="post">
            <Link href={`/[lang]/post/[id]`} as={`/${locale}/post/${post.id}`}>
              <a>
                <h3>{post.title}</h3>
              </a>
            </Link>
            <time>
              {/* Opções de exibição da data */}
              {new Date(post.date).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}

        {/* Área de paginação */}
        {numPages > 1 && (
          <div className="pagination">
            {Array.from({ length: numPages }, (_, i) => (
              <button
                key={`pagination-number${i + 1}`}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

// Captura as informações necessárias para a página estática
export const getStaticProps: GetStaticProps = async (ctx) => {

  // Todos os artigos do site
  const allPostsData = getSortedPostData();

  // Retorna as propriedades usadas no componente principal: a página
  return {
    props: {
      locale: ctx.params?.lang || 'pt', // Captura o idioma do [lang]
      allPostsData,
    },
  };
};

// Gera o arquivos estáticos na exportação
export const getStaticPaths: GetStaticPaths = async () => {
  // Todos os idiomas suportados devem estar listados em paths.
  // Caso não for informado, a página não será gerada.
  return {
    paths: [{ params: { lang: 'en' } }, { params: { lang: 'pt' } }],
    fallback: false,
  };
};
