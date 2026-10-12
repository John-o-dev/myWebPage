import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Dock.module.css";
import { routes, buildHref, isActive } from "@/lib/routes";

// DEPOIS TROCAR POR ICONES
const icons: Record<string, React.ReactNode> = {
  "": <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />,
  "perfil": <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c1.5-4 4-6 7-6s5.5 2 7 6" /></>,
  "portfolio": <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></>,
  "blog": <><path d="M4 4h13l3 3v13H4z" /><path d="M9 9h7M9 13h7M9 17h4" /></>,
  "contato": <><path d="M3 6h18v12H3z" /><path d="M3 7l9 6 9-6" /></>,
};

export default function Dock() {
  const router = useRouter();
  const lang = (router.query.lang as string) ?? "pt";

  return (
    <div className={styles.dock}>
      {routes.map((r) => (
        <Link
          key={r.slug}
          href={buildHref(lang, r.slug)}
          title={r.title}
          aria-label={r.title}
          className={`${styles.dock_btn} ${isActive(router.asPath, lang, r.slug) ? styles.active : ""}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {icons[r.slug]}
          </svg>
        </Link>
      ))}
    </div>
  )
}