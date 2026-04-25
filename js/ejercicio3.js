// Ejercicio 3 - TP2
// Consigna: Calcular y mostrar por consola el volumen de una esfera cuyo radio = 4 m.

//Funcion flecha que recibe el radio y aplica la formula v = (4/3) * π * r³
const calcularVolumen = (radio) => {
  //Math.PI provee el valor de π
  //Math.pow (radio, 3) eleva el radio a la potencia 3
  // .toFixed(2) redondea el resultado a 2 decimales
  const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

  //Se muestra el resultado con texto descriptivo y ubidad de medio
  console.log(`El volumen de la esfera con radio ${radio} m es: ${volumen.toFixed(2)} m³`);
};

//Se llama a la funcion con radio = 4
calcularVolumen(4);
