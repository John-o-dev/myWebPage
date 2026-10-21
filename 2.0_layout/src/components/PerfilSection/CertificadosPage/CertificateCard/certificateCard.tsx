import type { CSSProperties, PointerEvent } from "react";
import type { CertView } from "@/utils/certificates";
import { cx } from "@/utils/cx";
import { Icon } from "@/utils/certificatesIcons";
import CertificateArt from "../CertificateImage/certificateImage";
import styles from "./certificateCard.module.css";

type Props = {
  v: CertView;
  index: number;
  highlighted: boolean;
  onOpen: (id: number) => void;
  onHover: (id: number | null) => void;
};

export default function CertificateCard({ v, index, highlighted, onOpen, onHover }: Props) {
  const extra = v.techs.length - 3;

  // Inclinação 3D e brilho que seguem o mouse (não roda em toque)
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${((x - 0.5) * 9).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((0.5 - y) * 7).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  };
  const reset = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      className={cx(styles.card, styles.ea, highlighted && styles.hl)}
      style={{ "--i": index, "--lv": v.color, "--h1": v.h1, "--h2": v.h2 } as CSSProperties}
      onMouseEnter={() => onHover(v.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={styles.tilt} onPointerMove={move} onPointerLeave={reset}>
        <div className={styles.art}>
          <CertificateArt v={v} />
          <span className={styles.lvl}>{v.level}</span>
          <span className={styles.peek} onClick={() => onOpen(v.id)} aria-hidden="true">
            Ver detalhes
          </span>
        </div>

        <div className={styles.body}>
          <div className={styles.inst}>
            <span className={styles.mono} aria-hidden="true">
              {v.mono}
            </span>
            {v.inst}
          </div>

          {/* O botão do título cobre o card inteiro (::after), então o card todo é clicável e acessível */}
          <h3 className={styles.ctitle}>
            <button type="button" className={styles.stretch} onClick={() => onOpen(v.id)}>
              {v.title}
            </button>
          </h3>

          <div className={styles.meta}>
            <span>
              <Icon name="clock" />
              {v.duration}
            </span>
            <span>
              <Icon name="calendar" />
              {v.dateLabel}
            </span>
          </div>

          {v.techs.length > 0 && (
            <div className={styles.chips}>
              {v.techs.slice(0, 3).map((t) => (
                <span key={t}>{t}</span>
              ))}
              {extra > 0 && <span className={styles.n}>+{extra}</span>}
            </div>
          )}
        </div>

        <div className={styles.foot}>
          <a className={styles.pdf} href={v.pdf} download aria-label={`Baixar PDF de ${v.title}`}>
            <Icon name="download" />
            PDF
          </a>
          <span className={styles.more_txt} aria-hidden="true">
            Ver detalhes
            <Icon name="arrow" />
          </span>
        </div>

        <i className={styles.glare} />
      </div>
    </article>
  );
}
