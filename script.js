console.log("==== FACTURA DE SERVICIO ELÉCTRICO ====");
console.log("Cliente: Juan Pérez");

function calcularConsumoMensual() {
    let kilovatiosConsumidos = prompt("¿Cuántos kilovatios se consumieron este mes?");
    const diasDelMes = prompt("¿Cuántos días tiene el mes?");
    return kilovatiosConsumidos * diasDelMes;
}

let consumoDelMes = calcularConsumoMensual();

function obtenerTarifaKilovatio() {
    return parseFloat(prompt("Ingrese el costo por kilovatio:"));
}

let tarifaPorKilovatio = obtenerTarifaKilovatio();
