import { modificarTexto } from './funciones19.js';

const boton = document.querySelector('#botonCambiar');
const parrafo = document.querySelector('#parrafo');

boton.addEventListener('click', () => {
    modificarTexto(parrafo, "¡El texto cambiado!");
});