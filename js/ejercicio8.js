// Ejercicio 8 - TP2
// Consigna: Declarar una arrey de 10 y realizar distintas operaciones sobre el.

// Nombre corregidos a camelCase: procesarNotas
const Procesonotas = () => {
  // Array con 10 nota enteras
  const notas = [1, 4, 10, 5, 7, 9, 3, 6, 8, 2];
  
  let sumaTotal = 0; // Acumulador para calcular el promedio general
  let cantidadAprobados = 0; // Contador de notas aprobadas (>= 6)

  // a) Se recorre el array completo mostrado cada nota
  console.log("a) Todas las notas cargadas:");
  for ( let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i + 1}: ${notas[i]}`);

    sumaTotal += notas[i]; // Se acumula cada nota para calcular el promedio

   // Se cuenta cuantas notas son aprobadas (>=6)
    if (notas[i] >= 6) {
      cantidadAprobados++;
    }
  }
  // b) Se muestran solo las notas aprobadas (>=6)
  console.log("\nb) Notas Aprobadas (>=6):");
  notas.forEach((nota) => {
    if (nota >= 6) {
      console.log(nota);
    }
  });
  
  // c) Se muestran solo las notas desaprobadas (<6)
  console.log("\nc) Notas desaprobadas (<6):");
  notas.forEach((nota) => {
    if (nota < 6) {
      console.log(nota);
    }
  });
  
  // d) Se calcula el promedio dividiendo la suma total por la cantidad de notas  
  const promedio = sumaTotal / notas.length;
  console.log(`\nd) Promedio general: ${promedio}`);

  // e) Se muestra la cantidaad de notas aprobadas conadas en el bucle anterior
  console.log(`e) Cantidad de aprobados: ${cantidadAprobados}`);
};

// Se llama a la funcion principal
Procesonotas();
