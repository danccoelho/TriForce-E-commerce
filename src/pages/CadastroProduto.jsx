// src/components/CadastroProduto.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/cadastroProduto.css'; // Importa o CSS da tela de cadastro de produto

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idcategoriaa: '', // Mantendo o nome da prop como está no seu código
    descricao: '',
    preco: '',
    estoque: '',
    // termos: false, // Removido, pois não é aplicável a cadastro de produto
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:3001/api/cadastroProduto',
        formData
      );
      alert(res.data.message);
      // Opcional: Limpar o formulário após o sucesso
      setFormData({
        nome: '',
        idcategoriaa: '',
        descricao: '',
        preco: '',
        estoque: '',
      });
    } catch (err) {
      console.error('Erro ao cadastrar produto:', err); // Log mais descritivo
      alert('Erro ao cadastrar o produto. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="product-registration-page"> {/* Wrapper da página com o gradiente */}
      {/* NavBar para o título "Triforce" */}
      <nav className="product-navbar">
        <Link to="/" className="product-navbar-brand">TriForce</Link>
      </nav>

      <div className="product-form-wrapper">
        <div className="product-form-container"> {/* O CARD BRANCO do formulário */}
          <h1 className="product-form-title">Cadastro de Produto</h1>
          <p className="product-form-subtitle">Preencha os dados do novo produto</p>

          <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Nome do Produto */}
              <div className="input-group">
                <label htmlFor="nome" className="sr-only">Nome do Produto</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome do Produto*"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              {/* Categoria */}
              <div className="input-group">
                <label htmlFor="idcategoriaa" className="sr-only">Categoria</label>
                <input
                  type="text"
                  name="idcategoriaa"
                  placeholder="Categoria*" // Ajuste o placeholder conforme sua lógica de backend
                  value={formData.idcategoriaa}
                  onChange={handleChange}
                />
              </div>

              {/* Descrição */}
              <div className="input-group full-width"> {/* Adicione full-width para descrição */}
                <label htmlFor="descricao" className="sr-only">Descrição</label>
                <textarea
                  name="descricao"
                  placeholder="Descrição detalhada do produto*"
                  value={formData.descricao}
                  onChange={handleChange}
                  required
                  rows="4" // Aumenta o número de linhas para a textarea
                ></textarea>
              </div>

              {/* Preço */}
              <div className="input-group">
                <label htmlFor="preco" className="sr-only">Preço</label>
                <input
                  type="text" // Pode ser 'number' se você quiser validação de navegador
                  name="preco"
                  placeholder="Preço (Ex: 00.00)*"
                  value={formData.preco}
                  onChange={handleChange}
                />
              </div>

              {/* Estoque */}
              <div className="input-group">
                <label htmlFor="estoque" className="sr-only">Estoque</label>
                <input
                  type="text" // Pode ser 'number'
                  name="estoque"
                  placeholder="Quantidade em Estoque*"
                  value={formData.estoque}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn-submit-product">
              Cadastrar Produto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroProduto;