const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const meses = {
  1: 'enero',
  2: 'febrero',
  3: 'marzo',
  4: 'abril',
  5: 'mayo',
  6: 'junio',
  7: 'julio',
  8: 'agosto',
  9: 'septiembre',
  10: 'octubre',
  11: 'noviembre',
  12: 'diciembre'
};

rl.question('Ingresa un número del 1 al 12: ', (mes) => {
  mes = parseInt(mes); 
  if (mes >= 1 && mes <= 12) {
    let cantidadDias;

    if (mes === 2) {
      cantidadDias = 28;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
      cantidadDias = 30;
    } else {
      cantidadDias = 31;
    }

    console.log(`La cantidad de días del mes de ${meses[mes]} es ${cantidadDias}`);
  } else {
    console.log('El número ingresado no está dentro del rango válido.');
  }

  rl.close();
});
