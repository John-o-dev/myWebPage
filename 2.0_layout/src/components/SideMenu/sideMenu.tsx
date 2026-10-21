import { CSSProperties, MouseEvent, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./SideMenu.module.css";
import { routes, buildHref, isActive } from "@/lib/routes";
import { author } from "@/lib/site";
import { LANGS, useLang } from "@/lib/useLang";
import type { Url } from "@/lib/useLang";
import { ChevronLeft, ChevronRight, Icon, PersonIcon } from "../Icons/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  /** Fecha o menu e navega depois da animação */
  onNavigate: (url: Url) => void;
};

/** Usa a variável CSS --d como atraso da animação de entrada de cada bloco */
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default function SideMenu({ open, onClose, onNavigate }: Props) {
  const router = useRouter();
  const { lang, langHref } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);

  const activeIndex = routes.findIndex((r) =>
    isActive(router.asPath, lang, r.slug)
  );

  // Ao abrir, leva o foco para o botão de recolher
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 60);
    return () => clearTimeout(t);
  }, [open]);

  // Clique normal -> animação de saída e depois navega.
  // Ctrl/Cmd/Shift/botão do meio continuam abrindo em nova aba normalmente.
  const go = (e: MouseEvent, url: Url) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(url);
  };

  return (
    <aside
      id="side-menu"
      className={`${styles.root} ${open ? styles.root_open : ""}`}
      aria-label="Menu principal"
    >
      <div className={`${styles.orb} ${styles.o1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.o2}`} aria-hidden="true" />

      <div className={styles.panel}>
        {/* Topo: seta de recolher + logo */}
        <div className={`${styles.top} ${styles.reveal}`} style={delay(0.12)}>
          <button
            ref={closeRef}
            type="button"
            className={styles.collapse}
            aria-label="Recolher menu"
            onClick={onClose}
          >
            <ChevronLeft />
          </button>
          <Link
            href={buildHref(lang, "")}
            className={styles.logo}
            aria-label="Início"
            onClick={(e) => go(e, buildHref(lang, ""))}
          >
            {author.initials}
          </Link>
        </div>

        {/* Autor */}
        <div className={`${styles.profile} ${styles.reveal}`} style={delay(0.2)}>
          <div className={styles.avatar}>
            <div className={styles.ring} />
            <div className={styles.avatar_in}>
              {author.photo ? (
                <Image
                  src={author.photo}
                  alt={author.name}
                  width={70}
                  height={70}
                  className={styles.avatar_img}
                />
              ) : (
                <PersonIcon />
              )}
            </div>
          </div>
          <div className={styles.name}>{author.name}</div>
          <div className={styles.role}>{author.role}</div>
        </div>

        {/* Seções */}
        <nav
          className={styles.list}
          aria-label="Seções do site"
          style={{ "--i": Math.max(activeIndex, 0) } as CSSProperties}
        >
          <div
            className={`${styles.pill} ${activeIndex < 0 ? styles.pill_hidden : ""}`}
            aria-hidden="true"
          />
          {routes.map((r, i) => {
            const href = buildHref(lang, r.slug);
            const on = i === activeIndex;
            return (
              <div
                key={r.slug}
                className={`${styles.row} ${styles.reveal}`}
                style={delay(0.28 + i * 0.07)}
              >
                <Link
                  href={href}
                  className={`${styles.item} ${on ? styles.item_active : ""}`}
                  aria-current={on ? "page" : undefined}
                  onClick={(e) => go(e, href)}
                >
                  <span className={styles.ibox}>
                    <Icon name={r.icon} />
                  </span>
                  <span className={styles.texts}>
                    <span className={styles.label}>{r.label}</span>
                    <span className={styles.desc}>{r.desc}</span>
                  </span>
                  <span className={styles.chev}>
                    <ChevronRight />
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Rodapé: idioma + CTA */}
        <div className={`${styles.foot} ${styles.reveal}`} style={delay(0.62)}>
          <div className={styles.lang} role="group" aria-label="Idioma">
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={lang === l}
                className={lang === l ? styles.lang_on : ""}
                onClick={() => lang !== l && onNavigate(langHref(l))}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link
            href={buildHref(lang, "contato")}
            className={styles.cta}
            onClick={(e) => go(e, buildHref(lang, "contato"))}
          >
            Fale comigo
          </Link>
        </div>
      </div>
    </aside>
  );
}
