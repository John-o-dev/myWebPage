import { CSSProperties, KeyboardEvent, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { hostOf, pathOf, skillGroups } from "@/utils/certificates";
import type { CertView } from "@/utils/certificates";
import { cx } from "@/utils/cx";
import { Icon } from "@/utils/certificatesIcons";
import CertificateArt from "../CertificateImage/certificateImage";
import styles from "./certificateModal.module.css";

type TabKey = "overview" | "skills" | "roadmap" | "links";

type Props = {
  open: boolean;
  current: CertView;
  /** posição (1-based) e total na lista de navegação */
  position: number;
  total: number;
  onClose: () => void;
  onStep: (delta: number) => void;
};

const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

export default function CertificateModal({ open, current: v, position, total, onClose, onStep }: Props) {
  const uid = useId();
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState<TabKey>("overview");
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  // volta para a primeira aba ao trocar de certificado
  useEffect(() => setTab("overview"), [v.id]);

  // Ao abrir: trava o scroll da página, leva o foco para o botão de fechar e devolve o foco ao fechar
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 50);
    return () => {
      clearTimeout(t);
      html.style.overflow = prevOverflow;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [open]);

  const cert = v.cert;
  const groups = skillGroups(cert);
  const roadmap = cert.conteudoAprendido ?? [];
  const acts = cert.atividadesDesenvolvidas ?? [];
  const hasLinks = Boolean(cert.projetosUrl || cert.repositorioGithubUrl || acts.length);

  // Só mostra abas que têm conteúdo
  const tabs: { key: TabKey; label: string }[] = [{ key: "overview", label: "Visão geral" }];
  if (groups.length) tabs.push({ key: "skills", label: "Habilidades" });
  if (roadmap.length) tabs.push({ key: "roadmap", label: "Roadmap" });
  if (hasLinks) tabs.push({ key: "links", label: "Projetos e links" });

  const active: TabKey = tabs.some((t) => t.key === tab) ? tab : "overview";
  const activeIdx = tabs.findIndex((t) => t.key === active);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    // prende o Tab dentro da gaveta
    if (e.key === "Tab" && panelRef.current) {
      const items = [...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const onTabsKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (activeIdx + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setTab(tabs[next].key);
    (e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]')[next])?.focus();
  };

  if (!mounted) return null;

  const titleId = `${uid}-title`;
  const tabId = (k: TabKey) => `${uid}-tab-${k}`;
  const panelId = `${uid}-panel`;

  return createPortal(
    <div
      className={cx(styles.ov, open && styles.open)}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={onKeyDown}
    >
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{ "--lv": v.color, "--h1": v.h1, "--h2": v.h2 } as CSSProperties}
      >
        <div className={styles.p_top}>
          <button ref={closeRef} type="button" className={styles.icbtn} aria-label="Fechar detalhes" onClick={onClose}>
            <Icon name="close" />
          </button>
          <span className={styles.pos}>
            {position} de {total}
          </span>
          <div className={styles.navb}>
            <button type="button" className={styles.icbtn} aria-label="Certificado anterior" onClick={() => onStep(-1)}>
              <Icon name="prev" />
            </button>
            <button type="button" className={styles.icbtn} aria-label="Próximo certificado" onClick={() => onStep(1)}>
              <Icon name="next" />
            </button>
          </div>
        </div>

        <div className={styles.p_hero}>
          <div className={styles.art} style={{ padding: 0 }}>
            <CertificateArt v={v} />
          </div>
          <div className={styles.p_info}>
            <span className={styles.lvl_in}>{v.level}</span>
            <h3 id={titleId} className={styles.p_title2}>
              {v.title}
            </h3>
            <div className={styles.inst}>
              <span className={styles.mono} aria-hidden="true">
                {v.mono}
              </span>
              {v.inst}
            </div>
            <a className={styles.dl} href={v.pdf} download>
              <Icon name="download" />
              Baixar certificado (PDF)
            </a>
          </div>
        </div>

        <p className={styles.p_desc}>{v.desc}</p>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Seções do certificado"
          style={{ "--tn": tabs.length, "--ti": activeIdx } as CSSProperties}
          onKeyDown={onTabsKey}
        >
          <i className={styles.tab_pill} />
          {tabs.map((t) => (
            <button
              key={t.key}
              id={tabId(t.key)}
              type="button"
              role="tab"
              aria-selected={t.key === active}
              aria-controls={panelId}
              tabIndex={t.key === active ? 0 : -1}
              className={cx(styles.tab, t.key === active && styles.on)}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* key={active+v.id}: refaz a animação de entrada a cada troca de aba/certificado */}
        <div id={panelId} role="tabpanel" aria-labelledby={tabId(active)} className={styles.tb} key={`${v.id}-${active}`}>
          {active === "overview" && (
            <>
              {cert.metasDoCurso && (
                <div className={styles.goal}>
                  <Icon name="target" />
                  <div>
                    <b>O que o curso busca ensinar</b>
                    <p>{cert.metasDoCurso}</p>
                  </div>
                </div>
              )}
              <div className={styles.facts}>
                <div className={styles.fact}>
                  <span>Nível</span>
                  <b>{v.level}</b>
                </div>
                <div className={styles.fact}>
                  <span>Carga horária</span>
                  <b>{v.duration}</b>
                </div>
                <div className={styles.fact}>
                  <span>Conclusão</span>
                  <b>{v.dateLabel}</b>
                </div>
              </div>
              {v.techs.length > 0 && (
                <>
                  <div className={styles.h4}>Tecnologias, linguagens e frameworks</div>
                  <div className={styles.tags}>
                    {v.techs.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {active === "skills" &&
            groups.map((g) => (
              <div className={styles.grp} key={g.label} style={{ "--gc": g.color } as CSSProperties}>
                <div className={styles.grp_h}>
                  <i />
                  {g.label}
                  <em>{g.items.length}</em>
                </div>
                <div className={styles.sk}>
                  {g.items.map((it, k) => (
                    <span key={it} style={{ "--k": k } as CSSProperties}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          {active === "roadmap" && (
            <>
              <div className={styles.h4} style={{ marginTop: 0 }}>
                Roadmap do curso
              </div>
              <ol className={styles.road}>
                {roadmap.map((t, k) => (
                  <li key={t} style={{ "--k": k } as CSSProperties}>
                    <b>{k + 1}</b>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </>
          )}

          {active === "links" && (
            <div className={styles.links}>
              {cert.projetosUrl && (
                <a className={styles.lk} style={{ "--lc": "#34d399" } as CSSProperties} href={cert.projetosUrl} target="_blank" rel="noopener noreferrer">
                  <span className={styles.lk_i}>
                    <Icon name="rocket" />
                  </span>
                  <span className={styles.lk_t}>
                    <b>Projeto final</b>
                    <span>{hostOf(cert.projetosUrl)}</span>
                  </span>
                  <Icon name="external" className={styles.lk_go} />
                </a>
              )}
              {cert.repositorioGithubUrl && (
                <a className={styles.lk} style={{ "--lc": "#f4f2f7" } as CSSProperties} href={cert.repositorioGithubUrl} target="_blank" rel="noopener noreferrer">
                  <span className={styles.lk_i}>
                    <Icon name="github" />
                  </span>
                  <span className={styles.lk_t}>
                    <b>Repositório no GitHub</b>
                    <span>{pathOf(cert.repositorioGithubUrl).replace(/^\//, "")}</span>
                  </span>
                  <Icon name="external" className={styles.lk_go} />
                </a>
              )}
              {acts.length > 0 && (
                <>
                  <div className={styles.h4} style={{ margin: "10px 0 0" }}>
                    Atividades desenvolvidas
                  </div>
                  {acts.map((u) => (
                    <a key={u} className={styles.lk} style={{ "--lc": "#4da3ff" } as CSSProperties} href={u} target="_blank" rel="noopener noreferrer">
                      <span className={styles.lk_i}>{hostOf(u).charAt(0).toUpperCase()}</span>
                      <span className={styles.lk_t}>
                        <b>{hostOf(u)}</b>
                        <span>{pathOf(u)}</span>
                      </span>
                      <Icon name="external" className={styles.lk_go} />
                    </a>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
