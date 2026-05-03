/* Seleccion donde el usuario ingresa el texto */
const input = document.querySelector('#texto1');
/* Seleccion donde se mostrara el resultado */
const resultado = document.querySelector('#resultado');

/* Evento que se ejecuta cada vez que el usuario ingresa texto*/
input.addEventListener('input', () => {
    /* Obtiene el texto ingresado por el usuario */
    const texto = input.value;
    /* Muestra el texto ingresado en tiempo real */
    resultado.textContent = texto;
    /*verifica si el texto ingresado tiene mas de 20 caracteres*/
    if (texto.length > 20) {
        /* Si el texto tiene mas de 20 caracteres se cambia el color del resultado a rojo */
        resultado.classList.add("cambiarColor");
    } else {
        /* Si el texto tiene 20 caracteres o menos se mantiene el color original */
        resultado.classList.remove("cambiarColor");
    }
});
