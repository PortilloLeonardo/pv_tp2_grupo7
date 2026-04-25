// Ejercicio 7 - TP2
// Consigna: Declarar un arrey de nombre, mostrarlos y encontrar el nombre  mas largo.
// Las cadenas de texto tiene la propiedad .length que indica cantidad de caracteres.

// Array con 6 nombres distintos.
const nombres = ["Alexis", "Bruno", "Carla", "Diego", "Elena", "Federico"];

let nombreMasLargo = ""; // Se inicializa vacio para comparar desde el principio

// forEach recorre cada nombre del array
nombres.forEach((nombre) => {
    console.log(nombre); // Se muestra cada nombre

    // Si el nombre actual es mas largo que el guardado, se reemplaza
    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
});

// Se muestra el nombre con mayor cantidad de caracteres
console.log(`El nombre más largo es: ${nombreMasLargo}`);

