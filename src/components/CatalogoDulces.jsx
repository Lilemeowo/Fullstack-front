import { useState } from "react";
import Filtros from "./SelectorCategoria";
import Productos from "./TarjetasProducto";
import "../styles/catalogodulces.css";

export default function CatalogoDulces() {
  const [filtro, setFiltro] = useState("");

  return (
    <section id="catalogo" className="catalogo">
      <h2>Catálogo de Productos</h2>

      <Filtros onFiltrar={setFiltro} />
      <Productos filtro={filtro} />
    </section>
  );
}
