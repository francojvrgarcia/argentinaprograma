let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamañoDeCita);

let indice = cita.indexOf(substring);
console.log("El índice del substring es: " + indice);

let citaRevisada = cita.slice(0, indice) + substring + cita.slice(indice + substring.length);
console.log("La cita revisada es: " + citaRevisada);