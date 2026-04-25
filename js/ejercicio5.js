// Ejercicio 5 - TP2
// Consigna: Convertir horas y minutos a segundos y mostrar el resultado por consola
 
const convertirSegundos = (hora, minutos) => {
  // Primero se muestran los valores originales ingresados
  console.log(`Horas: ${horas}, Minutos: ${minutos}`);
 
  // Formula de conversion:
  // 1 hora = 3600 segundos (60 min * 60 seg)
  // 1 minuto = 60 segundos
  const segundos = (horas * 3600) + (minutos * 60)

  // Se muestra el total de segundos por consola 
  console.log(`Equivale a ${segundos} segundos.`);
};

// Se llama a la funcion con 1 hora y 10 minutos
// Resultado esperado: 4200 segundos 
convertirSegundos(1, 10);
