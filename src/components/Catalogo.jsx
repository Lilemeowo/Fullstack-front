import { useState } from "react";
import Filtros from "./Filtros";
import Productos from "./Productos";
import "../styles/catalogo.css";

export default function Catalogo() {
  const [filtro, setFiltro] = useState("");

  return (
    <section id="catalogo" className="catalogo">
      <h2>Catálogo de Productos</h2>

      <Filtros onFiltrar={setFiltro} />
      <Productos filtro={filtro} />
    </section>
  );
}
