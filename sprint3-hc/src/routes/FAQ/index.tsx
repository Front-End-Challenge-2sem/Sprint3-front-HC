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
<main>
    
</main>
  );
}