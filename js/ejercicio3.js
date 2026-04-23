// Ejercicio 3 - TP2
// Consigna: Calcular y mostrar por consola el volumen de una esfera cuyo radio = 4 m.

const calcularVolumen = (radio) => {
  console.log((4 / 3) * Math.PI * Math.pow(radio, 3));
};

calcularVolumen(4);
