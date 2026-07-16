import { Certificate } from '@/src/types/certificates';

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'SEO para Iniciantes',
    educationalInstitution: 'Mirago',
    description: 'Um curso iniciante que me introduziu os fundamentos e conceitos básicos do SEO (Search Engine Optimization) pude aprender técnicas para melhorar o ranking do site no Google e aumentar o tráfego orgânico.',
    imageUrl: '/img/certificates/Mirago_SEO_para_iniciantes.jpg',
    skills: { 
      listSkill: ['Fundamentos de SEO', 'Planejamento Estratégico', 'Técnicas de Otimização', 'Pesquisa e Seleção de Palavras-chave', 'Análise Competitiva (Benchmarking)', 'Atração de Tráfego Qualificado'], 
      technologies: ['excel'], 
      technical: ['SEO'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/SEO_para_iniciantes.pdf',
      duration: '7 horas',
      date: '2024-02-05',
      level: 'Básico',
      technologies: []
    },
    goals: 'Entender como funciona o principal mecanismo de busca da atualidade: o Google. Como planejar o conteúdo do site com base nos conceitos de SEO. Aplicar as boas práticas de SEO para atrair tráfego qualificado para o site!',
    projectUrl: '',
    repoUrl: '',
    activitiesDeveloped: [],
    contentLearned: ['Termos e conceitos relacionados ao SEO', 'Como funciona a indexação e o ranqueamento do Google', 'Entender quais as regras do jogo no universo do SEO', 'Entender as etapas num projeto de SEO', 'Como fazer uma pesquisa de palavras-chave na prática', 'Criar um planejamento de SEO', 'Criar um planejamento da estrutura de um site', 'Como fazer um benchmarking em SEO'],
  },
  {
    id: 2,
    title: 'Jornada Python da Hashtag',
    educationalInstitution: 'Hashtag Treinamentos',
    description: 'Um curso iniciante em que desenvolvi 4 projetos voltados a Análise de Dados, Automação, Criação de Sites e Inteligência Artificial. Com objetivo de aprimorar meus conhecimentos e habilidades em resolver desafios, automação de tarefas maçantes e a trabalhar com  dados.',
    imageUrl: '/img/certificates/Hashtag_jornada_xpython.jpg',
    skills: { 
      technical: ['Pyautogui', 'RPA', 'Pandas', 'Plotly', 'Análise de Dados', 'Scikit-learn', 'Machine Learning', 'Streamlit', 'OpenAI', 'Chatbot'], 
      technologies: ['python'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/Hashtag_jornada_python.pdf',
      duration: '8 horas',
      date: '2024-03-07',
      level: 'Básico',
      technologies: []
    },
    goals: '',
    projectUrl: 'FALTA COLOCAR 4 PROJETOS',
    repoUrl: '',
    activitiesDeveloped: [],
    contentLearned: ['Automação de tarefas', 'Criação de gráficos e dashboards em Python', 'Treinamento e avaliação de modelos de ML'],
  },
  {
    id: 3,
    title: 'Introdução à Análise de Dados - Microsoft Power BI',
    educationalInstitution: 'Fundação Bradesco',
    description: 'Neste curso introdutório pude aprender as principais atribuições de um analista de dados, suas habilidades, tarefas e processos com os quais trabalha. Tive uma breve explanação teórica sobre a análise de dados com o uso do Microsoft Power BI para contar uma história convincente por meio de relatórios e painéis. Além da transformação de dados não relacionais em informações coerentes, visualmente imersivas e interativas.',
    imageUrl: '/img/certificates/Fundação_Bradesco_introdução_analise_de_dados.jpg',
    skills: { 
      listSkill: ['Análise de dados'], 
      technologies: ['powerbi', 'excel'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/Fundação_Bradesco_introdução_analise_de_dados.pdf',
      duration: '5 horas',
      date: '2024-02-22',
      level: 'Básico',
      technologies: []
    },
    goals: '',
    projectUrl: '',
    repoUrl: '',
    activitiesDeveloped: [],
    contentLearned: [],
  },
  {
    id: 4,
    title: 'Formação Github Certification',
    educationalInstitution: 'DIO | Codifique o seu futuro',
    description: 'Uma formação completa sobre Git e GitHub no qual pude aprender sobre como aplicar práticas de desenvolvimento modernas, controle de versão para gerenciar projetos com eficiência, colaboração e administração de projetos e do ecossistema Git e GitHub.',
    imageUrl: '/img/certificates/DIO_github_certification.jpg',
    skills: { 
      technical: ['GitHub Copilot', 'GitHub Codespaces'], 
      technologies: ['Git', 'GitHub'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/DIO_formacao_github_certification.pdf',
      duration: '10 horas',
      date: '2025-08-08',
      level: 'Básico',
      technologies: []
    },
    goals: '',
    projectUrl: '',
    repoUrl: '',
    activitiesDeveloped: [],
    contentLearned: ['Desafio de Código: Colocar em prática todo o conhecimento adquirido e testar o conhecimento na resolução de desafios.', 'Desafio de Projeto: Portfólio construído com meus projetos pessoais.'],
  },
  {
    id: 5,
    title: 'TypeScript na prática: implemente um projeto completo com TypeScript e módulos',
    educationalInstitution: 'Alura | Escola de Tecnologia Online',
    description: 'Curso de introdução aos fundamentos da linguagem Typescript em que foi desenvolvido uma aplicação para aprofundar e exemplificar estudos. A aplicação desenvolvida faz registro de transações em uma conta do Bytebank (Banco Fictício). Utilizando o formulário de novas transações, a pessoa usuária pode registrar transferências, fazer depósitos e fazer pagamentos de boleto.',
    imageUrl: '/img/certificates/TypeScript_implemente_um_projeto_completo_com_TypeScript_e_modulos.jpg',
    skills: { 
      technologies: ['typescript', 'css3', 'JSX'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/TypeScript_projeto_completo_com_TypeScript_e_módulos.pdf',
      duration: '12 horas',
      date: '2025-01-11',
      level: 'Básico',
      technologies: []
    },
    goals: '',
    projectUrl: '',
    repoUrl: '',
    activitiesDeveloped: [],
    contentLearned: ['Compreender os fundamentos e conceitos do TypeScript', 'Aprender a refatorar e melhorar o projeto usando TypeScript', 'Entender a configuração e compilação do código TypeScript', 'Explorar recursos como tipos primitivos, arrays, Type Alias e Enums', 'Organizar e dividir o projeto em módulos eficientes'],
  },
  {
    id: 6,
    title: 'TypeScript: aplicando orientação a objetos no Front-end',
    educationalInstitution: 'Alura | Escola de Tecnologia Online',
    description: 'Continuando o projeto do Bytebank (Banco Fictício). Este curso tem como foco a  aplicação e aprendizagem da orientação a objeto. No qual pude aprender sobre: Classes, Atributos, Métodos, Heranças e Decorators.',
    imageUrl: '/img/certificates/TypeScript_aplicando_orientação_a_objetos_no_FrontEnd.jpg',
    skills: { 
      technical: ['Orientação a Objetos'], 
      technologies: ['typescript'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/TypeScript_aplicando_orientação_a_objetos_no_FrontEnd.pdf',
      duration: '6 horas',
      date: '2025-01-11',
      level: 'Básico',
      technologies: []
    },
    goals: '',
    projectUrl: '',
    repoUrl: '',
    activitiesDeveloped: [],
    contentLearned: ['Compreender as características do paradigma funcional e de orientação a objetos com Typescript', 'Aprender a construir classes e métodos', 'Aprender como utilizar modificadores de acesso para melhorar a segurança do seu projeto', 'Aprender o conceito de herança para construir novas classes sem repetir código', 'Realizar a implementação de validações a partir de decorators'],
  },
  {
    id: 7,
    title: 'Contribuindo em um Projeto Open Source no GitHub',
    educationalInstitution: 'DIO | Codifique o seu futuro',
    description: 'Introdução ao fascinante universo da colaboração em código aberto. Projeto prático para treinar e desenvolver habilidades no trabalho colaborativo e da inovação contínua que o Open Source proporciona.',
    imageUrl: '/img/certificates/Contribuindo_em_um_Projeto_Open_Source.jpg',
    skills: { 
      technologies: ['Git', 'GitHub', 'Markdown'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/DIO_contribuindo_em_um_projeto_open_source_github.pdf',
      duration: '1 hora',
      date: '2024-04-17',
      level: 'Básico',
      technologies: []
    },
    goals: '',
    projectUrl: '',
    repoUrl: '',
    activitiesDeveloped: [],
    contentLearned: ['Formas de contribuir num Projeto Open Source', 'Desenvolvendo uma contribuição', 'Enviando uma contribuição'],
  },
  {
    id: 8,
    title: 'Princípios de Desenvolvimento de Software Colaborativo',
    educationalInstitution: 'DIO | Codifique o seu futuro',
    description: 'Curso focado nas práticas fundamentais de colaboração no desenvolvimento de software moderno. Abrange conceitos essenciais como controle de versão, fluxo de trabalho em equipe, revisão de código, integração contínua e documentação. O curso enfatiza boas práticas de colaboração entre desenvolvedores utilizando ferramentas amplamente adotadas no mercado.',
    imageUrl: '/img/certificates/Princípios_de_Desenvolvimento_de_Software_Colaborativo.jpg',
    skills: { 
      technical: ['CI/CD'], 
      technologies: ['Git', 'GitHub'], 
      behavioral: ['Trabalho em equipe e comunicação técnica', 'Resolução de conflitos e tomada de decisão em grupo', 'Pensamento crítico e revisão de código', 'Organização, disciplina e gestão de tarefas', 'Colaboração assíncrona em ambientes remotos'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/DIO_princípios_de_desenvolvimento_de_software_colaborativo.pdf',
      duration: '7 horas',
      date: '2024-04-17',
      level: 'Básico',
      technologies: []
    },
    goals: '',
    projectUrl: '',
    repoUrl: '',
    activitiesDeveloped: [],
    contentLearned: ['Trabalho com Git e GitHub para versionamento e colaboração em repositórios', 'Participação em code reviews e resolução de conflitos de merge', 'Criação e gerenciamento de branches e pull requests seguindo boas práticas', 'Implementação de workflows de CI/CD para automação de builds e testes', 'Escrita de documentação técnica colaborativa (READMEs, padrões, issues)', 'Desenvolvimento de projetos em equipe utilizando metodologias ágeis', 'Discussões técnicas e resolução de problemas via Issues e GitHub Projects', 'Documentação técnica colaborativa', 'Organização de repositórios e versionamento semântico'],
  },
  {
    id: 9,
    title: 'Angular: construa uma aplicação web com componentes, linguagem de template e CLI',
    educationalInstitution: 'Alura | Escola de Tecnologia Online',
    description: 'Curso introdutório que apresenta os fundamentos e como funciona o framework. Utilizando um modelo de site no Figma para construir o site Indexa, uma aplicação que lista e lida com contatos de uma agenda Introdução de como os componentes funcionam, pegar valores de inputs, evitar a repetição de código e a sintaxes de template para automatizar as tarefas do front-end.',
    imageUrl: '/img/certificates/Angular_construa_uma_aplicação_web_com_componentes_linguagem_de_template_e_CLI.jpg',
    skills: { 
      technical: ['Terminal (CLI)'], 
      technologies: ['Typescript', 'CSS'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/Angular_construa_uma_aplicação_web_com_componentes_linguagem_de_template_e_CLI.pdf',
      duration: '8 horas',
      date: '2025-01-19',
      level: 'Básico',
      technologies: []
    },
    goals: 'Ter uma aplicação que lista todos os contatos vindo de um arquivo JSON, organizado por letras do alfabeto, tudo de forma automática. Buscar e filtrar por nome usando métodos do TypeScript de manipulação de string.',
    projectUrl: '',
    repoUrl: 'https://github.com/John-o-dev/indexa-Agenda-de-Contatos',
    activitiesDeveloped: [],
    contentLearned: ['Aprender a lidar com o terminal', 'geração de componentes', 'Escrever componentes reutilizáveis', 'Utilizar a linguagem de template do Angular para controlar o fluxo dos dados com @for', 'Explorar o uso do Angular CLI para criar aplicações e componentes', 'Ler arquivos JSON em Angular e ajustar configurações no arquivo tsconfig.json para atender às necessidades do seu projeto.'],
  },
  {
    id: 10,
    title: 'Angular: evoluindo com formulários e roteamento',
    educationalInstitution: 'Alura | Escola de Tecnologia Online',
    description: 'Curso de aprofundamento nos conceitos e funcionalidades do Angular, para isso, é utilizado o site do projeto Indexa - aplicação de agenda de contatos, e implementar o formulário para inserir novos contato.',
    imageUrl: '/img/certificates/Angular_evoluindo_com_formulários_e_roteamento.jpg',
    skills: { 
      technical: ['Terminal (CLI)'], 
      technologies: ['Angular', 'Typescript', 'CSS'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/Angular_evoluindo_com_formulários_e_roteamento.pdf',
      duration: '8 horas',
      date: '2025-01-27',
      level: 'Básico',
      technologies: []
    },
    goals: 'Aprender como construir formulários reativos no Angular e como implementar validações dos campos utilizando as classes de validação do próprio Angular assim como configurar o roteamento da aplicação e navegar facilmente entre as telas.',
    projectUrl: '',
    repoUrl: 'https://github.com/John-o-dev/indexa-Agenda-de-Contatos',
    activitiesDeveloped: [],
    contentLearned: ['Formulários Reativos (FormGroup e FormControl;)', 'Validators Angular', 'Services Angular', 'Navegação com routerLink, router e navigateByUrl'],
  },
  {
    id: 11,
    title: 'Angular: comunicando-se com uma API via requisições HTTP',
    educationalInstitution: 'Alura | Escola de Tecnologia Online',
    description:
      'Curso de aprofundamento nos conceitos e funcionalidades do Angular, usando um projeto já existente, o curso aborda conceitos e uso do HttpClient do Angular para fazer requisições do tipo HTTP, utilizando os métodos GET, POST, PUT, DELETE para enviar e obter dados do servidor. Como funcionam os observables (observáveis) e o que é necessário fazer para obter informações deles.',
    imageUrl: '/img/certificates/Angular_comunicandose_com_uma_API_via_requisições_HTTP.jpg',
    skills: { 
      technical: ['HttpClient', 'CRUD', 'JSON Server', 'Terminal (CLI)'], 
      technologies: ['angular', 'typescript'],
      behavioral: ['Pensamento cógnitivo', 'Análise de dados'] },
    certificateInfo: {
      docPDF: '/pdf/certificates/Angular_comunicandose_com_uma_API_via_requisições_HTTP.pdf',
      duration: '8 horas',
      date: '2025-01-05',
      level: 'Básico',
      technologies: []
    },
    goals:
      'Aprender a utilizar o protocolo HTTP para integrar e comunicar a aplicação Angular a um back-end, utilizar boas práticas e fazer algumas melhorias no final do projeto, como a componentização e a reutilização de componentes em diferentes partes da aplicação.',
    projectUrl: 'https://project-angular-http-client.netlify.app/',
    repoUrl: 'https://github.com/repourl',
    activitiesDeveloped: [],
    contentLearned: ['Configurar o HttpClient para operações HTTP eficientes;', 'Implementar um CRUD usando métodos HTTP (GET, POST, PUT, DELETE);', 'User Observables para lidar com dados assíncronos;', 'Configurar e utilizar o JSON Server como uma API simulada;', 'Permitir a passagem de parâmetros na rota para facilitar a navegação;', 'Adaptar e integrar componentes para reutilização eficaz;', 'Promover boas práticas de componentização.'],
  },
];

export default certificates;