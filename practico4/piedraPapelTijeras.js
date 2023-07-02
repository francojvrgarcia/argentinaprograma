const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const opciones = ['piedra', 'papel', 'tijeras'];
const resultados = ['Empate', 'Gana la computadora', 'Gana el usuario'];

function obtenerJugadaComputadora() {
  return Math.floor(Math.random() * 3);
}

function obtenerJugadaUsuario(callback) {
  rl.question('Elige tu jugada (0: piedra, 1: papel, 2: tijeras): ', (jugada) => {
    const jugadaNum = parseInt(jugada);
    if (isNaN(jugadaNum) || jugadaNum < 0 || jugadaNum > 2) {
      console.log('Jugada inválida. Debes ingresar un número válido (0, 1, o 2).');
      obtenerJugadaUsuario(callback);
    } else {
      callback(jugadaNum);
    }
  });
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return resultados[0]; // Empate
  } else if (
    (jugadaComputadora === 0 && jugadaUsuario === 2) ||
    (jugadaComputadora === 1 && jugadaUsuario === 0) ||
    (jugadaComputadora === 2 && jugadaUsuario === 1)
  ) {
    return resultados[1]; // Gana la computadora
  } else {
    return resultados[2]; // Gana el usuario
  }
}

function jugar() {
  rl.question('¿Cuántas jugadas quieres jugar? (1, 2, o 3): ', (numJugadas) => {
    const numJugadasNum = parseInt(numJugadas);
    if (isNaN(numJugadasNum) || numJugadasNum < 1 || numJugadasNum > 3) {
      console.log('Cantidad de jugadas inválida. Debes ingresar un número válido (1, 2, o 3).');
      rl.close();
      return;
    }

    let jugadaComputadora, jugadaUsuario;
    let ganadorComputadora = 0;
    let ganadorUsuario = 0;
    let empates = 0;
    let jugadasRealizadas = 0;

    function realizarJugada() {

      obtenerJugadaUsuario((jugada) => {
		console.log(`Jugada ${jugadasRealizadas + 1}:`);   
        jugadaUsuario = jugada;
        console.log(`El usuario eligió: ${opciones[jugadaUsuario]}`);
		
		jugadaComputadora = obtenerJugadaComputadora();
        console.log(`La computadora eligió: ${opciones[jugadaComputadora]}`);

        const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
        console.log(`El resultado fue: ${resultado}`);

        if (resultado === resultados[1]) {
          ganadorComputadora++;
        } else if (resultado === resultados[2]) {
          ganadorUsuario++;
        } else {
          empates++;
        }

        jugadasRealizadas++;

        if (jugadasRealizadas === numJugadasNum) {
          console.log('--- Resultados finales ---');
          console.log(`Computadora: ${ganadorComputadora} jugada(s) ganada(s)`);
          console.log(`Usuario: ${ganadorUsuario} jugada(s) ganada(s)`);
          console.log(`Empates: ${empates} jugada(s)`);
          rl.close();
        } else {
          realizarJugada();
        }
      });
    }

    realizarJugada();
  });
}

jugar();
