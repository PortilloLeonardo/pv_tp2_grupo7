const input = document.querySelector('#texto1');
const resultado = document.querySelector('#resultado');

input.addEventListener('input', () => {
    const texto = input.value;
    resultado.textContent = texto;
    if (texto.length > 20) {
        resultado.classList.add("cambiarColor");
    } else {
        resultado.classList.remove("cambiarColor");
    }
});
