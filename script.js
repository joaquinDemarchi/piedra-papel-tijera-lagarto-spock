function getRandomInt(arr) {
    return Math.floor(Math.random() * arr.length);
}

document.getElementById('gameForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  
  const usuario = document.getElementById('usuario').value;
  const maquina  = ['piedra', 'papel', 'tijera', 'spock', 'lagarto'];
  const eleccionMaquina = getRandomInt(maquina);
  let detalle = '';

  let resultadoTexto = '';

  const mensajePerdedor = 'Perdiste... Maldito Sheldon.'
  const mensajeGanador = 'Ganaste¡ Bien hecho.'
  
  if (maquina[eleccionMaquina] == usuario){
      resultadoTexto = 'Empataron!';
      detalle = 'Tu y Sheldon estan conectados...'
  } else if (usuario == 'tijera' ){
      if (maquina[eleccionMaquina] != 'piedra' && maquina[eleccionMaquina] != 'spock') {
          resultadoTexto = mensajeGanador;
      } else {
          resultadoTexto = mensajePerdedor;
      }
  } else if (usuario == 'piedra' ){
      if (maquina[eleccionMaquina] != 'papel' && maquina[eleccionMaquina] != 'spock') {
          resultadoTexto = mensajeGanador;
      } else {
          resultadoTexto = mensajePerdedor;
      }
  }  else if (usuario == 'spock' ){
      if (maquina[eleccionMaquina] != 'papel' && maquina[eleccionMaquina] != 'lagarto') {
          resultadoTexto = mensajeGanador;
      } else {
          resultadoTexto = mensajePerdedor;
      }
  } else if (usuario == 'lagarto' ){
      if (maquina[eleccionMaquina] != 'papel' && maquina[eleccionMaquina] != 'piedra') {
          resultadoTexto = mensajeGanador;
      } else {
          resultadoTexto = mensajePerdedor;
      }
  }  else if (usuario == 'papel' ){
      if (maquina[eleccionMaquina] != 'tijera' && maquina[eleccionMaquina] != 'lagarto') {
          resultadoTexto = mensajeGanador;
      } else {
          resultadoTexto = mensajePerdedor;
      }
  }

  
  if (
    //piedra-papel
    (usuario == 'papel' && maquina[eleccionMaquina] == 'tijera' )||
    (usuario == 'tijera' && maquina[eleccionMaquina] == 'papel')
  ){
    detalle = '"Papel envuelve piedra"'
  } else  if (
    //piedra-tijera
    (usuario == 'piedra' && maquina[eleccionMaquina] == 'tijera' )||
    (usuario == 'tijera' && maquina[eleccionMaquina] == 'piedra')
  ){
    detalle = '"Pidra destruye tijera"'
  } else  if (
    //papel-tijera
    (usuario == 'papel' && maquina[eleccionMaquina] == 'tijera' )||
    (usuario == 'tijera' && maquina[eleccionMaquina] == 'papel')
  ){
    detalle = '"Tijera corta papel"'
  } else  if (
    //spock-tijera
    (usuario == 'spock' && maquina[eleccionMaquina] == 'tijera' )||
    (usuario == 'tijera' && maquina[eleccionMaquina] == 'spock')
  ){
    detalle = '"Spock rompe tijeras"'
  } else  if (
    //spock-papel
    (usuario == 'spock' && maquina[eleccionMaquina] == 'papel' )||
    (usuario == 'papel' && maquina[eleccionMaquina] == 'spock')
  ){
    detalle = '"Papel desautoriza a Spock"'
  } else  if (
    //spock-piedra
    (usuario == 'spock' && maquina[eleccionMaquina] == 'piedra' )||
    (usuario == 'piedra' && maquina[eleccionMaquina] == 'spock')
  ){
    detalle = '"Spock vaporiza piedra."'
  } else  if (
    //spock-lagarto
    (usuario == 'spock' && maquina[eleccionMaquina] == 'lagarto' )||
    (usuario == 'lagarto' && maquina[eleccionMaquina] == 'spock')
  ){
    detalle = '"Lagarto envenena a Spock"'
  } else  if (
    //tijera-lagarto
    (usuario == 'tijera' && maquina[eleccionMaquina] == 'lagarto' )||
    (usuario == 'lagarto' && maquina[eleccionMaquina] == 'tijera')
  ){
    detalle = '"Tijeras decapitan a Lagarto"'
  } else  if (
    //papel-lagarto
    (usuario == 'papel' && maquina[eleccionMaquina] == 'lagarto' )||
    (usuario == 'lagarto' && maquina[eleccionMaquina] == 'papel')
  ){
    detalle = '"Lagarto devora papel"'
  } else  if (
    //piedra-lagarto
    (usuario == 'piedra' && maquina[eleccionMaquina] == 'lagarto' )||
    (usuario == 'lagarto' && maquina[eleccionMaquina] == 'piedra')
  ){
    detalle = '"Piedra aplasta a lagarto"'
  }
  
  document.getElementById('resultado').innerText = 'Sheldon ha elegido \n '+ maquina[eleccionMaquina]  +' \n'+ detalle +' \n'+ resultadoTexto;

  // Reproducir sonido correspondiente
  if (resultadoTexto === mensajeGanador) {
    document.getElementById('winSound').play();
  } else if (resultadoTexto === mensajePerdedor) {
    document.getElementById('loseSound').play();
  }

});

console.log('jdks');