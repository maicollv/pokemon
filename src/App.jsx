import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import Listar from './componentes/listar'
import Aleatorios from './componentes/aleatorio'
import Detalle from './componentes/detalle'
import Favoritos from './componentes/favoritos'
import Original from './componentes/original'
import Usuario from './componentes/usuario'
import Menu from './componentes/menu';

function App() {
  

  return (
    <AppProvider>
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/aleatorio" element={<Aleatorios />} />
        <Route path="/original" element={<Original />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalle/:name" element={<Detalle />} />
      </Routes>

    </Router>
    </AppProvider>
  )
}

export default App
