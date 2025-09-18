import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listaGuia } from "../../data/listaGuia";
import type { TipoGuia } from "../../types/tipoGuia";

export default function Guia() {
  const navigate = useNavigate();
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [animatedSteps, setAnimatedSteps] = useState<boolean[]>([]);

  useEffect(() => {
    setAnimatedSteps(new Array(listaGuia.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setAnimatedSteps((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = stepsRef.current;
    elements.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      elements.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleContactClick = () => {
    navigate("/contato");
  };

  const handleFaqClick = () => {
    navigate("/faq");
  };
  return(
<div>

</div>
  );
}