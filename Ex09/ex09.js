const columnas = ["nombre", "edad", "ciudad"];
const datos = [
  { nombre: "Ana", edad: 20, ciudad: "Madrid" },
  { nombre: "Luis", edad: 25, ciudad: "Sevilla" },
  { nombre: "Marta", edad: 22, ciudad: "Valencia" }
];
const tabla = document.getElementById("tabla");

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

const pedir = fila => {
  for (const c of columnas) {
    const valor = prompt(`${c}:`, fila[c] ?? "");
    if (valor) fila[c] = c === "edad" ? Number(valor) : valor;
  }
};

const pintar = () => {
  tabla.replaceChildren();
  const cabecera = tabla.insertRow();
  for (const c of [...columnas, "acciones"]) cabecera.appendChild(crear("th", c));
  datos.forEach((fila, i) => {
    const tr = tabla.insertRow();
    for (const c of columnas) tr.appendChild(crear("td", fila[c] ?? ""));
    tr.insertCell().append(
      boton("Actualizar", () => { pedir(fila); pintar(); }),
      boton("Eliminar", () => { datos.splice(i, 1); pintar(); })
    );
  });
};

document.getElementById("anadir").onclick = () => {
  const fila = {};
  pedir(fila);
  datos.push(fila);
  pintar();
};

pintar();
