// src/components/Carrinho.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/carrinho.css'; // Certifique-se de que o caminho está correto

// Exemplo de dados de produto (você substituirá isso por dados reais do seu estado ou API)
const initialCartItems = [
  {
    id: 1,
    name: 'Fone de Ouvido Bluetooth Premium',
    price: 299.90,
    quantity: 2,
    image: 'https://via.placeholder.com/80x80/FF7F50/FFFFFF?text=Fone', // Substitua por sua imagem real
  },
  {
    id: 2,
    name: 'Smartwatch Esportivo Pro',
    price: 750.00,
    quantity: 1,
    image: 'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Smartwatch', // Substitua por sua imagem real
  },
  {
    id: 3,
    name: 'Teclado Mecânico RGB',
    price: 499.00,
    quantity: 1,
    image: 'https://via.placeholder.com/80x80/20B2AA/FFFFFF?text=Teclado', // Substitua por sua imagem real
  },
];

const Carrinho = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calcula o subtotal sempre que os itens do carrinho mudam
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          // Garante que a quantidade não seja menor que 1
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      }).filter(item => item.quantity > 0); // Remove item se a quantidade for 0 (opcional, pode usar botão de remover)
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-page-container">
      {/* Navbar do Carrinho */}
      <nav className="cart-navbar">
        <Link to="/" className="cart-navbar-brand">TriForce</Link>
        <h1 className="cart-page-title">Meu Carrinho</h1>
        <Link to="/produtos" className="back-to-shop-link">
          <span className="material-icons-outlined">arrow_back</span> {/* Ícone de seta para voltar */}
          Continuar Comprando
        </Link>
      </nav>

      <div className="cart-content-wrapper">
        <div className="cart-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <span className="material-icons-outlined empty-cart-icon">shopping_cart</span>
              <p>Seu carrinho está vazio.</p>
              <Link to="/produtos" className="btn-continue-shopping">
                Explorar Produtos
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image-container">
                      <img src={item.image} alt={item.name} className="item-image" />
                    </div>
                    <div className="item-details">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">R$ {item.price.toFixed(2)}</span>
                    </div>
                    <div className="item-quantity-controls">
                      <button onClick={() => handleQuantityChange(item.id, -1)} className="quantity-btn">
                        -
                      </button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)} className="quantity-btn">
                        +
                      </button>
                    </div>
                    <button onClick={() => handleRemoveItem(item.id)} className="remove-item-btn">
                      <span className="material-icons-outlined">delete</span> {/* Ícone de lixeira */}
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span className="summary-value">R$ {subtotal.toFixed(2)}</span>
                </div>
                {/* Você pode adicionar mais linhas aqui para frete, desconto, etc. */}
                {/* <div className="summary-row">
                  <span>Frete:</span>
                  <span className="summary-value">R$ 25.00</span>
                </div> */}
                <button className="btn-checkout">
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrinho;