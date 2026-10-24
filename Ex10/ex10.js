const productos = [
  { id: 1, nombre: "Portatil", precio: 899 },
  { id: 2, nombre: "Raton", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 60 }
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const crear = (etiqueta, texto) => {
  const elemento = document.createElement(etiqueta);
  elemento.textContent = texto;
  return elemento;
};

const boton = (texto, accion) => {
  const b = crear("button", texto);
  b.onclick = accion;
  return b;
};

const pintar = () => {
  const lista = document.getElementById("carrito");
  lista.replaceChildren();
  for (const item of carrito) {
    const li = crear("li", `${item.nombre} - ${item.precio}E x ${item.cantidad} `);
    li.append(
      boton("-", () => cambiar(item, -1)),
      boton("+", () => cambiar(item, 1)),
      boton("Quitar", () => cambiar(item, -item.cantidad))
    );
    lista.appendChild(li);
  }
  const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const cantidad = carrito.reduce((s, i) => s + i.cantidad, 0);
  document.getElementById("resumen").textContent = `Total: ${total}E - Productos: ${cantidad}`;
};

const guardar = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  pintar();
};

const cambiar = (item, delta) => {
  item.cantidad += delta;
  if (item.cantidad < 1) carrito = carrito.filter(i => i !== item);
  guardar();
};

const anadir = producto => {
  const item = carrito.find(i => i.id === producto.id);
  if (item) cambiar(item, 1);
  else {
    carrito.push({ ...producto, cantidad: 1 });
    guardar();
  }
};

for (const p of productos) {
  const li = crear("li", `${p.nombre} - ${p.precio}E `);
  li.appendChild(boton("Anadir", () => anadir(p)));
  document.getElementById("productos").appendChild(li);
}

pintar();
