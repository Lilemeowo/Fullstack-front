import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/barranavegacion.css";

export default function BarraNavegacion() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo Pastelería" className="logo" />
        <h1 className="nombre-sitio">Pastelería Mil Sabores</h1>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
}
