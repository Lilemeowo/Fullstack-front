import { createContext, useState } from "react";

export const PedidoContext = createContext();

export function PedidoProvider({ children }) {
  const [pedido, setPedido] = useState(null);

  const crearPedido = (data) => {
    setPedido({
      ...data,
      id: Math.floor(Math.random() * 1000000),
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      estadoIndex: 0
    });
  };

  const avanzarEstado = () => {
    setPedido((prev) => ({
      ...prev,
      estadoIndex: prev.estadoIndex + 1
    }));
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido,
        crearPedido,
        avanzarEstado
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
}
