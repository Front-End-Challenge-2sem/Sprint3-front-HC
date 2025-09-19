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

const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 0) return '';
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatCPF(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatPhone(e.target.value);
  };


}
return(

)