import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/favorito.css'; 

const Favoritos = () => {
  // Simulação dos produtos favoritados
  const [favoritos, setFavoritos] = useState([
    { id: 1, nome: 'Sapatilha Esportiva', preco: 149.90 },
    { id: 2, nome: 'Capacete Profissional', preco: 399.00 },
    { id: 3, nome: 'Bicicleta Speed', preco: 2499.00 },
  ]);

  // Remover dos favoritos
  const removerFavorito = (id) => {
    const atualizados = favoritos.filter(item => item.id !== id);
    setFavoritos(atualizados);
  };

  return (
    <div className="favoritos-container">
      <nav className="navbar">
        <Link to="/">Triforce</Link>
      </nav>

      <h2>Meus Favoritos</h2>

      {favoritos.length === 0 ? (
        <p>Você não tem itens favoritos no momento.</p>
      ) : (
        <div className="lista-favoritos">
          {favoritos.map(item => (
            <div key={item.id} className="item-favorito">
              <h4>{item.nome}</h4>
              <p>Preço: R$ {item.preco.toFixed(2)}</p>
              <div className="acoes">
                <button onClick={() => removerFavorito(item.id)}>Remover</button>
                <button>Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;