/*Ejercicio 6: crear un array con al menos 8 edades distintas.
Recorrer el array,mostrar las edades y el promedio de las edades.*/
const edades = [18, 20, 22, 19, 25, 30, 21, 23];
let suma = 0;
edades.forEach((edad) => {
    console.log(`Edad: ${edad}`);
    suma = suma + edad;
});
let promedio = suma / edades.length;
console.log(`Promedio de edades: ${promedio}`);