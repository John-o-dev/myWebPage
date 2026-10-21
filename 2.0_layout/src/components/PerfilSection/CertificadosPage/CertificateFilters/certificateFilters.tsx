import type { CSSProperties } from "react";
import { LEVELS } from "@/utils/certificates";
import type { CertView, Filters } from "@/utils/certificates";
import { cx } from "@/utils/cx";
import { Icon } from "@/utils/certificatesIcons";
import styles from "./certificateFilters.module.css";

type Props = {
  views: CertView[];
  filters: Filters;
  onChange: (patch: Partial<Filters>) => void;
  topTechs: string[];
  shown: number;
};

const LEVEL_NAMES = ["all", ...LEVELS];

export default function CertificateFilters({ views, filters, onChange, topTechs, shown }: Props) {
  const total = views.length;
  const hasFilters = filters.level !== "all" || filters.tech !== "all" || filters.q.trim() !== "";
  const levelIdx = Math.max(0, LEVEL_NAMES.indexOf(filters.level));

  return (
    <>
      <div className={styles.ctrl}>
        <label className={styles.search}>
          <Icon name="search" />
          <input
            type="search"
            value={filters.q}
            placeholder="Buscar por curso, instituição ou tecnologia"
            aria-label="Buscar certificados"
            onChange={(e) => onChange({ q: e.target.value })}
          />
        </label>

        <div className={styles.seg} role="group" aria-label="Filtrar por nível" style={{ "--i": levelIdx } as CSSProperties}>
          {/* <i className={styles.seg_pill} /> */}
          {LEVEL_NAMES.map((n) => {
            const active = filters.level === n;
            const count = n === "all" ? total : views.filter((v) => v.level === n).length;
            return (
              <button
                key={n}
                type="button"
                className={cx(styles.seg_b, active && styles.on)}
                aria-pressed={active}
                onClick={() => onChange({ level: n })}
              >
                {n === "all" ? "Todos" : n}
                <em>{count}</em>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.techs} role="group" aria-label="Filtrar por tecnologia">
        <span className={styles.techs_l}>Tecnologia</span>
        {["all", ...topTechs].map((t) => {
          const active = filters.tech === t;
          return (
            <button
              key={t}
              type="button"
              className={cx(styles.tchip, active && styles.on)}
              aria-pressed={active}
              onClick={() => onChange({ tech: active && t !== "all" ? "all" : t })}
            >
              {t === "all" ? "Todas" : t}
            </button>
          );
        })}
      </div>

      <div className={styles.status} aria-live="polite">
        <span>{shown === total ? `${total} certificados` : `${shown} de ${total} certificados`}</span>
        {hasFilters && (
          <button type="button" className={styles.clear} onClick={() => onChange({ level: "all", tech: "all", q: "" })}>
            Limpar filtros
          </button>
        )}
      </div>
    </>
  );
}
