import { datosGeograficos, buscarCapital } from './funciones21.js';

const selectPaises = document.querySelector('#paises');
const selectCapitales = document.querySelector('#capitales');
const parrafoResultado = document.querySelector('#resultado');

// 1. Cargamos las opciones en ambos select al iniciar
datosGeograficos.forEach(item => {
    // Agregar país
    const optPais = document.createElement('option');
    optPais.value = item.pais;
    optPais.textContent = item.pais;
    selectPaises.appendChild(optPais);

    // Agregar capital
    const optCap = document.createElement('option');
    optCap.value = item.capital;
    optCap.textContent = item.capital;
    selectCapitales.appendChild(optCap);
});

// 2. Evento change
selectPaises.addEventListener('change', () => {
    const pais = selectPaises.value;
    const capital = buscarCapital(pais);

    // Sincronizar el select de capitales
    selectCapitales.value = capital;

    // Actualizar interfaz y consola
    if (pais) {
        const mensaje = `Has seleccionado ${pais}, cuya capital es ${capital}.`;
        parrafoResultado.textContent = mensaje;
        console.log(`País: ${pais} | Capital: ${capital}`);
    } else {
        parrafoResultado.textContent = "";
        selectCapitales.value = "";
    }
});