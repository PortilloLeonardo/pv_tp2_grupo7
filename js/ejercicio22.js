import { actualizarTexto } from './funciones22.js';

// Captura de elementos del DOM
const inputNombre = document.querySelector('#campoTexto');
const parrafoDestino = document.querySelector('#resultadoTexto');

// Escuchar el evento 'input' para actualización dinámica
inputNombre.addEventListener('input', () => {
    actualizarTexto(inputNombre, parrafoDestino);
    
    // Requerimiento general: mostrar resultados por consola
    console.log(`Texto actual: ${inputNombre.value}`);
});