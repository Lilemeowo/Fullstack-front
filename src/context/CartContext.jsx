import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((p) => p.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const aumentar = (id) => {
    setCarrito(
      carrito.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const disminuir = (id) => {
    setCarrito(
      carrito.map((p) =>
        p.id === id && p.cantidad > 1
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      )
    );
  };

  const eliminar = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  const total = carrito.reduce(
    (sum, p) => sum + p.precio * p.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        aumentar,
        disminuir,
        eliminar,
        vaciarCarrito,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
