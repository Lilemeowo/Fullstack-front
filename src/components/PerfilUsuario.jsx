import { useState } from "react";
import "../styles/forms.css";

export default function PerfilUsuario() {
  const [nombre, setNombre] = useState("Usuario Ejemplo");
  const [email, setEmail] = useState("usuario@email.com");

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email) {
      setError("Todos los campos son obligatorios.");
      setMensaje("");
      return;
    }

    setError("");
    setMensaje("Perfil actualizado ");

    // Más adelante aquí guardaremos en UserContext o backend
  };

  return (
    <section id="perfil" className="perfil">
      <h2>Perfil del Usuario</h2>

      <form onSubmit={handleSubmit} className="form-registro">
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Actualizar</button>
      </form>

      {error && <p className="alerta-error">{error}</p>}
      {mensaje && <p className="alerta-ok">{mensaje}</p>}
    </section>
  );
}
