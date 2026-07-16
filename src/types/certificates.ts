export type Certificate = {
  id: number;
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

export type skillType = { listSkill?: string[]; technical?: string[]; technologies?: string[]; behavioral?: string[] };
export type certificateInfo = {
  docPDF: string;
  duration?: string;
  date?: string;
  level?: 'Básico' | 'Intermediário' | 'Avançado';
  technologies?: string[];
};
