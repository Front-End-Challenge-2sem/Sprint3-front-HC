import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {

  const navigate = useNavigate();
  const [absenteism, setAbsenteism] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setAbsenteism(prev => {
        if (prev <= 10) {
          clearInterval(interval);
          return 10;
        }
        return prev - 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Saúde na Tecnologia para Todos</h1>
          <p className="hero-subtitle">
            Ajudamos pessoas que têm dificuldade com celulares a marcar consultas e usar a saúde na internet
          </p>
          <button 
            onClick={() => navigate('/guia')}
            className="hero-button"
          >
            Veja nosso Passo a Passo
          </button>
        </div>
      </section>
      <main/>
  );
}