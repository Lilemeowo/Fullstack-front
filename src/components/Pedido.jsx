import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { PedidoContext } from "../context/PedidoContext";
import "../styles/pedido.css";

export default function Pedido() {
  const { carrito, total, vaciarCarrito } = useContext(CartContext);
  const { usuario } = useContext(UserContext);
  const { crearPedido } = useContext(PedidoContext);

  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!direccion || !telefono) {
      setError("Todos los campos son obligatorios.");
      setMensaje("");
      return;
    }

    if (carrito.length === 0) {
      setError("El carrito está vacío.");
      setMensaje("");
      return;
    }

    // Crear pedido REAL en el contexto
    crearPedido({
      cliente: usuario?.nombre || "Cliente",
      direccion,
      telefono,
      productos: carrito,
      total
    });

    // Vaciar carrito
    vaciarCarrito();

    setError("");
    setMensaje("Pedido confirmado 🎉 ¡Puedes revisar la boleta!");
  };

  return (
    <section id="pedido" className="pedido">
      <h2>Confirmar Pedido</h2>

      {/* RESUMEN DEL PEDIDO */}
      <div className="resumen-pedido">
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {carrito.map((item) => (
              <div className="item-pedido" key={item.id}>
                <h3>{item.nombre}</h3>
                <p>
                  {item.cantidad} × ${item.precio.toLocaleString()}
                </p>
              </div>
            ))}

            <p className="total-pedido">
              Total: <strong>${total.toLocaleString()}</strong>
            </p>
          </>
        )}
      </div>

      {/* FORMULARIO DE PEDIDO */}
      <form className="form-pedido" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button type="submit">Confirmar Pedido</button>
      </form>

      {error && <p className="alerta-error">{error}</p>}
      {mensaje && <p className="alerta-ok">{mensaje}</p>}
    </section>
  );
}
