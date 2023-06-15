const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número entero: ', (numero) => {
  numero = parseInt(numero);

  if (numero > 0 && numero % 2 === 0) {
    console.log('El número es positivo y par');
  } else if (numero > 0 && numero % 2 !== 0) {
    console.log('El número es positivo e impar');
  } else if (numero < 0) {
    console.log('El número es negativo');
  } else if (numero === 0) {
    console.log('El número es cero');
  }

  rl.close();
});
