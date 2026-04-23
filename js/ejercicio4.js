// Ejercicio 4 - TP2
// Consigna: Declare las variables necesarias para almacenar valores numéricos que representan los
// lados de un rectángulo. Calcular el área y el perímetro del rectángulo y mostrar los
// resultados por consola. La unidad de medida es cm.

const calcularRectangulo = (base, altura) => {
  const perimetro = base * 2 + altura * 2;
  const area = base * altura;

  console.log(
    `Resultado del calculo (base=${base}, altura=${altura}): Perimetro=${perimetro}, Area=${area}`,
  );
};

calcularRectangulo(10, 5);
