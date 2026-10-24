const numeros = [12, -5, 8, 0, 7, -3, 20, 15, -8, 4];
const positivos = numeros.filter(n => n > 0);
const negativos = numeros.filter(n => n < 0);
const pares = numeros.filter(n => n % 2 === 0);
const impares = numeros.filter(n => n % 2 !== 0);
const maximo = Math.max(...numeros);
const minimo = Math.min(...numeros);
const suma = numeros.reduce((s, n) => s + n, 0);
const media = suma / numeros.length;
const ordenados = [...numeros].sort((a, b) => a - b);
const mitad = Math.floor(ordenados.length / 2);
const mediana = ordenados.length % 2 ? ordenados[mitad] : (ordenados[mitad - 1] + ordenados[mitad]) / 2;

document.getElementById("salida").textContent = [
  `Números: ${numeros.join(", ")}`,
  `Positivos: ${positivos.join(", ")} (${positivos.length})`,
  `Negativos: ${negativos.join(", ")} (${negativos.length})`,
  `Pares: ${pares.join(", ")} (${pares.length})`,
  `Impares: ${impares.join(", ")} (${impares.length})`,
  `Mayor: ${maximo}`,
  `Menor: ${minimo}`,
  `Media: ${media}`,
  `Suma: ${suma}`,
  `Mediana: ${mediana}`,
  `Rango: ${maximo - minimo}`,
  `Cantidad de ceros: ${numeros.filter(n => n === 0).length}`
].join("\n");
