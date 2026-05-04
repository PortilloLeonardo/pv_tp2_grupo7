/*Importamos la funcion*/
import {actualizarTexto} from "./funciones23.js";
/*Seleccionamos los elementos de DOM*/
const input = document.querySelector("#textoInput");
const resultado = document.querySelector("#resultado");
/*Llamamos a la función importada*/
actualizarTexto(input, resultado);
