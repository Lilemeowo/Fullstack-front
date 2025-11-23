import "../styles/catalogo.css";

export default function Filtros({ onFiltrar }) {

  const manejarCambio = (e) => {
    onFiltrar(e.target.value);
  };

  return (
    <div className="filtros">
      <select onChange={manejarCambio}>
        <option value="">Todos</option>
        <option value="torta">Tortas</option>
        <option value="pastel">Pasteles</option>
      </select>
    </div>
  );
}


