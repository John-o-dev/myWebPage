import { ReactNode, useCallback, useMemo, useState } from "react";
import { certificates as defaultCertificates } from "@/lib/certificates";
import type { Certificate } from "@/types/certificates";
import { computeStats, matches, timelineLayout, toView } from "@/utils/certificates";
import type { Filters } from "@/utils/certificates";
import CertificateCard from "../CertificateCard/certificateCard";
import CertificateModal from "../CertificateModal/certificateModal";
import CertificateFilters from "../CertificateFilters/certificateFilters";
import CertificateStats from "../CertificateStats/certificateStats";
import CertificateTimeline from "../CertificateTimeline/certificateTimelile";
import { cx } from "@/utils/cx";
import styles from "./certificatesSection.module.css";

type Props = {
  /** Lista de certificados. Padrão: lib/certificates/data.ts */
  certificates?: Certificate[];
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  showTimeline?: boolean;
};

export default function CertificatesSection({
  certificates = defaultCertificates,
  id = "certificados",
  eyebrow = "Formação contínua",
  title = (
    <>
      Certificados <span className={styles.grad}>&amp; conquistas</span>
    </>
  ),
  description = "Cursos que concluí, o que aprendi em cada um e os projetos que construí pelo caminho. Escolha um certificado para ver habilidades, roadmap e links.",
  showTimeline = true,
}: Props) {
  const views = useMemo(() => certificates.map(toView), [certificates]);
  const [filters, setFilters] = useState<Filters>({ level: "all", tech: "all", q: "" });
  const [openId, setOpenId] = useState<number | null>(null);
  const [shownId, setShownId] = useState<number | null>(null); // mantém o conteúdo durante a animação de saída
  const [hoverId, setHoverId] = useState<number | null>(null);

  const filtered = useMemo(() => views.filter((v) => matches(v, filters)), [views, filters]);
  const stats = useMemo(() => computeStats(views), [views]);
  const timeline = useMemo(() => timelineLayout(views), [views]);
  const activeIds = useMemo(() => new Set(filtered.map((v) => v.id)), [filtered]);

  // Troca da chave refaz a animação de entrada dos cards quando o resultado muda
  const resultKey = filtered.map((v) => v.id).join("-");

  const open = useCallback((cid: number) => {
    setShownId(cid);
    setOpenId(cid);
  }, []);
  const close = useCallback(() => setOpenId(null), []);

  // Navegação anterior/próximo respeita os filtros atuais
  const navList = openId !== null && activeIds.has(openId) ? filtered : views;
  const current = views.find((v) => v.id === (shownId ?? -1)) ?? views[0];
  const pos = Math.max(0, navList.findIndex((v) => v.id === current?.id));

  const step = (delta: number) => {
    const next = navList[(pos + delta + navList.length) % navList.length];
    if (next) open(next.id);
  };

  if (!views.length) return null;

  return (
    <section id={id} className={styles.root} aria-labelledby={`${id}-title`}>
      <div className={styles.bg} aria-hidden="true">
        <div className={cx(styles.orb, styles.o1)} />
        <div className={cx(styles.orb, styles.o2)} />
      </div>

      <div className={styles.wrap}>
        <header>
          <p className={styles.eyebrow}>
            <i />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          <p className={styles.sub}>{description}</p>
        </header>

        <CertificateStats items={stats.items} />

        {showTimeline && (
          <CertificateTimeline
            views={views}
            dots={timeline.dots}
            ticks={timeline.ticks}
            activeIds={activeIds}
            hoverId={hoverId}
            onHover={setHoverId}
            onOpen={open}
          />
        )}

        <CertificateFilters
          views={views}
          filters={filters}
          onChange={(patch) => setFilters((f) => ({ ...f, ...patch }))}
          topTechs={stats.topTechs}
          shown={filtered.length}
        />

        <div className={styles.grid}>
          {filtered.map((v, i) => (
            <CertificateCard
              key={`${resultKey}:${v.id}`}
              v={v}
              index={i}
              highlighted={hoverId === v.id}
              onOpen={open}
              onHover={setHoverId}
            />
          ))}

          {filtered.length === 0 && (
            <div className={styles.empty}>
              <b>Nenhum certificado encontrado</b>
              <span>Tente outra palavra ou limpe os filtros.</span>
              <button type="button" className={styles.clear} onClick={() => setFilters({ level: "all", tech: "all", q: "" })}>
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>

      <CertificateModal open={openId !== null} current={current} position={pos + 1} total={navList.length} onClose={close} onStep={step} />
    </section>
  );
}
