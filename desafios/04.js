
function calcPotencia (
    base,
    expoente
) {

    var potencia = 1;
    var contador = 0;

    while (contador != expoente) {
        potencia = potencia * base;
        contador = contador + 1;
    }

    return potencia;
}

exports.calcPotencia = calcPotencia;
