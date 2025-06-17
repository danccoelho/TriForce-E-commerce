// src/components/Login.jsx
import React, { useState } from 'react'; // <--- Adicione useState aqui
import { Link } from 'react-router-dom';
import axios from 'axios'; // <--- Adicione axios aqui
import '../styles/login.css'; // Make sure this path is correct
import GoogleLogo from '../assets/search.png';
import FacebookLogo from '../assets/facebook.png';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', senha: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value}));
    };

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post('http://localhost:3001/api/login', formData);
        alert(res.data.message);
        console.log(res.data);
        // redirecionar para dashboard ou página protegida
      } catch (err) {
        console.error('Erro no login:', err);
        alert('Falha no login. Verifique seu e-mail e senha.');
      }
    };


    return (
      <div className="registration-page">
        <div className="login-wrapper">
            <div className="login-container">
                <h1 className="login-title"><Link to="/">TriForce</Link></h1>

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email" className="sr-only">email</label>
                        <input type="email"
                               name="email"
                               placeholder="Email*"
                               value={formData.email}
                               onChange={handleChange}
                               required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" className="sr-only">Senha</label>
                        <input type="password"
                               name="senha"
                               placeholder="Senha*"
                               value={formData.senha}
                               onChange={handleChange}
                               required/>
                    </div>

                    <div className="form-options">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Lembrar-me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn-login">Entrar</button>

                    <div className="centered-link-container">
                        <Link to="/forgot-password" className="forgot-password">Esqueceu a senha?</Link>
                    </div>

                    <div className="social-login">
                        <p className="or-separator"><span>ou</span></p>
                        <button type="button" className="btn-social google">
                            <img src={GoogleLogo} alt="Google Logo" />
                            Entrar com Google
                        </button>
                        <button type="button" className="btn-social facebook">
                            <img src={FacebookLogo} alt="Facebook Logo" />
                            Entrar com Facebook
                        </button>
                    </div>
                </form>

                <div className="centered-link-container">
                    <p className="signup-link">
                        Não tem uma conta? <Link to="/Cadastro">Cadastre-se aqui!</Link>
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Login; 