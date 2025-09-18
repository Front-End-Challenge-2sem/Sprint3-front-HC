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
    
</main>
  )
}