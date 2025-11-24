import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { productos } from "../data/productos_1";   // ← CORREGIDO
import "../styles/catalogodulces.css";



export default function TarjetasProducto({ filtro }) {
  const { agregarAlCarrito } = useContext(CartContext);

  const productosFiltrados = filtro
    ? productos.filter((p) => p.tipo === filtro)
    : productos;

  return (
    <div className="productos">
      {productosFiltrados.map((prod) => (
        <div key={prod.id} className="producto-card">
          <img src={prod.imagen} alt={prod.nombre} />
          <h3>{prod.nombre}</h3>
          <p>{prod.descripcion}</p>
          <span className="precio">${prod.precio.toLocaleString()}</span>

          <button onClick={() => agregarAlCarrito(prod)}>
            Agregar al Carrito
          </button>
        </div>
      ))}
    </div>
  );
}
