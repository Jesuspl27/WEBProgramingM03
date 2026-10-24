const mapear = (a, f) => {
  const r = [];
  for (let i = 0; i < a.length; i++) r.push(f(a[i], i));
  return r;
};
const filtrar = (a, f) => {
  const r = [];
  for (const x of a) if (f(x)) r.push(x);
  return r;
};
const encontrar = (a, f) => {
  for (const x of a) if (f(x)) return x;
};
const reducir = (a, f, inicial) => {
  let acumulado = inicial;
  for (const x of a) acumulado = f(acumulado, x);
  return acumulado;
};
const incluye = (a, v) => {
  for (const x of a) if (x === v) return true;
  return false;
};
const invertir = a => {
  const r = [];
  for (let i = a.length - 1; i >= 0; i--) r.push(a[i]);
  return r;
};

const numeros = [1, 2, 3, 4, 5, 6];

document.getElementById("salida").textContent = [
  `Array: ${JSON.stringify(numeros)}`,
  `mapear (x * 2): ${JSON.stringify(mapear(numeros, x => x * 2))}`,
  `filtrar (pares): ${JSON.stringify(filtrar(numeros, x => x % 2 === 0))}`,
  `encontrar (> 3): ${encontrar(numeros, x => x > 3)}`,
  `reducir (suma): ${reducir(numeros, (acc, x) => acc + x, 0)}`,
  `incluye (4): ${incluye(numeros, 4)}`,
  `incluye (10): ${incluye(numeros, 10)}`,
  `invertir: ${JSON.stringify(invertir(numeros))}`
].join("\n");
