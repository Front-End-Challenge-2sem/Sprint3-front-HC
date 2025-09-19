import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Contato() {
  const navigate = useNavigate();

  interface ContactFormData {
    nome: string;
    email: string;
    telefone: string;
    assunto: string;
    mensagem: string;
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Dados do formulário:", data);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    reset();
  };

  const handleBackClick = () => {
    navigate(-1);
  };
  return(
    <div>
        <div className="voltar">
        <button className="botao-voltar contato-voltar" onClick={handleBackClick}>
          <svg
            className="icone-voltar"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={20}
            height={20}
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
  )
}