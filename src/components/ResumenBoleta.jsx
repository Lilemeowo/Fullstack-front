import { useContext } from "react";
import { PedidoContext } from "../context/PedidoContext";
import "../styles/resumenboleta.css";

export default function ResumenBoleta() {
  const { pedido } = useContext(PedidoContext);

  
  if (!pedido) {
    return (
      <section className="boleta">
        <h2>Boleta de Compra |Milsabores|</h2>
        <p>No hay un pedido generado todavía.</p>
      </section>
    );
  }

  const total = pedido.productos.reduce(
    (sum, p) => sum + p.precio * p.cantidad,
    0
  );

  return (
    <section className="boleta">
      <h2>Boleta de Compra</h2>

      <div className="boleta-card">
        <p><strong>N° Pedido:</strong> {pedido.id}</p>
        <p><strong>Fecha:</strong> {pedido.fecha}</p>
        <p><strong>Hora:</strong> {pedido.hora}</p>

        <hr />

        <p><strong>Cliente:</strong> {pedido.cliente}</p>
        <p><strong>Dirección:</strong> {pedido.direccion}</p>
        <p><strong>Teléfono:</strong> {pedido.telefono}</p>

        <hr />

        <h3>Detalles del Pedido</h3>

        <div className="boleta-items">
          {pedido.productos.map((item) => (
            <div key={item.id} className="boleta-item">
              <span>
                {item.nombre} (x{item.cantidad})
              </span>
              <span>${(item.precio * item.cantidad).toLocaleString()}</span>
            </div>
          ))}
        </div>

        <hr />

        <p className="boleta-total">
          Total: <strong>${total.toLocaleString()}</strong>
        </p>
      </div>
    </section>
  );
}
