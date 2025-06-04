import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Triforce</Link>
      </nav>

      <div className="main-container">
        <h3>Minha Conta</h3>

        <form className="form-container">
          <div className="form-grid">
            <input type="text" id="campo1" name="campo1" placeholder="Nome*" />
            <input type="password" id="campo5" name="campo5" placeholder="Senha*" />
          </div>

          <div className="action-row">
            <button type="button">Entrar</button>
            <button type="button">Facebook</button>
            <button type="button">Google</button>
          </div>

          <div className="recuperar-senha">
            <Link to="/EsqueceuSenha"><h6>Esqueceu senha?</h6></Link>
          </div>

          <div className="criar-conta">
            <Link to="/Cadastro"><h6>Não tem uma conta? Crie aqui!</h6></Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;