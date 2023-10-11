let los2Dados =[];
function numerosAleatorios(min, max) {
    return Math.floor(Math.random()*(max -min +1) +min);
}

function cantidadDeLanzamientos() {
    let cantidad = prompt("Ingresar la cantidad de lanzamientos");
    cantidad = parseInt(cantidad);
    return cantidad
}

function generar(cantidad) {
    const arrayDado1 = [];
    for (let i = 0; i < cantidad; i++) {
        arrayDado1.push(numerosAleatorios(1, 6));
    }
    los2Dados.push(arrayDado1)
    return arrayDado1;    
}

function generar(cantidad) {
    const arrayDado2 = [];
    for (let i = 0; i < cantidad; i++) {
        arrayDado2.push(numerosAleatorios(1, 6));
    }
    los2Dados.push(arrayDado2);
    return arrayDado2;    
}

const cantidadLanzamientos =  cantidadDeLanzamientos();
arrayDado1 = generar(cantidadLanzamientos);
arrayDado2 = generar(cantidadLanzamientos);
