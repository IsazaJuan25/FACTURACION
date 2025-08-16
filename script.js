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

let obtenerCargoFijo = function() {
    return parseFloat(prompt("Indique el cargo fijo por servicio:"));
}

let cargoFijo = obtenerCargoFijo();

let obtenerIva = function() {
    return parseFloat(prompt("Ingrese el porcentaje de IVA:")) / 100;
}

let porcentajeIva = obtenerIva();

let calcularSubtotal = () => consumoDelMes * tarifaPorKilovatio;

let subtotal = calcularSubtotal();

let calcularIvaFactura = () => subtotal * porcentajeIva;

let ivaCalculado = calcularIvaFactura();

