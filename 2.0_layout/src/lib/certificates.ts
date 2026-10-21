import type { Certificate } from "@/types/certificates";

/**
 * DADOS DE EXEMPLO — troque pelos seus certificados.
 * Em `imagemUrl`, use um caminho de /public (ex.: "/certificados/nextjs.jpg").
 * Enquanto estiver vazio (""), o site desenha um certificado ilustrativo no lugar da imagem.
 */
export const certificates: Certificate[] = [
  {
    id: 1,
    titulo: "Next.js do Zero ao Deploy",
    instituiçãoEducacional: "DevLab Academy",
    descricao:
      "Construção de aplicações completas com Next.js: roteamento, renderização no servidor, otimização de performance e publicação em produção.",
    imagemUrl: "",
    skills: {
      technical: ["Roteamento e layouts", "SSR, SSG e ISR", "Data fetching", "Deploy contínuo"],
      technologies: ["Next.js", "React", "TypeScript", "Vercel"],
      behavioral: ["Autonomia", "Resolução de problemas"],
      listSkill: ["Performance web", "SEO técnico"],
    },
    informacoesDoCertificado: {
      documentoPDF: "/certificados/nextjs.pdf",
      duracao: "60h",
      dataConclusao: "2026-03",
      nivelDoCurso: "Avançado",
      tecnologiasLinguagensEFrameworks: ["Next.js", "React", "TypeScript", "Vercel"],
    },
    metasDoCurso:
      "Capacitar a desenvolver, otimizar e publicar aplicações web modernas com Next.js, entendendo quando usar cada estratégia de renderização.",
    projetosUrl: "https://meu-projeto-final.vercel.app",
    repositorioGithubUrl: "https://github.com/usuario/nextjs-do-zero-ao-deploy",
    atividadesDesenvolvidas: [
      "https://codesandbox.io/s/exemplo-isr",
      "https://www.figma.com/file/exemplo-wireframes",
      "https://github.com/vercel/next.js/pull/00000",
    ],
    conteudoAprendido: [
      "Fundamentos de React Server Components",
      "Pages Router vs App Router",
      "Estratégias de renderização (SSR, SSG, ISR)",
      "Otimização de imagens, fontes e scripts",
      "Rotas de API e autenticação",
      "Deploy e monitoramento",
    ],
  },
  {
    id: 2,
    titulo: "JavaScript Moderno (ES6+)",
    instituiçãoEducacional: "Instituto Código",
    descricao:
      "Do básico aos recursos modernos da linguagem: funções, módulos, assincronismo e manipulação do DOM com boas práticas.",
    imagemUrl: "",
    skills: {
      technical: ["Assincronismo com async/await", "Manipulação do DOM", "Módulos ES"],
      technologies: ["JavaScript", "Node.js"],
      behavioral: ["Organização", "Persistência"],
    },
    informacoesDoCertificado: {
      documentoPDF: "/certificados/javascript.pdf",
      duracao: "48h",
      dataConclusao: "2025-06",
      nivelDoCurso: "Intermediário",
      tecnologiasLinguagensEFrameworks: ["JavaScript", "Node.js"],
    },
    metasDoCurso:
      "Consolidar a base da linguagem e os recursos do ES6+ para escrever código limpo e reutilizável.",
    repositorioGithubUrl: "https://github.com/usuario/javascript-moderno",
    conteudoAprendido: [
      "Variáveis, escopo e closures",
      "Arrow functions e destructuring",
      "Promises e async/await",
      "Fetch API e consumo de APIs",
      "Módulos e organização de projeto",
    ],
  },
  {
    id: 3,
    titulo: "HTML & CSS Essencial",
    instituiçãoEducacional: "Escola Web",
    descricao:
      "Estrutura semântica, layouts com Flexbox e Grid, responsividade e acessibilidade desde o primeiro dia.",
    imagemUrl: "",
    skills: {
      technical: ["HTML semântico", "Flexbox e Grid", "Design responsivo"],
      technologies: ["HTML", "CSS"],
      behavioral: ["Atenção aos detalhes"],
    },
    informacoesDoCertificado: {
      documentoPDF: "/certificados/html-css.pdf",
      duracao: "40h",
      dataConclusao: "2024-11",
      nivelDoCurso: "Básico",
      tecnologiasLinguagensEFrameworks: ["HTML", "CSS"],
    },
    projetosUrl: "https://usuario.github.io/landing-page",
  },
  {
    id: 4,
    titulo: "TypeScript na Prática",
    instituiçãoEducacional: "DevLab Academy",
    descricao:
      "Tipagem estática aplicada a projetos reais: generics, utilitários de tipo e integração com React.",
    imagemUrl: "",
    skills: {
      technical: ["Tipos e interfaces", "Generics", "Utility types"],
      technologies: ["TypeScript", "React"],
      behavioral: ["Pensamento analítico", "Trabalho em equipe"],
    },
    informacoesDoCertificado: {
      documentoPDF: "/certificados/typescript.pdf",
      duracao: "32h",
      dataConclusao: "2025-10",
      nivelDoCurso: "Intermediário",
      tecnologiasLinguagensEFrameworks: ["TypeScript", "React"],
    },
    metasDoCurso:
      "Aprender a modelar dados e componentes com segurança de tipos, reduzindo bugs em tempo de desenvolvimento.",
    atividadesDesenvolvidas: [
      "https://www.typescriptlang.org/play?#code/exemplo",
      "https://excalidraw.com/#json=exemplo-diagrama",
    ],
    conteudoAprendido: [
      "Tipos primitivos, unions e intersections",
      "Generics e constraints",
      "Tipando props e hooks do React",
      "Migração gradual de JS para TS",
    ],
  },
  {
    id: 5,
    titulo: "Git & GitHub",
    instituiçãoEducacional: "Open Skills",
    descricao:
      "Controle de versão do zero: branches, pull requests, resolução de conflitos e colaboração em projetos open source.",
    imagemUrl: "",
    skills: {
      technical: ["Branches e merges", "Pull requests", "Resolução de conflitos"],
      technologies: ["Git", "GitHub"],
      behavioral: ["Colaboração", "Comunicação"],
    },
    informacoesDoCertificado: {
      documentoPDF: "/certificados/git.pdf",
      duracao: "12h",
      dataConclusao: "2024-08",
      nivelDoCurso: "Básico",
      tecnologiasLinguagensEFrameworks: ["Git", "GitHub"],
    },
    atividadesDesenvolvidas: ["https://github.com/projeto-aberto/exemplo/pull/42"],
  },
  {
    id: 6,
    titulo: "React: Hooks e Estado",
    instituiçãoEducacional: "Instituto Código",
    descricao:
      "Componentização, hooks, gerenciamento de estado e padrões para construir interfaces reutilizáveis.",
    imagemUrl: "",
    skills: {
      technical: ["Componentização", "useState e useEffect", "Context API"],
      technologies: ["React", "JavaScript"],
      behavioral: ["Criatividade"],
    },
    informacoesDoCertificado: {
      documentoPDF: "/certificados/react.pdf",
      duracao: "45h",
      dataConclusao: "2025-12",
      nivelDoCurso: "Intermediário",
      tecnologiasLinguagensEFrameworks: ["React", "JavaScript", "CSS"],
    },
    metasDoCurso:
      "Dominar os hooks e o fluxo de dados no React para criar interfaces previsíveis e fáceis de manter.",
    projetosUrl: "https://todo-react-exemplo.vercel.app",
    repositorioGithubUrl: "https://github.com/usuario/react-hooks-estado",
    conteudoAprendido: [
      "Ciclo de vida com useEffect",
      "Estado local vs global",
      "Custom hooks",
      "Memoização e performance",
    ],
  },
];
