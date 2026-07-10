export interface LanguageMeta {
  name: string;
  bytes: number;
  percent: number;
  color: string | null;
  icon: string | null;
}

export type ReposProps = {
    name: string;
    full_name: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    languages_url: string;
    description: string;
    html_url: string;
    topics: string[];
    linguagens?: LanguageMeta[];
}

/*

"name": "webpage-Multi-Language";
"created_at": "2024-04-17T23:53:36Z";
"updated_at": "2024-04-17T23:53:36Z";
"pushed_at": "2024-04-18T00:37:48Z";
"languages_url": "https://api.github.com/repos/John-o-dev/dio-lab-open-source/languages";
"description": "Uma simples Webpage multi-idiomas feito utilizando apenas HTML CSS e jQuery";
"html_url": "https://github.com/John-o-dev/webpage-Multi-Language";


titulo
criado_em
atualizado_em
enviado em
linguagens
descrição
link_github
imagem
link_github_page

------------------------------------------------------------------------

IMAGEM:

https://raw.githubusercontent.com/John-o-dev/webpage-Multi-Language/refs/heads/master/thumbnail.jpeg
https://raw.githubusercontent.com/John-o-dev/Netflix-Clone/refs/heads/master/thumbnail.png xx

https://raw.githubusercontent.com/John-o-dev/Netflix-Clone/refs/heads/master/thumbnail.jpg
https://raw.githubusercontent.com/John-o-dev/Indexa-Agenda-de-Contatos/refs/heads/master/thumbnail.jpg

Como formar o link para a imagem:
"https://raw.githubusercontent.com/"
+
"full_name": "John-o-dev/webpage-Multi-Language"
"full_name": "John-o-dev/Netflix-Clone"
+
"/refs/heads/master/thumbnail.jpeg"
Obs.: Todas as imagens terão que ter o nome padrão thumbnail.jpeg

------------------------------------------------------------------------

GITHUB PAGE:

https://john-o-dev.github.io/webpage-Multi-Language/

Como formar o link para o github page:
"https://john-o-dev.github.io/"
+
"name": "webpage-Multi-Language"
+
/

*/