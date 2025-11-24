import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "../styles/carritocompra.css";


export default function CarritoCompras() {
  const {
    carrito,
    aumentar,
    disminuir,
    eliminar,
    total
  } = useContext(CartContext);

  return (
    <section id="carrito" className="carrito">
      <h2>Carrito de Compras</h2>

      <div className="carrito-items">
        {carrito.length === 0 ? (
          <p className="vacio">Aun no hay articulos en tu carrito </p>
        ) : (
          carrito.map((item) => (
            <div className="item-carrito" key={item.id}>
              <img src={item.imagen} alt={item.nombre} />

              <div className="info">
                <h3>{item.nombre}</h3>
                <p>${item.precio.toLocaleString()}</p>

                <div className="cantidad">
                  <button onClick={() => disminuir(item.id)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => aumentar(item.id)}>+</button>
                </div>

                <button
                  className="eliminar"
                  onClick={() => eliminar(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {carrito.length > 0 && (
        <p className="total">
          Total: <strong>${total.toLocaleString()}</strong>
        </p>
      )}
    </section>
  );
}
