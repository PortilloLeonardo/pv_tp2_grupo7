import { formatearMensaje } from './funciones20.js';

const btn = document.querySelector('#btnMostrar');

btn.addEventListener('click', () => {
    
    const inputNombre = document.querySelector('#nombre');
    const inputApellido = document.querySelector('#apellido');
    const inputLU = document.querySelector('#lu');

    
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const lu = inputLU.value;

    
    const mensaje = formatearMensaje(nombre, apellido, lu);
    alert(mensaje);
});