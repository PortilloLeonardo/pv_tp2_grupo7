// Ejercicio 5 - TP2
// Consigna: Convertir horas y minutos a segundos y mostrar el resultado por consola

let segundos = 0; //Variable acumuladora que almacenara el total de segundos 

// Funcion flecha que recibe horas y minutos y los convierte a segundos
const convertirSegundos = (hora, minutos) => {
  const segundos
  // Bucle externo: itera por cada hora
  for (hora; hora >= 0; hora--) {
    // Bucle interno: por cada minuto se suman 60 segundos
    for (minutos; minutos != 0; minutos--) {
      segundos = segundos + 60; // Cada minuto equivale a 60 segundos
    }
    minutos = minutos + 60; // Al terminar los minutos de una hora, se reinician a 60
  }

  // Se muestra el total de segundos por consola 
  console.log(segundos);
};

// Se llama a la funcion con 1 hora y 10 minutos
// Resultado esperado: 4200 segundos 
convertirSegundos(1, 10);
