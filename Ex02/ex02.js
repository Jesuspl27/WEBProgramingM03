const nota = Number(prompt("Introduce una nota (0-10):"));
let clasificacion;
if (isNaN(nota) || nota < 0 || nota > 10) clasificacion = "Nota no válida";
else if (nota < 5) clasificacion = "Suspenso";
else if (nota < 7) clasificacion = "Aprobado";
else if (nota < 9) clasificacion = "Notable";
else clasificacion = "Sobresaliente";
document.getElementById("salida").textContent = `Nota: ${nota} → ${clasificacion}`;
