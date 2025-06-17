import { Link } from 'react-router-dom';

import '../styles/home.css'; // Se quiser usar CSS separado

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <header className="top-nav">
            <div className="logo">3<span>Force</span></div>
            <input type="text" className="search" placeholder="O que você está procurando?" />
            <div className="icons">
              <Link to="/CadastroProduto">🤖</Link>
              <Link to="/Favorito">❤️</Link>
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
            <div className="produtos">
              <div className="produto">
                <img src="" alt="Sapatilha Triatlon" />
                <h3>SAPATILHA TRIATLON FIZIK HYDRA</h3>
                <p>R$ 1.899,90</p>
                <p>R$ 1.809,00 COM PIX</p>
                <p>6x de R$ 316,65 sem juros</p>
              </div>
              <div className="produto">
                <img src="" alt="Bicicleta Cervélo" />
                <h3>BICICLETA NEW CERVÉLO P5 DISC</h3>
                <p>R$ 82.990,00</p>
                <p>R$ 80.499,90 COM PIX</p>
                <p>12x de R$ 7.499,99 sem juros</p>
              </div>
              <div className="produto">
                <img src="" alt="Tênis Adizero" />
                <h3>TÊNIS ADIZERO ADIOS PRO EVO 1</h3>
                <p>R$ 8.499,90</p>
                <p>R$ 8.299,90 COM PIX</p>
                <p>12x de R$ 408,00 sem juros</p>
              </div>
            </div>
          </section>

          <footer>
            {/* Footer aqui */}
          </footer>
        </div>
      </header>
    </div>
  );
};

export default Home;
