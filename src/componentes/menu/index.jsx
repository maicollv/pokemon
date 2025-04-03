import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="c-menu">
          <Link to="/">Listar</Link>
          <Link to="/original">Original</Link>
          <Link to="/aleatorio">Aleatorio</Link>
          <Link to="/usuario">Usuario</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/detalle">Detalle</Link>
        </nav>
    )
  }
 
  export default Menu



