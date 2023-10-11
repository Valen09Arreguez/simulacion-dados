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
function Sumatoria(array1, array2) {
    let arraySuma = []
    for (let i = 0; i < array1.length; i++) {
        let suma = array1[i] + array2[i];
        arraySuma.push(suma)
    }
    los2Dados.push(arraySuma);
    return arraySuma;
}
const cantidadLanzamientos =  cantidadDeLanzamientos();
arrayDado1 = generar(cantidadLanzamientos);
arrayDado2 = generar(cantidadLanzamientos);
Sumatoria(arrayDado1, arrayDado2);
console.table(los2Dados);

