import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';
import { supabase } from "./supabase";

import Listar from './componentes/listar'
import Aleatorios from './componentes/aleatorio'
import Detalle from './componentes/detalle'
import Favoritos from './componentes/favoritos'
import Original from './componentes/original'
import Usuario from './componentes/usuario'
import Menu from './componentes/menu';
import Login from './componentes/login';
import Registro from './componentes/registro';
import Administrador from './componentes/administrador';

function App() {
const [usuario, setUsuario] = useState(null);
const [cargando, setCargando] = useState(true);

useEffect(() => {
async function verificarSesion() {
const { data: { session } } = await supabase.auth.getSession();
setUsuario(session?.user || null);
setCargando(false);
}
verificarSesion();

// Escucha cambios en la sesión
supabase.auth.onAuthStateChange((_event, session) => {

setUsuario(session?.user || null);
});
}, []);

if (cargando) return <p>Cargando...</p>;
return (
<AppProvider>
<Router>
{usuario && <Menu />}

<Routes>
<Route path="/" element={usuario ? <Listar /> : <Navigate to="/login"/>} />
<Route path="/usuario" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
<Route path="/aleatorio" element={usuario ? <Aleatorios /> :<Navigate to="/login" />} />
<Route path="/original" element={usuario ? <Original /> :<Navigate to="/login" />} />
<Route path="/favoritos" element={usuario ? <Favoritos /> :<Navigate to="/login" />} />
<Route path="/detalle/:name" element={usuario ? <Detalle /> :<Navigate to="/login" />} />

<Route path="/login" element={<Login/>} />
<Route path="/registro" element={<Registro/>} />
<Route path="/administrador" element={<Administrador/>} />

</Routes>
</Router>
</AppProvider>
);
}
export default App;
