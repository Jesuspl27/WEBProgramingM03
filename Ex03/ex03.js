const numeros = [4, 9, 2, 15, 7];
let conteo = "", suma = 0, maximo = numeros[0], tabla = "";
for (let i = 1; i <= 10; i++) conteo += i + " ";
for (const n of numeros) {
  suma += n;
  if (n > maximo) maximo = n;
}
for (let i = 1; i <= 10; i++) tabla += `5 x ${i} = ${5 * i}\n`;

let j = 1, conteoWhile = "", sumaWhile = 0, tablaOf = "";
while (j <= 10) conteoWhile += j++ + " ";
j = 0;
while (j < numeros.length) sumaWhile += numeros[j++];
for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) tablaOf += `5 x ${i} = ${5 * i}\n`;

document.getElementById("salida").textContent =
  `Contar (for): ${conteo}\nSuma (for...of): ${suma}\nMáximo (for...of): ${maximo}\nTabla del 5 (for):\n${tabla}\n` +
  `Contar (while): ${conteoWhile}\nSuma (while): ${sumaWhile}\nTabla del 5 (for...of):\n${tablaOf}`;
