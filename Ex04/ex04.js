const validar = (...n) => {
  if (!n.length || n.some(x => typeof x !== "number" || isNaN(x))) throw new Error("Argumentos no válidos");
};
const sumar = (a, b) => (validar(a, b), a + b);
const restar = (a, b) => (validar(a, b), a - b);
const multiplicar = (a, b) => (validar(a, b), a * b);
const dividir = (a, b) => {
  validar(a, b);
  if (b === 0) throw new Error("No se puede dividir entre cero");
  return a / b;
};
const promedio = (...n) => (validar(...n), n.reduce((s, x) => s + x) / n.length);
const maximo = (...n) => (validar(...n), Math.max(...n));
const minimo = (...n) => (validar(...n), Math.min(...n));

const probar = f => {
  try { return f(); } catch (e) { return e.message; }
};

document.getElementById("salida").textContent = [
  `sumar(8, 2) = ${probar(() => sumar(8, 2))}`,
  `restar(8, 2) = ${probar(() => restar(8, 2))}`,
  `multiplicar(8, 2) = ${probar(() => multiplicar(8, 2))}`,
  `dividir(8, 2) = ${probar(() => dividir(8, 2))}`,
  `promedio(4, 8, 6) = ${probar(() => promedio(4, 8, 6))}`,
  `maximo(4, 8, 6) = ${probar(() => maximo(4, 8, 6))}`,
  `minimo(4, 8, 6) = ${probar(() => minimo(4, 8, 6))}`,
  `dividir(8, 0) = ${probar(() => dividir(8, 0))}`,
  `sumar(8, "a") = ${probar(() => sumar(8, "a"))}`
].join("\n");
