export type Certificate = {
  id: string;
  title: string;
  educationalInstitution: string;
  description: string;
  imageUrl: string;
  skills: skillType;
  certificateInfo: certificateInfo;
  goals?: string;
  projectUrl?: string;
  repoUrl?: string;
  activitiesDeveloped?: string[];
  contentLearned?: string[];
};

export type skillType = string[] | { technical?: string[]; technologies?: string[]; behavioral?: string[] };
export type certificateInfo = {
  imageUrl: string;
  docPDF: string;
  duration?: string;
  date?: string;
  level?: 'Básico' | 'Intermediário' | 'Avançado';
  technologies?: string[];
};
