const productos = [
  { nombre: "Portátil", precio: 899, categoria: "Informática", disponible: true },
  { nombre: "Ratón", precio: 25, categoria: "Informática", disponible: true },
  { nombre: "Teclado", precio: 60, categoria: "Informática", disponible: false },
  { nombre: "Auriculares", precio: 80, categoria: "Audio", disponible: true },
  { nombre: "Altavoz", precio: 120, categoria: "Audio", disponible: false }
];

const buscar = texto => productos.filter(p => p.nombre.toLowerCase().includes(texto.toLowerCase()));
const filtrarPorCategoria = categoria => productos.filter(p => p.categoria === categoria);
const filtrarDisponibles = () => productos.filter(p => p.disponible);
const ordenarPorPrecio = (ascendente = true) => [...productos].sort((a, b) => ascendente ? a.precio - b.precio : b.precio - a.precio);
const ordenarPorNombre = () => [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
const mostrar = lista => lista.map(p => `${p.nombre} - ${p.precio}€ - ${p.categoria} - ${p.disponible ? "Disponible" : "Agotado"}`).join("\n");

document.getElementById("salida").textContent = [
  `Todos:\n${mostrar(productos)}`,
  `Búsqueda "ra":\n${mostrar(buscar("ra"))}`,
  `Categoría "Audio":\n${mostrar(filtrarPorCategoria("Audio"))}`,
  `Disponibles:\n${mostrar(filtrarDisponibles())}`,
  `Precio ascendente:\n${mostrar(ordenarPorPrecio())}`,
  `Precio descendente:\n${mostrar(ordenarPorPrecio(false))}`,
  `Nombre A-Z:\n${mostrar(ordenarPorNombre())}`
].join("\n\n");
