// enquanto
// while (contador <= 10 ) {
//     console.log('meu contador tem ' + contador + ' de contagem');
//     contador = contador + 1;
// }


function calcPares (
    inicio_par,
    final_par
) {

    var controle_par = inicio_par;
    var qtd_pares = 0;

    // PARES
    while (controle_par <= final_par) {
        if (controle_par % 2 == 0) {
            qtd_pares = qtd_pares + 1;
        }
        
        controle_par = controle_par + 1;
    }
    
    return qtd_pares;
}


// IMPARES
function calcImpares (
    inicio_impar,
    final_impar
) {

    var controle_impar = inicio_impar;
    var qtd_impares= 0;

    while (controle_impar <= final_impar) {
        if (controle_impar % 2 == 1) {
            qtd_impares = qtd_impares + 1;
        }
        
        controle_impar = controle_impar + 1;
    }
    return qtd_impares;
}

exports.calcImpares = calcImpares;
exports.calcPares = calcPares;

