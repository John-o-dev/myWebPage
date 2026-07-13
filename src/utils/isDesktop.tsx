import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const isDesktop = () => {
      setIsDesktop(window.innerWidth < breakpoint);
    };

    isDesktop();  // verifica ao montar
    window.addEventListener("resize", isDesktop);

    setHasMounted(true); // Marca que o componente montou no cliente

    return () => {
      window.removeEventListener("resize", isDesktop);
    };
  }, [breakpoint]);

  return hasMounted ? isDesktop : null; // Evita render SSR inconsistente
}

