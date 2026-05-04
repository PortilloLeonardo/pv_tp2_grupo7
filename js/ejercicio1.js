// Ejercicio 1 - TP2
// Consigna: Crear variable constante 'integrantes' y mostrar mensaje.

//Se declara una constante con los nombres de los integrantes del grupo
const integrantes =
  "Portillo Leonardo, Caceres Milagros, Ramos Martín, Gregorio Cristian, Bravo Nicolas";

//Funcion flecha que muestra el mensaje de presentacion 
const mostrarPresentacion = () => {
  console.log(`Somos ${integrantes} y estamos aprendiendo javascript.`);
};

//Se llama a la funcion para ejecutarla
mostrarPresentacion();
