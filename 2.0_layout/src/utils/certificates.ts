import type { Certificate } from "@/types/certificates";

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

/** "2026-03" -> "mar/2026" */
export function formatDate(d?: string): string {
  if (!d) return "—";
  const [y, m] = d.split("-");
  return m ? `${MESES[Number(m) - 1] ?? m}/${y}` : y;
}

/** Posição em meses desde o ano 0 (usado na linha do tempo) */
export function monthIndex(d?: string): number {
  const [y, m] = (d ?? "").split("-");
  return Number(y || 0) * 12 + (Number(m || 1) - 1);
}

/** "60h" -> 60 */
export function hoursOf(d?: string): number {
  const m = /(\d+)/.exec(d ?? "");
  return m ? Number(m[1]) : 0;
}

export function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function pathOf(url: string): string {
  try {
    const u = new URL(url);
    const p = (u.pathname + u.search + u.hash).replace(/\/$/, "");
    return p && p !== "/" ? p : u.hostname;
  } catch {
    return url;
  }
}

/** "DevLab Academy" -> "DA" */
export const monogram = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export const LEVELS = ["Básico", "Intermediário", "Avançado"] as const;

export const LEVEL_COLOR: Record<string, string> = {
  Básico: "#34d399",
  Intermediário: "var(--accent, #ff6a2b)",
  Avançado: "#a78bfa",
};

/** Pares de tons usados no certificado ilustrativo (quando não há imagem) */
const HUES: [number, number][] = [
  [20, 340],
  [210, 250],
  [150, 190],
  [265, 300],
  [35, 12],
  [190, 222],
];

/** Versão "pronta para exibir" de um certificado */
export type CertView = {
  cert: Certificate;
  id: number;
  title: string;
  inst: string;
  mono: string;
  desc: string;
  level: string;
  color: string;
  duration: string;
  dateLabel: string;
  dateIso?: string;
  pdf: string;
  image: string;
  techs: string[];
  h1: number;
  h2: number;
};

export function toView(cert: Certificate, index: number): CertView {
  const info = cert.informacoesDoCertificado;
  const [h1, h2] = HUES[index % HUES.length];
  return {
    cert,
    id: cert.id,
    title: cert.titulo,
    inst: cert.instituiçãoEducacional,
    mono: monogram(cert.instituiçãoEducacional),
    desc: cert.descricao,
    level: info.nivelDoCurso ?? "—",
    color: (info.nivelDoCurso && LEVEL_COLOR[info.nivelDoCurso]) || "var(--accent, #ff6a2b)",
    duration: info.duracao ?? "—",
    dateLabel: formatDate(info.dataConclusao),
    dateIso: info.dataConclusao,
    pdf: info.documentoPDF,
    image: cert.imagemUrl,
    techs: info.tecnologiasLinguagensEFrameworks ?? [],
    h1,
    h2,
  };
}

export type Filters = { level: string; tech: string; q: string };

export function matches(v: CertView, f: Filters): boolean {
  if (f.level !== "all" && v.level !== f.level) return false;
  if (f.tech !== "all" && !v.techs.includes(f.tech)) return false;
  const q = f.q.trim().toLowerCase();
  if (q) {
    const s = v.cert.skills ?? {};
    const hay = [v.title, v.inst, v.desc, ...v.techs, ...(s.technical ?? []), ...(s.technologies ?? []), ...(s.behavioral ?? []), ...(s.listSkill ?? [])]
      .join(" ")
      .toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

export function computeStats(views: CertView[]) {
  const insts = new Set(views.map((v) => v.inst));
  const techCount = new Map<string, number>();
  let hours = 0;
  for (const v of views) {
    hours += hoursOf(v.duration);
    for (const t of v.techs) techCount.set(t, (techCount.get(t) ?? 0) + 1);
  }
  const topTechs = [...techCount.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 9)
    .map(([t]) => t);

  return {
    items: [
      { n: views.length, suf: "", label: "Certificados" },
      { n: hours, suf: "h", label: "Horas de estudo" },
      { n: insts.size, suf: "", label: "Instituições" },
      { n: techCount.size, suf: "", label: "Tecnologias" },
    ],
    topTechs,
  };
}

/** Posições (em %) dos pontos e dos anos na linha do tempo */
export function timelineLayout(views: CertView[]) {
  const idx = views.map((v) => monthIndex(v.dateIso));
  const min = Math.min(...idx);
  const max = Math.max(...idx);
  const span = Math.max(1, max - min);
  const pos = (i: number) => 4 + ((i - min) / span) * 92;

  const dots = views.map((v, i) => ({ id: v.id, left: pos(idx[i]) }));
  const ticks: { year: number; left: number }[] = [];
  for (let y = Math.ceil(min / 12); y * 12 <= max + 11; y++) {
    ticks.push({ year: y, left: pos(Math.max(min, Math.min(max, y * 12))) });
  }
  return { dots, ticks };
}

/** Grupos de habilidades exibidos na aba "Habilidades" (só os que têm itens) */
export function skillGroups(c: Certificate) {
  const s = c.skills ?? {};
  return [
    { label: "Técnicas", color: "var(--accent, #ff6a2b)", items: s.technical ?? [] },
    { label: "Tecnologias", color: "#a78bfa", items: s.technologies ?? [] },
    { label: "Comportamentais", color: "#34d399", items: s.behavioral ?? [] },
    { label: "Outras habilidades", color: "#4da3ff", items: s.listSkill ?? [] },
  ].filter((g) => g.items.length > 0);
}
