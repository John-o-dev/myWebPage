export type NivelDoCurso = "Básico" | "Intermediário" | "Avançado";

export type skillType = {
  listSkill?: string[];
  technical?: string[];
  technologies?: string[];
  behavioral?: string[];
};

export type certificateInfo = {
  /** Link para baixar o PDF do certificado */
  documentoPDF: string;
  duracao?: string; // ex.: "60h"
  dataConclusao?: string; // "AAAA-MM" ou "AAAA-MM-DD"
  nivelDoCurso?: NivelDoCurso;
  tecnologiasLinguagensEFrameworks?: string[];
};

export type Certificate = {
  id: number;
  titulo: string;
  instituiçãoEducacional: string;
  descricao: string;
  imagemUrl: string;
  skills: skillType;
  informacoesDoCertificado: certificateInfo;
  /** O que o curso busca ensinar */
  metasDoCurso?: string;
  /** Projeto final do curso (GitHub Pages, Vercel...) */
  projetosUrl?: string;
  repositorioGithubUrl?: string;
  /** Links: diagramas, códigos em plataformas online, contribuições open source... */
  atividadesDesenvolvidas?: string[];
  /** Roadmap do curso (o que não entra nas habilidades) */
  conteudoAprendido?: string[];
};
