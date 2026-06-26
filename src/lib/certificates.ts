import { Certificate } from '@/src/types/certificates';

const certificates: Certificate[] = [
  {
    id: '001',
    title: 'Angular: comunicando-se com uma API via requisições HTTP',
    educationalInstitution: 'Alura | Escola de Tecnologia Online',
    description:
      'Curso de aprofundamento nos conceitos e funcionalidades do Angular, usando um projeto já existente, o curso aborda conceitos e uso do HttpClient do Angular para fazer requisições do tipo HTTP, utilizando os métodos GET, POST, PUT, DELETE para enviar e obter dados do servidor. Como funcionam os observables (observáveis) e o que é necessário fazer para obter informações deles.',
    imageUrl: '/img/certificates/Angular_comunicandose_com_uma_API_via_requisições_HTTP.jpg',
    skills: { 
      technical: ['Typescript', 'HttpClient', 'CRUD', 'JSON Server', 'CSS', 'Terminal (CLI)'], 
      technologies: ['angular', 'typescript'],
      behavioral: ['Pensamento cógnitivo', 'Análise de dados'] },
    certificateInfo: {
      imageUrl: '/img/certificates/Angular_comunicandose_com_uma_API_via_requisições_HTTP.jpg',
      docPDF: '/pdf/certificates/Angular_comunicandose_com_uma_API_via_requisições_HTTP.pdf',
      duration: '6 horas',
      date: '2025-08-15',
      level: 'Básico',
      technologies: ['Angular', 'TypeScript', 'HTTP']
    },
    goals:
      'Aprender a utilizar o protocolo HTTP para integrar e comunicar a aplicação Angular a um back-end, utilizar boas práticas e fazer algumas melhorias no final do projeto, como a componentização e a reutilização de componentes em diferentes partes da aplicação.',
    projectUrl: 'https://project-angular-http-client.netlify.app/',
    repoUrl: 'https://github.com/repourl',
    activitiesDeveloped: ['Configurar o HttpClient para operações HTTP eficientes;', 'Implementar um CRUD usando métodos HTTP (GET, POST, PUT, DELETE);', 'User Observables para lidar com dados assíncronos;', 'Configurar e utilizar o JSON Server como uma API simulada;', 'Permitir a passagem de parâmetros na rota para facilitar a navegação;', 'Adaptar e integrar componentes para reutilização eficaz;', 'Promover boas práticas de componentização.'],
    contentLearned: ['Configuração', 'HttpClient'],
  },
];

export default certificates;