import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/carrinho.css'; // Se quiser estilizar depois

const Carrinho = () => {
  // Simulando produtos no carrinho
  const [itensCarrinho, setItensCarrinho] = useState([
    { id: 1, nome: 'Tênis Esportivo', preco: 199.90, quantidade: 1 },
    { id: 2, nome: 'Bicicleta', preco: 1200.00, quantidade: 2 },
  ]);

  // Remover item
  const removerItem = (id) => {
    const atualizados = itensCarrinho.filter(item => item.id !== id);
    setItensCarrinho(atualizados);
  };

  // Atualizar quantidade
  const atualizarQuantidade = (id, quantidade) => {
    const atualizados = itensCarrinho.map(item => 
      item.id === id ? { ...item, quantidade: quantidade } : item
    );
    setItensCarrinho(atualizados);
  };

  // Calcular total
  const total = itensCarrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade, 
    0
  );

  return (
    <div className="carrinho-container">
      <nav className="navbar">
        <Link to="/">Triforce</Link>
      </nav>

      <h2>Seu Carrinho</h2>

      {itensCarrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="itens-carrinho">
          {itensCarrinho.map(item => (
            <div key={item.id} className="item">
              <h4>{item.nome}</h4>
              <p>Preço: R$ {item.preco.toFixed(2)}</p>
              <div className="quantidade">
                <label>Quantidade:</label>
                <input 
                  type="number" 
                  min="1"
                  value={item.quantidade}
                  onChange={(e) => atualizarQuantidade(item.id, Number(e.target.value))}
                />
              </div>
              <button onClick={() => removerItem(item.id)}>Remover</button>
            </div>
          ))}
          <div className="resumo">
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <button>Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
