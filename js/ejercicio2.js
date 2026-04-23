// Ejercicio 2 - TP2
// Consigna: Mostrar por consola los primeros 10 números impares.

const mostrarImpares = () => {
  let numero = 1;
  console.log(`Los primeros 10 numeros impares son: `);
  for (let i = 1; i <= 10; i++) {
    console.log(numero);
    numero = numero + 2;
  }
};

mostrarImpares();
