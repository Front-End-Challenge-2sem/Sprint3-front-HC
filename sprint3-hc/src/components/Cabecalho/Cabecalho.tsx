import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const menuItems = [
    { path: '/', label: 'Início' },
    { path: '/guia', label: 'Passo a passo' },
    { path: '/faq', label: 'Dúvidas' },
    { path: '/contato', label: 'Ajuda' },
    { path: '/integrantes', label: 'Integrantes' },
    { path: '/login', label: 'Login' },
    { path: '/cadastro', label: 'Cadastro' }
  ];
  return(
    
  )
}