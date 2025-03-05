import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollAnimations = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".hidden, .hidden2, .hidden3, .hidden4, .hidden5, .hiddenHorizontalA, .hiddenHorizontalB"
    );

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "show",
              "showHorizontalOne",
              "showHorizontalTwo"
            );
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]); // <-- Se ejecuta cada vez que cambia la ruta

  return null; // No renderiza nada, solo ejecuta el efecto
};

export default ScrollAnimations;
