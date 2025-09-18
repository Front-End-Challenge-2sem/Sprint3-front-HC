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
<main>
    <section className="destaque-guia">
        <div className="container">
          <button onClick={handleBackClick} className="botao-voltar guia-voltar">
            <svg
              className="icone-voltar"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar
          </button>

          <h1>Guia de Uso Passo a Passo</h1>
          <p className="subtitulo">
            Aprenda a usar nosso aplicativo de saúde digital de forma simples e
            intuitiva
          </p>
        </div>
      </section>
</main>
  );
}