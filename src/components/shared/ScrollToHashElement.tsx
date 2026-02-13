import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se não houver hash, rola para o topo (útil ao mudar de rota)
      // window.scrollTo(0, 0); 
      // Comentado para evitar conflito se o usuario so quiser navegar sem perder posicao em alguns casos, 
      // mas geralmente em mudança de rota queremos ir pro topo.
      window.scrollTo({ top: 0, behavior: "instant" }); 
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
