// Ejercio 6 - TP2
// Consigna: Crear un array con al menos 8 edades distintas
// Recorrer el array, mostrar las edades y calcular el promedio

// Array ccon 8 edades distintas
const edades = [18, 20, 22, 19, 25, 30, 21, 23];
let suma = 0; // Acumular para sumar todas las edades

// forEach recorrera cada elemento del array
// Por cada edad: la muestra por consola y la suma al acumulador 
edades.forEach((edad) => {
    console.log(`Edad: ${edad}`);
    suma = suma + edad;
});

//Se divide la suma total por la cantidad de elementos del array
let promedio = suma / edades.length;
console.log(`Promedio de edades: ${promedio}`);
