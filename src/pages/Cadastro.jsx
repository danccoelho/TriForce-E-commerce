import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: '',
    termos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações básicas
    if (formData.email !== formData.confirmarEmail) {
      alert('Os e-mails não coincidem.');
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    if (!formData.termos) {
      alert('Você precisa aceitar os termos.');
      return;
    }

    const { confirmarEmail, confirmarSenha, termos, ...dadosParaEnviar } = formData;

    try {
      const res = await axios.post('http://localhost:3001/api/cadastro', dadosParaEnviar);
      alert(res.data.message);
    } catch (err) {
      console.error('Erro ao cadastrar:', err);
      alert('Erro ao cadastrar. Veja o console para mais detalhes.');
    }
  };

  return (
    <div className="page-container">
      <nav className="navbar">
        <Link to="/">TriForce</Link>
      </nav>

      <h2 className="titulo">Crie sua conta</h2>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="nome"
            placeholder="Nome*"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="sobrenome"
            placeholder="Sobrenome*"
            value={formData.sobrenome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="confirmarEmail"
            placeholder="Confirme E-mail*"
            value={formData.confirmarEmail}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha*"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme Senha*"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
        </div>

        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            name="termos"
            checked={formData.termos}
            onChange={handleChange}
          />
          <span>Aceito os termos e condições</span>
        </label>

        <div className="form-actions">
          <button type="submit">Cadastrar</button>
        </div>

        <div className="login-link">
          <p>Já tem uma conta? <Link to="/Login">Faça login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;