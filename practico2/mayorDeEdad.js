const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu edad: ', (edad) => {
  if (edad >= 18) {
    console.log('Eres mayor de edad');
  } else {
    console.log('Eres menor de edad');
  }
  
  rl.close();
});