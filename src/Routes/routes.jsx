import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Carrinho from '../pages/Carrinho';
import Favorito from '../pages/Favorito';
import CadastroProduto from '../pages/CadastroProduto';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Login" element = {<Login/>}/>
      <Route path="/Cadastro" element = {<Cadastro/>}/>
      <Route path="/Carrinho" element = {<Carrinho/>}/>
      <Route path="/Favorito" element = {<Favorito/>}/>
      <Route path="/CadastroProduto" element = {<CadastroProduto/>}/>
    </Routes>
  </BrowserRouter>
);

export default Router;