// src/routes/Router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
// outros imports...

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Login" element = {<Login/>}/>
      <Route path="/Cadastro" element = {<Cadastro/>}/> 
    </Routes>
  </BrowserRouter>
);

export default Router;