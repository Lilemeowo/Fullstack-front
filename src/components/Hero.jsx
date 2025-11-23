import pareja from "../assets/pareja-cocinando.png";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <h2>Bienvenido a Pastelería 1000 Sabores</h2>
        <p>Los mejores pasteles, tortas y postres artesanales</p>

        <a href="#catalogo" className="btn-hero">
          Ver Catálogo
        </a>
      </div>

      <div className="hero-image">
        <img src={pareja} alt="Pareja cocinando" />
      </div>
    </section>
  );
}
