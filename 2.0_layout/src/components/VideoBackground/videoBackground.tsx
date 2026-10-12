import { useEffect, useState } from "react";
import styles from "./videoBackground.module.css";

type VideoSource = { webm: string; mp4: string; poster: string };

type VideoBackgroundProps = {
  desktop: VideoSource;
  mobile: VideoSource;
  breakpoint?: number;   // px — default 767
  overlay?: boolean;     // default true
  className?: string;
};

export default function VideoBackground({
  desktop,
  mobile,
  breakpoint = 820,
  overlay = true,
  className,
}: VideoBackgroundProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  const active = isMobile === null ? null : isMobile ? mobile : desktop;

  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      {/* poster resolvido por CSS puro — aparece antes mesmo do JS rodar, e funciona igual sem JS */}
      <picture className={styles.posterPic}>
        <source media={`(max-width: ${breakpoint}px)`} srcSet={mobile.poster} />
        <img src={desktop.poster} alt="" className={styles.posterImg} />
      </picture>

      {active && (
        <video
          key={isMobile ? "mobile" : "desktop"}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={active.poster}
        >
          <source src={active.webm} type="video/webm" />
          <source src={active.mp4} type="video/mp4" />
        </video>
      )}

      {overlay && <div className={styles.overlay} />}
    </div>
  );
}