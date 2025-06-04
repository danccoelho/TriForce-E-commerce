import { Link } from 'react-router-dom';
import '../styles/home.css'; // Se quiser usar CSS separado

const Home = () => {
  return (
    <div className="container">
      <header className="top-nav">
        <div className="logo">
          3<span>Force</span>
        </div>
        <input type="text" className="search" placeholder="O que você está procurando?" />
        <div className="icons">
          <Link to="/CarrinhoDeCompras">❤️</Link>
          <Link to="/Carrinho">🛍️</Link>
          <Link to="/Login">👤</Link>
        </div>
      </header>

      <section className="banner">
        <div className="banner-text">
          <h2>PROPULSÃO</h2>
          <p>Coleção de inverno para corrida</p>
          <button>VER COLEÇÃO</button>
        </div>
      </section>

       <section className="benefits">
        <div>📦 Frete grátis na primeira compra*</div>
        <div>💰 10% de cashback em compras acima de R$ 399,99*</div>
        <div>🔁 Compre no site e troque em loja*</div>
        <div>💳 Pague com Pix e ganhe 5% OFF*</div>
      </section>

      <section className="categorias">
        <div className="categoria">🏊 NATAÇÃO</div>
        <div className="categoria">🚴 CICLISMO</div>
        <div className="categoria">🏃 CORRIDA</div>
      </section>

      <section className="ofertas-relampago">
        <h2>OFERTAS RELÂMPAGO</h2>
        <p>Em breve, ofertas incríveis para você!</p>
      </section>

       <footer>
        <div>
          Copyright © 2025 3Force - Todos os direitos reservados.
        </div>
      </footer>

    </div>

  );
};

export default Home;