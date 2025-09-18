import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { listaFaq } from "../../data/listaFaq";
import type { TipoFaq } from "../../types/tipoFaq";

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const handleBackClick = () => {
    navigate(-1);
  };
  return(
    <main className="faq">
      
      <div className="voltar">
        <button onClick={handleBackClick} className="botao-voltar faq-voltar">
          <svg className="icone-voltar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar
        </button>
      </div>

      <h1>Perguntas Frequentes</h1>
      </main>
  );
}