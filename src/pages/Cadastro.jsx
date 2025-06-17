// src/components/Cadastro.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/cadastro.css'; // Importa o CSS para o estilo

const Cadastro = () => {
    const [formData, setFormData] = useState({
    lotmer: '',
    comum: '',
    stam: '',
    mome: '',
    registration: '',
    conlstiom: '',
    soror: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Cadastro em andamento! Verifique o console para os dados.');
    // Aqui você integraria com sua API de backend
  };

  return (
    <div className="registration-page">
      <div className="registration-card">
        {/* Header (Bousting logo e menu hambúrguer) */}
        <header className="card-header">
          <div className="bousting-logo">
            <span className="icon-placeholder">👤</span> Bousting
          </div>
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        {/* Título da Seção */}
        <div className="section-title">
          <h2>Cadastro</h2>
          <div className="title-underline"></div>
        </div>

        {/* Formulário */}
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Coluna Esquerda */}
            <div className="input-column">
              <label className="input-label">Lotmer</label>
              <div className="input-group">
                <span className="input-icon">💼</span>
                <input
                  type="text"
                  name="comum"
                  placeholder="Comum"
                  value={formData.comum}
                  onChange={handleChange}
                />
              </div>

              <label className="input-label">Stam</label>
              <div className="input-group">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  name="stam"
                  placeholder="Stam"
                  value={formData.stam}
                  onChange={handleChange}
                />
                <span className="dropdown-icon">▼</span> {/* Ícone de dropdown */}
              </div>

              <label className="input-label">Mome</label>
              <div className="input-group">
                <span className="input-icon">✉️</span>
                <input
                  type="text"
                  name="mome"
                  placeholder="Mome"
                  value={formData.mome}
                  onChange={handleChange}
                />
                <span className="dropdown-icon">▼</span> {/* Ícone de dropdown */}
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="input-column">
              <label className="input-label">Registration</label>
              <div className="input-group">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  name="conlstiom"
                  placeholder="Conlstiom"
                  value={formData.conlstiom}
                  onChange={handleChange}
                />
              </div>

            
              <label className="input-label">Soror</label>
              <div className="input-group">
                <span className="input-icon">💼</span>
                <input
                  type="text"
                  name="soror"
                  placeholder="Soror"
                  value={formData.soror}
                  onChange={handleChange}
                />
                <span className="dropdown-icon">▼</span> {/* Ícone de dropdown */}
              </div>

              {/* Botão de Registro */}
              <button type="submit" className="registration-button">
                Registration
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;