import { useEffect, useRef, useState } from "react";
import styles from "./NavSpinner.module.css";

export default function NavSpinner({ show }: { show: boolean }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setHide(false);
      setProgress(0);

      // avança até 90% sozinho — não sabemos quando a navegação real termina,
      // então nunca chega a 100% sem o routeChangeComplete confirmar
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 90 ? 90 : p + Math.random() * 10));
      }, 180);
    } else if (visible) {
      // navegação terminou: completa a barra e some
      clearInterval(intervalRef.current);
      setProgress(100);
      const t = setTimeout(() => {
        setHide(true);
        setTimeout(() => setVisible(false), 600); // espera a transição de opacity
      }, 200);
      return () => clearTimeout(t);
    }
    return () => clearInterval(intervalRef.current);
  }, [show]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null;

  return (
    <div className={`${styles.loader} ${hide ? styles.hide : ""}`}>
      <div className={styles.loaderGlow} />
      <div className={styles.markWrap}>
        <div className={styles.ring} />
        <div className={styles.ringSoft} />
        <div className={styles.mark}>JO</div>
      </div>
      <div className={styles.label}>
        <span className={styles.tag}>Carregando experiência</span>
        <div className={styles.barTrack}>
          <div className={styles.barFill} style={{ width: `${progress}%` }} />
        </div>
        <div className={styles.counter}>{Math.floor(progress)}%</div>
      </div>
    </div>
  );
}