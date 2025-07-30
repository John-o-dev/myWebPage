# 🌐 Portfólio de John O'Dev

Bem-vindo ao repositório do meu portfólio pessoal! Este projeto foi criado para apresentar meus projetos, experiências e formas de contato de maneira moderna, responsiva e multilíngue.

![Preview do Portfólio](./screenshot.png) <!-- Substitua por uma imagem real do seu site -->

## 🔗 Site em produção
Link

## ✨ Funcionalidades

- 🌍 **Site Multilíngue**  
  Suporte para múltiplos idiomas, permitindo alcance global e navegação acessível.

- 💼 **Integração com a API do GitHub**  
  Exibe dinamicamente meus repositórios públicos diretamente da minha conta GitHub.

- 📬 **Formulário de Contato via EmailJS**  
  Permite que visitantes enviem mensagens diretamente do site, sem necessidade de backend.

- 📱 **Responsividade Completa**  
  Totalmente adaptado para diferentes tamanhos de tela: mobile, tablet e desktop.

- ⚙️ **Desempenho e Acessibilidade**  
  Estrutura otimizada para SEO, carregamento rápido e boas práticas de acessibilidade.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) — Framework React para aplicações rápidas e otimizadas
- [TypeScript](https://www.typescriptlang.org/)
- [EmailJS](https://www.emailjs.com/)
- [GitHub REST API](https://docs.github.com/en/rest)
- [i18next](https://www.i18next.com/) — Internacionalização

## 🧪 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Instale as dependências
npm install

# Crie um arquivo .env.local com suas chaves de API
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```
Abra http://localhost:3000 no navegador para ver o resultado.

🔐 Variáveis de Ambiente
Crie um arquivo .env.local com as seguintes variáveis:

```bash
env
Copiar
Editar
NEXT_PUBLIC_EMAILJS_USER_ID=xxxxx
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxxxx
NEXT_PUBLIC_GITHUB_USERNAME=johnodev
```
⚠️ Será necessário criar um conta no site do EmailJS <br/>
⚠️ Nunca compartilhe essas chaves publicamente.

## 📄 Licença <br/>
Este projeto está licenciado sob a MIT License.

## 📫 Contato <br/>
- Facebook
- LinkedIn
- Instagram
- X

## 📁 Diretórios
Assim esta a estrutura de diretórios e arquivos do projeto:

- content: aqui ficarão as pastas e os arquivos para a tradução do conteúdo do site (arquivos .md)
- public: esta pasta é usada por padrão pelo Next.js para os arquivos públicos: imagens, ícones, etc. Dentro de src:
- components: componentes do React.
- contexts: "Contexto" para os idiomas. No React existem os chamados contextos, que são informações de estado que ficam disponíveis para toda a aplicação. Sem eles toda a informação tem de ser passada via propriedade para cada componente que a usa, o que pode atrapalhar o desenvolvimento caso existam muitos níveis. O ideal é que o idioma esteja disponível para todo o projeto, globalmente.
- hooks: hook para tradução das páginas. Adicionamos o contexto de idiomas criado
  - "Hook" personalizado para a tradução. Como nenhuma biblioteca de tradução está sendo usada neste projeto, para facilitar a utilização dos termos traduzido, foi criado um "hook", uma função gancho personalizada chamada useTranslation.
- lib: neste diretório ficará o script para a ler os arquivos *.md e que disponibiliza as informações para uso nas páginas.
- pages: o Next.js utiliza esta pasta como as rotas para a aplicação. O arquivo teste.tsx fica disponível como http://localhost:3000/teste
- styles: estilos globais para as página.

- Dicionário: Termos para a tradução. Encare este arquivo como se fosse uma espécie de dicionário: basta fazer uma referência ao verbete para ter o significado. A mecânica é essa.
/contexts/LanguageContext.tsx

- No React existem os chamados contextos, que são informações de estado que ficam disponíveis para toda a aplicação. Sem eles toda a informação tem de ser passada via propriedade para cada componente que a usa, o que pode atrapalhar o desenvolvimento caso existam muitos níveis. O ideal é que o idioma esteja disponível para todo o projeto, globalmente. 

