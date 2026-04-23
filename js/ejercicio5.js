// Ejercicio 5 - TP2
// Consigna: Declarar dos variables denominadas horas, minutos, asignar valores a cada una y
// realizar la conversión para expresar esas horas y minutos en segundos. Mostrar por consola
// las horas y minutos, luego el resultado de la conversión en segundos.

let segundos = 0;

const convertirSegundos = (hora, minutos) => {
  for (hora; hora >= 0; hora--) {
    for (minutos; minutos != 0; minutos--) {
      segundos = segundos + 60;
    }
    minutos = minutos + 60;
  }

  console.log(segundos);
};

convertirSegundos(1, 10);
