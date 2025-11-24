// src/components/Portada.jsx
import { Link } from "react-router-dom";
import "../styles/portada.css";
import logo2 from "../assets/logo2.png";

export default function Portada() {
  return (
    <section className="portada page">
      <div className="portada-main">
        <p className="portada-tag">Pastelería artesanal en Santiago</p>

        <h2 className="portada-title">
          Pedir tu torta favorita ahora es más fácil.
        </h2>

        <p className="portada-subtitle">
          Explora nuestro catálogo, arma tu pedido y coordina la entrega en
          pocos pasos. Sin llamadas ni filas.
        </p>

        <div className="portada-actions">
          <Link to="/catalogo" className="btn-primary">
            Ver catálogo
          </Link>
          <Link to="/carrito" className="btn-secondary">
            Ver carrito
          </Link>
        </div>
      </div>

          <div className="portada-visual">
        <div className="portada-imagen-placeholder">
          <img
            src={logo2}
            alt="Torta destacada"
            className="portada-imagen"
          />
        </div>
      </div>
    </section>
  );
}
