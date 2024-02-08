const usuario = 'tijera'
const maquina  = 'piedra'


if (maquina == usuario){
    console.log('empate');
} else if (usuario == 'tijera' ){
    if (maquina != 'piedra' && maquina != 'spock') {
        console.log('ganaste')
    } else {
        console.log('perdiste')
    }
} else if (usuario == 'piedra' ){
    if (maquina != 'papel' && maquina != 'spock') {
        console.log('ganaste')
    } else {
        console.log('perdiste')
    }
}  else if (usuario == 'spock' ){
    if (maquina != 'papel' && maquina != 'lagarto') {
        console.log('ganaste')
    } else {
        console.log('perdiste')
    }
} else if (usuario == 'lagarto' ){
    if (maquina != 'papel' && maquina != 'piedra') {
        console.log('ganaste')
    } else {
        console.log('perdiste')
    }
}  else if (usuario == 'papel' ){
    if (maquina != 'tijera' && maquina != 'lagarto') {
        console.log('ganaste')
    } else {
        console.log('perdiste')
    }
}
