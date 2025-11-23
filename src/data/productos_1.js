import tortaChocolate from "../assets/torta-chocolate.png";
import tortaLucuma from "../assets/torta-circular-vainilla.png"; 
import pastelFrutilla from "../assets/cheesecake.png";

export const productos = [
  {
    id: 1,
    nombre: "Torta de Chocolate",
    tipo: "torta",
    precio: 15990,
    descripcion: "Deliciosa torta casera de chocolate.",
    imagen: tortaChocolate
  },
  {
    id: 2,
    nombre: "Torta de Lúcuma",
    tipo: "torta",
    precio: 17990,
    descripcion: "Torta tradicional de lúcuma artesanal.",
    imagen: tortaLucuma
  },
  {
    id: 3,
    nombre: "Pastel de Frutilla",
    tipo: "pastel",
    precio: 8990,
    descripcion: "Suave pastel con crema y frutillas frescas.",
    imagen: pastelFrutilla
  }
];
