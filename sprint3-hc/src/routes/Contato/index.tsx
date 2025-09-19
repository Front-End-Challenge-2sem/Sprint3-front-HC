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
        
    </div>
  )
}