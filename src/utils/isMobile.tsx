import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkIsMobile();  // verifica ao montar
    window.addEventListener("resize", checkIsMobile);

    setHasMounted(true); // Marca que o componente montou no cliente

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [breakpoint]);

  return hasMounted ? isMobile : null; // Evita render SSR inconsistente
}

