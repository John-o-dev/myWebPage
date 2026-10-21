/** Junta classes ignorando valores vazios: cx(styles.a, ativo && styles.b) */
export const cx = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join(" ");
