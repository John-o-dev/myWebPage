import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
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
  const [tooltipLeft, setTooltipLeft] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef(new Map<number, HTMLButtonElement>());

  const selectedDot = dots.find((dot) => dot.id === hoverId);
  const selectedView = hoverId == null ? null : byId.get(hoverId);
  const showTooltip = Boolean(selectedDot && selectedView);

  useLayoutEffect(() => {
    if (!showTooltip || hoverId == null) {
      setTooltipLeft(null);
      return;
    }

    const track = trackRef.current;
    const tip = tipRef.current;
    const dot = dotRefs.current.get(hoverId);
    if (!track || !tip || !dot) return;

    const updatePosition = () => {
      const trackRect = track.getBoundingClientRect();
      const dotRect = dot.getBoundingClientRect();
      const tipWidth = tip.offsetWidth;
      const edge = 8;
      const center = dotRect.left + dotRect.width / 2 - trackRect.left;
      const min = edge + tipWidth / 2;
      const max = trackRect.width - edge - tipWidth / 2;
      setTooltipLeft(max >= min ? Math.min(Math.max(center, min), max) : trackRect.width / 2);
    };

    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    observer.observe(tip);
    window.addEventListener("resize", updatePosition);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, [hoverId, showTooltip]);

  useEffect(() => {
    if (touchedId !== null && !dots.some((dot) => dot.id === touchedId)) {
      setTouchedId(null);
    }
  }, [dots, touchedId]);

  const handleDotClick = (id: number) => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch) {
      onOpen(id);
      return;
    }
    if (touchedId === id) {
      setTouchedId(null);
      onHover(null);
      onOpen(id);
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
      <div className={styles.tl_track} ref={trackRef}>
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
              ref={(node) => {
                if (node) dotRefs.current.set(d.id, node);
                else dotRefs.current.delete(d.id);
              }}
              type="button"
              className={cx(styles.dot, !activeIds.has(d.id) && styles.off, hoverId === d.id && styles.hl)}
              style={{ left: `${d.left}%`, "--lv": v.color } as CSSProperties}
              aria-label={`${v.title}, concluído em ${v.dateLabel}`}
              onClick={() => handleDotClick(d.id)}
              onPointerEnter={(e) => { if (e.pointerType !== "touch") onHover(d.id); }}
              onPointerLeave={(e) => { if (e.pointerType !== "touch") onHover(null); }}
              onFocus={() => { if (!window.matchMedia("(hover: none)").matches) onHover(d.id); }}
              onBlur={() => { if (!window.matchMedia("(hover: none)").matches) onHover(null); }}
            />
          );
        })}
        {showTooltip && selectedView && selectedDot && (
          <div
            ref={tipRef}
            className={cx(styles.dot_tip, tooltipLeft !== null && styles.dot_tip_visible)}
            style={{ left: tooltipLeft ?? `${selectedDot.left}%` }}
            role="tooltip"
          >
            <b>{selectedView.title}</b>
            <em>{selectedView.dateLabel}</em>
          </div>
        )}
      </div>
    </section>
  );
}