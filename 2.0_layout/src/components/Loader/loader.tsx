import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const LINES = [
  { sym: "$", txt: "pnpm build" },
  { sym: "→", txt: "compilando componentes" },
  { sym: "→", txt: "otimizando imagens e fontes" },
  { sym: "→", txt: "empacotando stacks: react, next, node" },
  { sym: "✓", txt: "build pronto" },
];

export default function Loader({ runId }: { runId: number }) {
  const [step, setStep] = useState(-1); // -1 = nada revelado ainda
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(false);
    setStep(-1);

    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const next = () => {
      setStep(i);
      if (i >= LINES.length - 1) {
        timeoutId = setTimeout(() => setHide(true), 500);
        return;
      }
      i++;
      timeoutId = setTimeout(next, 430);
    };

    timeoutId = setTimeout(next, 250);
    return () => clearTimeout(timeoutId);
  }, [runId]); // reinicia sempre que runId mudar

  const progress = step < 0 ? 0 : Math.round(((step + 1) / LINES.length) * 100);

  return (
    <div className={`${styles.loader} ${hide ? styles.hide : ""}`}>
      <div className={styles.bg_dots} />
      <div className={`${styles.blob} ${styles.blob_a}`} />
      <div className={`${styles.blob} ${styles.blob_b}`} />

      <div className={styles.term}>
        <div className={styles.term_head}>
          <span className={styles.term_dot} />
          <span className={styles.term_dot} />
          <span className={styles.term_dot} />
          <span className={styles.path}>johnodev — zsh</span>
        </div>

        <div className={styles.term_body}>
          {LINES.map((line, i) => (
            <div
              key={i}
              className={`${styles.line} ${i <= step ? styles.show : ""} ${i === step ? styles.active : ""
                } ${i < step ? styles.done : ""}`}
            >
              <span className={styles.sym}>{line.sym}</span>
              <span className={styles.txt}>{line.txt}</span>
            </div>
          ))}
        </div>

        <div className={styles.footer_row}>
          <div className={styles.ticks}>
            {LINES.map((_, i) => (
              <div key={i} className={`${styles.tick} ${i <= step ? styles.on : ""}`} />
            ))}
          </div>
          <div className={styles.pct}>
            <b>{progress}</b>%
          </div>
        </div>
      </div>
    </div>
  );
}