import { Routes, Route } from "react-router-dom";

import BarraNavegacion from "./components/BarraNavegacion";
import Portada from "./components/Portada";
import CatalogoDulces from "./components/CatalogoDulces";
import CarritoCompras from "./components/CarritoCompras";
import Pedido from "./components/Pedido";
import ResumenBoleta from "./components/ResumenBoleta";
import SeguimientoPedido from "./components/SeguimientoPedido";
import PerfilUsuario from "./components/PerfilUsuario";
import RegistroUsuario from "./components/RegistroUsuario";

export default function App() {
  return (
    <div>
      <BarraNavegacion />

      <Routes>
        {/* Inicio = portada + catálogo juntos */}
        <Route
          path="/"
          element={
            <>
              <Portada />
              <CatalogoDulces />
            </>
          }
        />

        {/* Rutas limpias */}
        <Route path="/catalogo" element={<CatalogoDulces />} />
        <Route path="/carrito" element={<CarritoCompras />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/boleta" element={<ResumenBoleta />} />
        <Route path="/seguimiento" element={<SeguimientoPedido />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/registro" element={<RegistroUsuario />} />
      </Routes>
    </div>
  );
}
