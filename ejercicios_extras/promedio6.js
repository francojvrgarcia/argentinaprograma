let numeros = [5,7,9,2,1,22];

let sumaNumeros = numeros.reduce(function(a, b) {
    return a + b;
});


let promedio = sumaNumeros / numeros.length;

console.log(promedio)

//El resultado es 7,666666666666667

