import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Listar from './componentes/listar'
import Aleatorio from './componentes/aleatorio'
import Detalle from './componentes/detalle'
import Favoritos from './componentes/favoritos'
import Original from './componentes/original'
import Usuario from './componentes/usuario'
import Menu from './componentes/menu';

function App() {
  

  return (
    <Router>

      <Menu />
     
      <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/aleatorio" element={<Aleatorio />} />
        <Route path="/original" element={<Original />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalle/:nombre" element={<Detalle />} />
      </Routes>
   
    </Router>
  )
}

export default App
