import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import Navbar from "../Navbar/navbar";
import SideMenu from "../SideMenu/sideMenu";
import type { Url } from "@/lib/useLang";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const pageRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const wasOpen = useRef(false);

  const openMenu = useCallback(() => {
    // Guarda o scroll para a página minimizada mostrar exatamente o que estava na tela
    setScrollY(window.scrollY);
    setOpen(true);
  }, []);
  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(
    () => (open ? closeMenu() : openMenu()),
    [open, openMenu, closeMenu]
  );

  /** Fecha o menu, espera a animação terminar e só então navega */
  const navigateAfterClose = useCallback(
    (url: Url) => {
      setOpen(false);
      if (typeof url === "string" && url === router.asPath) return;
      if (navTimer.current) clearTimeout(navTimer.current);
      navTimer.current = setTimeout(() => router.push(url), 500);
    },
    [router]
  );

  // Trava o scroll da página enquanto o menu está aberto
  // (libera só depois da animação de saída, para não aparecer scroll horizontal)
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.style.overflow = "hidden";
      return;
    }
    const t = setTimeout(() => {
      root.style.overflow = "";
    }, 900);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(
    () => () => {
      document.documentElement.style.overflow = "";
      if (navTimer.current) clearTimeout(navTimer.current);
    },
    []
  );

  // A página fica "inert" (sem foco/clique) enquanto o menu está aberto;
  // ao fechar, o foco volta para o botão hambúrguer
  useEffect(() => {
    const el = pageRef.current as (HTMLDivElement & { inert?: boolean }) | null;
    if (el) el.inert = open;
    if (!open && wasOpen.current) burgerRef.current?.focus({ preventScroll: true });
    wasOpen.current = open;
  }, [open]);

  // ESC fecha
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Voltou para desktop com o menu aberto: fecha
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 821px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Segurança: qualquer navegação concluída fecha o menu
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeComplete", close);
    return () => router.events.off("routeChangeComplete", close);
  }, [router.events]);

  return (
    <>
      {/* Atrás da página: menu lateral (fixo) */}
      <SideMenu open={open} onClose={closeMenu} onNavigate={navigateAfterClose} />

      {/* "Folha" decorativa que dá profundidade à página minimizada */}
      <div
        className={`${styles.ghost} ${open ? styles.ghost_open : ""}`}
        aria-hidden="true"
      />

      {/* Área clicável sobre a página minimizada (fecha o menu).
          Precisa vir imediatamente ANTES da .page por causa do seletor "+" no CSS */}
      <button
        type="button"
        className={`${styles.hit} ${open ? styles.hit_open : ""}`}
        aria-label="Fechar menu"
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
      />

      {/* O site inteiro: é ele que encolhe/inclina quando o menu abre */}
      <div
        ref={pageRef}
        className={`${styles.page} ${open ? styles.page_open : ""}`}
        style={{ "--sy": `${scrollY}px` } as CSSProperties}
      >
        <Navbar menuOpen={open} onMenuToggle={toggleMenu} burgerRef={burgerRef} />
        {children}
      </div>
    </>
  );
}
