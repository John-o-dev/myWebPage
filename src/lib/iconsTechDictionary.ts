import { 
  Css3, 
  TypescriptIcon,
  Javascript, 
  Python, 
  Jupyter, 
  _React, 
  Nextjs, 
  AngularIcon, 
  Postgresql, 
  Redis,
  MicrosoftWindows,
  Git,
  Github,
  GithubCopilot,
} from "@dev.icons/react";

import { Html5 } from "@dev.icons/react/mono";

export const iconsTechMap: Record<string, React.ElementType> = {
  css: Css3,
  typescript: TypescriptIcon,
  html: Html5,
  javascript: Javascript,
  python: Python,
  "jupyter notebook": Jupyter,
  react: _React,
  nextjs: Nextjs,
  angular: AngularIcon,
  postgresql: Postgresql,
  redis: Redis,
  word: MicrosoftWindows,
  excel: MicrosoftWindows,
  git: Git,
  github: Github,
  githubCopilot: GithubCopilot
};