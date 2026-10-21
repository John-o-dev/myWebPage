export type RouteIcon = "home" | "user" | "briefcase" | "pen" | "mail";

export type Route = {
  slug: string;
  label: string;
  title: string;
  /** Descrição curta exibida no menu lateral (mobile) */
  desc: string;
  icon: RouteIcon;
};

export const routes: Route[] = [
  { slug: "",          label: "Início",    title: "Início",    desc: "Visão geral",      icon: "home" },
  { slug: "perfil",    label: "Perfil",    title: "Perfil",    desc: "Quem sou eu",      icon: "user" },
  { slug: "portfolio", label: "Portfólio", title: "Portfólio", desc: "Projetos e cases", icon: "briefcase" },
  { slug: "blog",      label: "Blog",      title: "Blog",      desc: "Artigos e notas",  icon: "pen" },
  { slug: "contato",   label: "Contato",   title: "Contato",   desc: "Vamos conversar",  icon: "mail" },
];

export function buildHref(lang: string, slug: string) {
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export function isActive(asPath: string, lang: string, slug: string) {
  const path = asPath.split(/[?#]/)[0].replace(/\/$/, "") || "/";
  const href = buildHref(lang, slug);
  return slug === ""
    ? path === href
    : path === href || path.startsWith(`${href}/`);
}
