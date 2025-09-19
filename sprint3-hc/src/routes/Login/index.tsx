import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { TipoLogin } from "../../types/tipoLogin";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm<TipoLogin>();

  const onSubmit = (data: TipoLogin) => {
    console.log('Dados de login:', data);

    if (data.cpf === '123.456.789-00' && data.telefone === '(11) 99999-9999') {
      alert('Login realizado com sucesso!');
      navigate('/');
    } else {
      setError('root', {
        type: 'manual',
        message: 'CPF ou telefone incorretos. Tente novamente.'
      });
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };
}
return(
    
)