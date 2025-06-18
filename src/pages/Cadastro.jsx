// src/components/Cadastro.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    sobrenome: '',
    confirmarEmail: '',
    confirmarSenha: ''
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
    console.log('Submitting form...', formData);

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
    <div className="registration-page">
      <div className="registration-card">
        <header className="card-header">
          <div className="bousting-logo">
            <div className="logo">3<span>Force</span></div>
          </div>
          
        </header>

        <div className="section-title">
          <h2>Cadastro</h2>
          <div className="title-underline"></div>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="input-column">
             <label className="input-label">Nome<span className="required">*</span></label>
              <div className="input-group">
                <input
                  type="text"
                  name="nome"
                  placeholder="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              <label className="input-label">Email<span className='required'>*</span></label>
              <div className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <label className="input-label">Senha<span className='required'>*</span></label>
              <div className="input-group">
                <input
                  type="password"
                  name="senha"
                  placeholder="senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-column">
              <label className="input-label">Sobrenome<span className='required'>*</span></label>
              <div className="input-group">
                <input
                  type="text"
                  name="sobrenome"
                  placeholder="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                />
              </div>

              <label className="input-label">Confirmar Email<span className='required'>*</span></label>
              <div className="input-group">
                <input
                  type="text"
                  name="confirmarEmail"
                  placeholder="confirmar email"
                  value={formData.confirmarEmail}
                  onChange={handleChange}
                />
              </div>

              <label className="input-label">Confirmar Senha<span className='required'>*</span></label>
              <div className="input-group">
                <input
                  type="text"
                  name="confirmarSenha"
                  placeholder="confirmar senha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                />
              </div>

              <div className="button-row">
                <button type="button" className="registration-button secondary">
                  <Link to="/Login">cancelar</Link>
                </button>
                <button type="submit" className="registration-button">
                  Registrar 
                </button>
              </div>

              <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="termos"
                    checked={formData.termos}
                    onChange={handleChange}
                  />
                  <span>Aceito os termos</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;