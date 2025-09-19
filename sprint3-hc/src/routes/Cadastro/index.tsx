import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { TipoCadastro } from "../../types/tipoCadastro";

export default function Cadastro() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch, setError } = useForm<TipoCadastro>();
  const termosAceitos = watch('termos');

  const onSubmit = (data: TipoCadastro) => {
    console.log('Dados de cadastro:', data);

    if (data.email.includes('exemplo')) {
      setError('email', { type: 'manual', message: 'Este email já está em uso' });
      return;
    }

    alert('Cadastro realizado com sucesso! Verifique seu email para confirmar a conta.');
    navigate('/login');
  };
  
   const handleBackClick = () => navigate(-1);

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0,3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0,3)}.${numbers.slice(3,6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0,3)}.${numbers.slice(3,6)}.${numbers.slice(6,9)}-${numbers.slice(9,11)}`;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 0) return '';
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 6) return `(${numbers.slice(0,2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0,2)}) ${numbers.slice(2,6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0,2)}) ${numbers.slice(2,7)}-${numbers.slice(7,11)}`;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => e.target.value = formatCPF(e.target.value);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => e.target.value = formatPhone(e.target.value);

  return(
    <div>

    </div>
  );
}