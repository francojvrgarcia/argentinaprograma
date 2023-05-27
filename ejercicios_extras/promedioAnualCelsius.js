function calcularPromedioAnualEnCelsius(tFarenheit) {
  let sumaFahrenheit = tFarenheit.reduce(function(a, b) {
    return a + b;
  });

  let promedioFahrenheit = sumaFahrenheit / tFarenheit.length;
  let promedioCelsius = (promedioFahrenheit - 32) * (5/9);

  return promedioCelsius;
}


let tFahrenheit = [65, 70, 75, 80, 85, 90, 95, 100, 90, 85, 75, 70];
let promedioCelsius = calcularPromedioAnualEnCelsius(tFahrenheit);

//Resultado 27.592592592592595

console.log("El promedio anual en grados Celsius es: " + promedioCelsius);