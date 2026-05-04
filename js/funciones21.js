// Diccionario de datos
export const datosGeograficos = [
    { pais: "Argentina", capital: "Buenos Aires" },
    { pais: "Brasil", capital: "Brasilia" },
    { pais: "Chile", capital: "Santiago" },
    { pais: "Uruguay", capital: "Montevideo" },
    { pais: "Perú", capital: "Lima" },
    { pais: "Colombia", capital: "Bogotá" }
];

// Función para obtener capital por país
export const buscarCapital = (nombrePais) => {
    const registro = datosGeograficos.find(item => item.pais === nombrePais);
    return registro ? registro.capital : "";
};