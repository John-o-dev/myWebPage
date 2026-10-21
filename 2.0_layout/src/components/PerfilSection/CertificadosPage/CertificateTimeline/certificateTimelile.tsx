import { useState, type CSSProperties } from "react";
import type { CertView } from "@/utils/certificates";
import { cx } from "@/utils/cx";
import styles from "./certificateTimelile.module.css";

type Props = {
  views: CertView[];
  dots: { id: number; left: number }[];
  ticks: { year: number; left: number }[];
  /** ids que passam nos filtros atuais (os outros ficam esmaecidos) */
  activeIds: Set<number>;
  hoverId: number | null;
  onHover: (id: number | null) => void;
  onOpen: (id: number) => void;
};

export default function CertificateTimeline({ views, dots, ticks, activeIds, hoverId, onHover, onOpen }: Props) {
  const byId = new Map(views.map((v) => [v.id, v]));
  const [touchedId, setTouchedId] = useState<number | null>(null);

  const handleDotClick = (id: number) => {
    const isTouch = window.matchMedia("(hover: none)").matches;

    if (!isTouch) {
      onOpen(id);
      return;
    }

    if (touchedId === id) {
      onOpen(id);
      setTouchedId(null);
      onHover(null);
    } else {
      setTouchedId(id);
      onHover(id);
    }
  };

  return (
    <section className={styles.tl} aria-label="Linha do tempo dos certificados">
      <div className={styles.tl_head}>
        <span>Linha do tempo</span>
        <span className={styles.tl_hint}>passe o mouse nos pontos</span>
      </div>
      <div className={styles.tl_track}>
        <div className={styles.tl_line} />

        {ticks.map((t) => (
          <span key={t.year} className={styles.tick} style={{ left: `${t.left}%` }} aria-hidden="true">
            <i />
            {t.year}
          </span>
        ))}

        {dots.map((d) => {
          const v = byId.get(d.id);
          if (!v) return null;
          return (
            <button
              key={d.id}
              type="button"
              className={cx(styles.dot, !activeIds.has(d.id) && styles.off, hoverId === d.id && styles.hl)}
              style={{ left: `${d.left}%`, "--lv": v.color } as CSSProperties}
              aria-label={`${v.title}, concluído em ${v.dateLabel}`}
              onClick={() => handleDotClick(d.id)}
              onPointerEnter={(e) => {if (e.pointerType !== "touch") {onHover(d.id);}}}
              onPointerLeave={(e) => {if (e.pointerType !== "touch") {onHover(null);}}}
              onFocus={() => {if (!window.matchMedia("(hover: none)").matches) {onHover(d.id);}}}
              onBlur={() => {if (!window.matchMedia("(hover: none)").matches) {onHover(null);}}}
            >
              <span className={styles.dot_tip} aria-hidden="true">
                <b>{v.title}</b>
                <em>{v.dateLabel}</em>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
