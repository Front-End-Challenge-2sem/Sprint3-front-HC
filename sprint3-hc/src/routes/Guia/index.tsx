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

      <section className="passos">
        <div className="container">
          <h2 className="titulo-secao">Como usar o aplicativo</h2>

          <div>
            {listaGuia.map((step: TipoGuia, index: number) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                className={`passo ${step.reverse ? "passo-reverso" : ""} ${
                  animatedSteps[index] ? "animado" : ""
                }`}
              >
                
                <div className="passo-imagem">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%2320A0D8'%3EImagem%20Ilustrativa%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                
                <div className="passo-conteudo">
                  <span className="passo-numero">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</main>
  );
}