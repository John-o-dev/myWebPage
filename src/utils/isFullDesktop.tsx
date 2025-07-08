import { useEffect, useState } from "react";

export function useIsFullDesktop(breakpoint = 1250) {
  const [isFullDesktop, setIsFullDesktop] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const isFullDesktop = () => {
      setIsFullDesktop(window.innerWidth < breakpoint);
    };

    isFullDesktop();  // verifica ao montar
    window.addEventListener("resize", isFullDesktop);

    setHasMounted(true); // Marca que o componente montou no cliente

    return () => {
      window.removeEventListener("resize", isFullDesktop);
    };
  }, [breakpoint]);

  return hasMounted ? isFullDesktop : null; // Evita render SSR inconsistente
}

