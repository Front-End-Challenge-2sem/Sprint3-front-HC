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
  return(
    <div>
        
    </div>
  );
}