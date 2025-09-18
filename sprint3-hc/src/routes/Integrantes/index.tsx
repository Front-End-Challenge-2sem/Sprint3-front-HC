import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { TipoIntegrantes } from "../../types/tipoIntegrantes";
import { listaIntegrantes } from "../../data/listaIntegrantes";

export default function Integrantes() {
  const navigate = useNavigate();
  const [members] = useState<TipoIntegrantes[]>(listaIntegrantes);

  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };
  return(
<main>
    <div className="container">
        {/* Botão Voltar */}
        <div className="voltar">
          <button onClick={handleBackClick} className="botao-voltar integrantes-voltar">

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
        </div>
        </div>
</main>
  )
}