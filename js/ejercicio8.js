const Procesonotas = () => {
  const notas = [1,4, 10, 5, 7, 9, 3, 6, 8, 2];
  let sumaTotal = 0;
  let cantidadAprobados = 0;

  console.log("a) Todas las notas cargadas ");
  for ( let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i + 1}: ${notas[i]}`);

    sumaTotal += notas[i];

   //contamos las notas mayores a 5 y las guardamos
    if (notas[i] >= 6) {
      cantidadAprobados++;
    }
  }
      //Notas aprobados
  console.log("\nb) Notas Aprobadas");
  notas.forEach((nota) => {
    if (nota >= 6) {
      console.log(nota);
    }
  }); 
      //Notas desaprobadas
  console.log("c) Notas desaprobadas (<6) ");
  notas.forEach((nota) => {
    if (nota < 6) {
      console.log(nota);
    }
  });
       //Mostramos el promedio genetal y cantidad de aprobados
  const promedio = sumaTotal / notas.length;
  console.log(`d) Promedio general: ${promedio}`);
  console.log(`e) Cantidad de aprobados: ${cantidadAprobados}`);
};

Procesonotas();
