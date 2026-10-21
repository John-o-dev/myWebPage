import { useRouter } from "next/router";
import type { NextRouter } from "next/router";
import type { UrlObject } from "url";

export type Url = Parameters<NextRouter["push"]>[0];
export const LANGS = ["pt", "en"] as const;

export function useLang() {
  const router = useRouter();
  const lang = (router.query.lang as string) ?? "pt";

  /** URL da página atual no outro idioma */
  const langHref = (l: string): UrlObject => ({
    pathname: router.pathname,
    query: { ...router.query, lang: l },
  });

  return { lang, langHref };
}
