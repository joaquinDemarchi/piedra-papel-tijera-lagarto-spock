function getRandomInt(arr) {
    return Math.floor(Math.random() * arr.length);
}

document.getElementById('gameForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  
  const usuario = document.getElementById('usuario').value;
  const maquina  = ['piedra', 'papel', 'tijera', 'spock', 'lagarto'];
  const eleccionMaquina = getRandomInt(maquina);

  let resultadoTexto = '';

  const mensajePerdedor = 'Perdiste¡ Maldito Sheldon.'
  const mensajeGanador = 'Ganaste¡ Bien hecho.'
  
  if (maquina[eleccionMaquina] == usuario){
      resultadoTexto = 'Empataron!';
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

  document.getElementById('resultado').innerText = 'Sheldon ha elegido \n '+ maquina[eleccionMaquina] +' \n'+ resultadoTexto;
});

console.log('jdks');