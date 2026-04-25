// Ejercicio 2 - TP2
// Consigna: Mostrar por consola los primeros 10 números impares.

const mostrarImpares = () => {
  let numero = 1; //Se empieza desde 1, que es el primer numero impar
  
  console.log(`Los primeros 10 numeros impares son: `);
  
  //El bucle itera 10 veces, una por cada numero impar a mostrar
  for (let i = 1; i <= 10; i++) {
    console.log(numero);
    numero = numero + 2; //Se suma 2 para pasar al siguiente numero impar
  }
};

//Se llama a la funcion para ejecutarla
mostrarImpares();
