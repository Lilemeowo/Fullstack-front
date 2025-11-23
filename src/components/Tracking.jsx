import { useContext } from "react";
import { PedidoContext } from "../context/PedidoContext";
import { trackingEstados } from "../data/trackingEstados";
import "../styles/tracking.css";

export default function Tracking() {
  const { pedido, avanzarEstado } = useContext(PedidoContext);

  if (!pedido) {
    return (
      <section className="tracking">
        <h2>Seguimiento del Pedido</h2>
        <p>No hay un pedido generado todavía.</p>
      </section>
    );
  }

  const estadoActual = pedido.estadoIndex;

  return (
    <section className="tracking">
      <h2>Seguimiento del Pedido</h2>

      <p className="estado-actual">
        Estado actual: <strong>{trackingEstados[estadoActual]}</strong>
      </p>

      <div className="tracking-linea">
        {trackingEstados.map((estado, i) => (
          <div
            key={i}
            className={`tracking-punto ${i <= estadoActual ? "activo" : ""}`}
            title={estado}
          ></div>
        ))}
      </div>

      <div className="tracking-botones">
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
