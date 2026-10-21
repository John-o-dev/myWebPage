import type { CSSProperties } from "react";
import styles from "./certificateStats.module.css";

type Stat = { n: number; suf: string; label: string };

/** O número é animado só com CSS (@property + counter), sem JavaScript */
export default function CertificateStats({ items }: { items: Stat[] }) {
  return (
    <div className={styles.stats}>
      {items.map((s) => (
        <div className={styles.stat} key={s.label}>
          <b
            className={styles.stat_n}
            style={{ "--target": s.n } as CSSProperties}
            data-suf={s.suf}
            aria-hidden="true"
          />
          <span>
            <span className={styles.sr}>
              {s.n}
              {s.suf}{" "}
            </span>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
