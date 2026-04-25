// Ejercicio 4 - TP2
// Consigna: Calcular el área y el perímetro del rectángulo y mostrar los resultados.
// La unidad de medida es cm.

// Funcion flecha que recibe base y altura como parametros 
const calcularRectangulo = (base, altura) => {
  // Formula del perimetro: suma de todos los lados (base*2 + altura*2)
  const perimetro = base * 2 + altura * 2;

  // Formula del area: base multiplicada por altura
  const area = base * altura;

  // Se encuentran los resultados usando template string
  console.log(
    `Resultado del calculo (base=${base}, altura=${altura}): Perimetro=${perimetro}, Area=${area}`,
  );
};

// Se llama a la funcion con base=10 cm y altura=5 cm
calcularRectangulo(10, 5);
