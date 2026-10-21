import Link from "next/link";
import { useRouter } from "next/router";
import type { Ref } from "react";
import styles from "./navbar.module.css";
import { routes, buildHref, isActive } from "@/lib/routes";
import { author } from "@/lib/site";
import { LANGS, useLang } from "@/lib/useLang";

type Props = {
  menuOpen: boolean;
  onMenuToggle: () => void;
  burgerRef?: Ref<HTMLButtonElement>;
};

export default function Navbar({ menuOpen, onMenuToggle, burgerRef }: Props) {
  const router = useRouter();
  const { lang, langHref } = useLang();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Principal">
        <Link href={buildHref(lang, "")} className={styles.logo_mark}>
          {author.initials}
        </Link>

        {/* Desktop: links no centro (no mobile, quem assume é o SideMenu) */}
        <div className={styles.nav_center}>
          {routes.map((r) => (
            <Link
              key={r.slug}
              href={buildHref(lang, r.slug)}
              className={`${styles.nav_link} ${
                isActive(router.asPath, lang, r.slug) ? styles.active : ""
              }`}
            >
              {r.label}
            </Link>
          ))}
        </div>

        <div className={styles.nav_right}>
          <div className={styles.lang_toggle} role="group" aria-label="Idioma">
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={lang === l}
                className={`${styles.lang} ${lang === l ? styles.active : ""}`}
                onClick={() => lang !== l && router.push(langHref(l))}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link href={buildHref(lang, "contato")} className={styles.cta_pill}>
            Fale comigo
          </Link>

          {/* Mobile: hambúrguer. Barras = ::before (topo), <span> (meio) e ::after (base) */}
          <button
            ref={burgerRef}
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burger_open : ""}`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="side-menu"
            onClick={onMenuToggle}
          >
            <span className={styles.burger_bar} />
          </button>
        </div>
      </nav>
    </header>
  );
}
