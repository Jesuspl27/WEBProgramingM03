const estudiante = {
  nombre: "Ana García",
  edad: 20,
  matriculado: true,
  asignaturas: ["Programación Web", "Bases de Datos", "Redes"]
};
document.getElementById("salida").textContent = `Nombre: ${estudiante.nombre}\nEdad: ${estudiante.edad}\nMatriculado: ${estudiante.matriculado ? "Sí" : "No"}\nAsignaturas: ${estudiante.asignaturas.join(", ")}`;
