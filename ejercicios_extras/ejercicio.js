let nombres = ['Carla', 'Pedro', 'Daiana', 'Ivan', 'Ivette', 'Mario', 'Vanesa'];

let nombresTerminadosEnA = nombres.filter(nombre => nombre.endsWith('a'));

console.log('Nombres terminados en a: ' + nombresTerminadosEnA);

let apellidos = ['Gomez', 'Gonzales', 'Hernandez', 'Suarez', 'Gimenez', 'Gomez', 'Mendez'];

let personasFiltradas = nombres.filter((nombre, index) => nombre.endsWith('a') && apellidos[index].startsWith('G'));

personasFiltradas.forEach((nombre, index) => {
  console.log('Nombre que termina en a y cuyo apellido empiece con G: ' + nombre + ' ' + apellidos[index]);
});


let estadoInvitacion = [true, false, true, true, true, false, true, false];

let personasValidadas = nombres.filter((nombre, index) => estadoInvitacion[index]);

personasValidadas.forEach((nombre, index) => {
  let inicialNombre = nombre[0];
  let inicialApellido = apellidos[index][0];
  console.log('Personas invitadas: ' + inicialNombre + '.' + inicialApellido + '.');
});

//Cumplen condiciones del 3, 4, 6

let personasCumplenCondiciones = nombres.filter((nombre, index) => 
  nombre.endsWith('a') && apellidos[index].startsWith('G') && estadoInvitacion[index]
);

personasCumplenCondiciones.forEach((nombre, index) => {
  let inicialNombre = nombre[0];
  let inicialApellido = apellidos[index][0];
  let estado = estadoInvitacion[index] ? 'Invitación validada' : 'Invitación no validada';
  console.log('nombre termine en "a" y cuyo apellido empiece con "G" y personas invitadas: ' + inicialNombre + '.' + inicialApellido + '. ' + estado);
});



let arregloCompleto = [nombres, apellidos, estadoInvitacion];

console.log('************************************************************************');
console.log('********* Ejercicio extra, el nuevo array contiene 3 posiciones ******** ' + JSON.stringify(arregloCompleto));
console.log('************************************************************************');

//Imprimir solo los nombres que terminan con la letra "a"
let nombresTerminanA = arregloCompleto[0].filter(nombre => nombre.endsWith('a'));
console.log('Nombres que terminan con "a":', nombresTerminanA);

//Imprimir todas las personas (nombre y apellido) cuyo nombre termine en "a" y cuyo apellido empiece con "G"
personasFiltradas = arregloCompleto[0].filter((nombre, index) =>
  nombre.endsWith('a') && arregloCompleto[1][index].startsWith('G')
);
let personasFiltradasInfo = personasFiltradas.map((nombre, index) =>
  `${nombre} ${arregloCompleto[1][index]}`
);
console.log('Personas cuyo nombre termina en "a" y apellido empieza con "G":', personasFiltradasInfo);


//Imprimir todas las personas invitadas (inicial del nombre y apellido) que tienen la invitación validada
let personasValidadasIniciales = arregloCompleto[0].filter((nombre, index) => arregloCompleto[2][index])
  .map((nombre, index) => `${nombre[0]}.${arregloCompleto[1][index][0]}.`);
console.log('Iniciales de personas invitadas con invitación validada:', personasValidadasIniciales);

//Imprimir todas las personas (inicial del nombre, apellido y estado de la invitación) que cumplen con las condiciones del ejercicio 3, 4 y 6
personasCumplenCondiciones = arregloCompleto[0].filter((nombre, index) =>
  nombre.endsWith('a') && arregloCompleto[1][index].startsWith('G') && arregloCompleto[2][index]
);
let personasCumplenCondicionesInfo = personasCumplenCondiciones.map((nombre, index) => {
  let apellido = arregloCompleto[1][index];
  let estado = arregloCompleto[2][index] ? 'Invitación validada' : 'Invitación no validada';
  return `${nombre[0]}.${apellido[0]}. - ${estado}`;
});
console.log('Personas que cumplen con las condiciones 4,6:', personasCumplenCondicionesInfo);