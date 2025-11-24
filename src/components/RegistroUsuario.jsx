import { useState } from "react";
import "../styles/forms.css";

export default function RegistroUsuario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica (igual que en tu app.js original)
    if (!nombre || !email || !password) {
      setError("Todos los campos son obligatorios.");
      setMensaje("");
      return;
    }

    setError("");
    setMensaje("Usuario registrado correctamente 🎉");

    // Aquí más adelante guardaremos en UserContext o en un backend
  };

  return (
    <section id="registro" className="registro">
      <h2>Registro de Usuario</h2>

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

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Registrarse</button>
      </form>

      {error && <p className="alerta-error">{error}</p>}
      {mensaje && <p className="alerta-ok">{mensaje}</p>}
    </section>
  );
}
