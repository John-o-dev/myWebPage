import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { routes, buildHref, isActive } from "@/lib/routes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const lang = (router.query.lang as string) ?? "pt";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Principal">

        <Link href={buildHref(lang, "")} className={styles.logo_mark}>JD</Link>

        <div
          id="menu-principal"
          className={`${styles.nav_center} ${open ? styles.nav_center_open : ""}`}
        >
          {routes.map((r) => (
            <Link
              key={r.slug}
              href={buildHref(lang, r.slug)}
              className={`${styles.nav_link} ${isActive(router.asPath, lang, r.slug) ? styles.active : ""
                }`}
            >
              {r.label}
            </Link>
          ))}
        </div>

        <div className={styles.nav_right}>
          <div className={styles.lang_toggle}>
            <button className={`${styles.lang} ${styles.active}`}>PT</button>
            <button className={styles.lang}>EN</button>
          </div>
          <button className={styles.cta_pill}>Fale comigo</button>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burger_open : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={() => setOpen((v) => !v)}
          >
            {/* O <span> é a barra do meio; as barras de cima e de baixo são ::before e ::after */}
            <span className={styles.burger_bar} />
          </button>
        </div>
      </nav>
    </header>
  )
}