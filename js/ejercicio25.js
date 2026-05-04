//Construir una página web utilizando Html, Css y JavaScript que incluya un botón. Al hacer clic en ese botón, el color de fondo de toda la página debe cambiar. Usar un elemento <button> para permitir la interacción del usuario. Cambiar el color de fondo del body al hacer clic. Utilizar JavaScript para capturar el evento click. Aplicar estilos básicos con CSS para mejorar la presentación. Mostrar un mensaje en la consola cada vez que el color cambia. Opcional: Cambiar el color de fondo aleatoriamente entre varios colores cada vez que se haga clic

import { generarColorAleatorio } from './funciones25.js';

const boton = document.querySelector('#btn-cambiar-color');

boton.addEventListener('click', () => {
    const nuevoColor = generarColorAleatorio();
    
    document.body.style.backgroundColor = nuevoColor;

    console.log(`El color de fondo ha cambiado a: ${nuevoColor}`);
});