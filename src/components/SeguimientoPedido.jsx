import { useContext } from "react";
import { PedidoContext } from "../context/PedidoContext";
import { trackingEstados } from "../data/trackingEstados";
import "../styles/seguimiento.css";

export default function SeguimientoPedido() {
  const { pedido, avanzarEstado } = useContext(PedidoContext);

  if (!pedido) {
    return (
      <section className="SeguimientoPedido">
        <h2>Seguimiento del Pedido</h2>
        <p>No hay un pedido generado todavía.</p>
      </section>
    );
  }

  const estadoActual = pedido.estadoIndex;

  return (
    <section className="Seguimiento">
      <h2>Seguimiento del Pedido</h2>

      <p className="estado-actual">
        Estado actual: <strong>{trackingEstados[estadoActual]}</strong>
      </p>

      <div className="Seguimiento-linea">
        {trackingEstados.map((estado, i) => (
          <div
            key={i}
            className={`Seguimiento-punto ${i <= estadoActual ? "activo" : ""}`}
            title={estado}
          ></div>
        ))}
      </div>

      <div className="seguimiento-botones">
        <button
          onClick={avanzarEstado}
          disabled={estadoActual >= trackingEstados.length - 1}
        >
          Avanzar estado →
        </button>
      </div>
    </section>
  );
}
