/*Ejercicio 7: Declarar un array demominado nombre con al menos 6 nombres distintos.
Motrar los nombres del array y obtener el nombre mas largo del array.
La cadenas de texto (string) son listas de caracteres y las listas tienen un largo 
(length) que indica su tamaño*/
const nombres = ["Alexis", "Bruno", "Carla", "Diego", "Elena", "Federico"];
let nombreMasLargo = "";
nombres.forEach((nombre) => {
    console.log(nombre);
    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
});
console.log(`El nombre más largo es: ${nombreMasLargo}`);

