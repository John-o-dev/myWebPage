export const routes = [
  { slug: "",          label: "Início",    title: "Início" },
  { slug: "perfil",    label: "Perfil",    title: "Perfil" },
  { slug: "portfolio", label: "Portfólio", title: "Portfólio" },
  { slug: "blog",      label: "Blog",      title: "Blog" },
  { slug: "contato",   label: "Contato",   title: "Contato" },
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