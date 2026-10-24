const normalizar = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const contarCaracteres = t => t.length;
const invertir = t => [...t].reverse().join("");
const contarPalabras = t => t.trim().split(/\s+/).filter(Boolean).length;
const buscarPalabra = (t, p) => normalizar(t).split(/\s+/).includes(normalizar(p));
const esPalindromo = t => {
  const limpio = normalizar(t).replace(/[^a-z0-9]/g, "");
  return limpio === invertir(limpio);
};

const texto = "Hola Mundo desde JavaScript";
const frase = "Anita lava la tina";

document.getElementById("salida").textContent = [
  `Texto: "${texto}"`,
  `Caracteres: ${contarCaracteres(texto)}`,
  `Invertido: ${invertir(texto)}`,
  `Palabras: ${contarPalabras(texto)}`,
  `¿Contiene "MUNDO"?: ${buscarPalabra(texto, "MUNDO") ? "Si" : "No"}`,
  `¿Contiene "python"?: ${buscarPalabra(texto, "python") ? "Si" : "No"}`,
  `¿"${frase}" es palindromo?: ${esPalindromo(frase) ? "Si" : "No"}`,
  `¿"${texto}" es palindromo?: ${esPalindromo(texto) ? "Si" : "No"}`
].join("\n");
