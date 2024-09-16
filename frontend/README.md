<p align="center">
    <img alt="Logo" title="Logo" src="public/svg/logo.svg" width="150px" style="display: block; margin: auto" />
    <h1 align="center" style="margin: 0;">
        <span style="display: block;">
        Next INTL
        </span>
    </h1>
</p>

<p align="center">
    <img src="https://img.shields.io/github/languages/count/elvessousa/next-intl"> 
<img src="https://img.shields.io/github/repo-size/elvessousa/next-intl">
</p>

## About

![Screenshot](.github/screenshot.png)

Site made to showcase the creation of a bilingual website using Next.js. The tutorial is in an article on my blog. Feel free to view
the source code, fork it, or even use it in your projects.

---

## Packages used

This project was developed using the packages below:

- gray-matter
- remark
- remark-html

These are for parsing markdown as HTML.

---

## How to contribute

- Fork this repo
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your modifications: `git commit -m 'feat: My new feature'`;
- Push it to your branch: `git push origin my-feature`.

## Diretórios

Assim esta a estrutura de diretórios e arquivos do projeto:

- content: aqui ficarão as pastas e os arquivos para a tradução do conteúdo do site (arquivos .md)
- public: esta pasta é usada por padrão pelo Next.js para os arquivos públicos: imagens, ícones, etc.
Dentro de src:
- components: componentes do React.
- contexts: "Contexto" para os idiomas. No React existem os chamados contextos, que são informações de estado que ficam disponíveis para toda a aplicação. Sem eles toda a informação tem de ser passada via propriedade para cada componente que a usa, o que pode atrapalhar o desenvolvimento caso existam muitos níveis. O ideal é que o idioma esteja disponível para todo o projeto, globalmente.
- hooks: ?
- lib: neste diretório ficará o script para a ler os arquivos *.md e que disponibiliza as informações para uso nas páginas.
- pages: o Next.js utiliza esta pasta como as rotas para a aplicação. O arquivo teste.tsx fica disponível como http://localhost:3000/teste
- styles: estilos para a página.

/lib/strings.ts
- Dicionário: termos para tradução. Para a tradução, o primeiro arquivo que iremos criar é o que possui os termos a serem traduzidos no site. Encare este arquivo como se fosse uma espécie de dicionário: basta fazer uma referência ao verbete para ter o significado. A mecânica é essa.

/contexts/LanguageContext.tsx
- No React existem os chamados contextos, que são informações de estado que ficam disponíveis para toda a aplicação. Sem eles toda a informação tem de ser passada via propriedade para cada componente que a usa, o que pode atrapalhar o desenvolvimento caso existam muitos níveis. O ideal é que o idioma esteja disponível para todo o projeto, globalmente. Para isso um contexto deve ser criado. Abaixo, o código que usei para a criação dele:

/pages/_app.tsx
- Este arquivo é especial, ele não vira uma página, mas afeta todo o site. O Next o entende como o ponto de entrada para a aplicação React e o que for informado aqui está disponível globalmente. Nele adicionamos o contexto de idiomas criado, importando o componente <LanguageProvider /> criado e envolvendo o componente principal da aplicação com ele. Só a partir deste passo que o contexto estará disponível para as páginas e componentes.

/hooks/useTranslation.tsx
- "Hook" personalizado para a tradução. Como nenhuma biblioteca de tradução está sendo usada neste projeto, para facilitar a utilização dos termos traduzido, foi criado um "hook", uma função gancho personalizada chamada useTranslation. No React, coloca-se a palavra "use" antes, é uma convenção.