import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import Carrito from "./components/Carrito";
import Pedido from "./components/Pedido";
import Boleta from "./components/Boleta";
import Tracking from "./components/Tracking";
import Perfil from "./components/Perfil";
import Registro from "./components/Registro";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Catalogo />
            </>
          }
        />

        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/boleta" element={<Boleta />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}
