//CONTADOR DE COPA DO MUNDO

var ano_incio = 1930;
var ano_incio_original = ano_incio;
var ano_fim = 2022;
var controle = 4;
var qtd_copa = 0;
var contador = 0;


while (ano_incio <= ano_fim) {
    ano_incio = ano_incio + 1;
    contador = contador + 1;

    if (contador == controle) {
        contador = 0;

        qtd_copa = qtd_copa + 1;
    }
    
}

console.log('Entre os anos ' + ano_incio_original + ' e ' + ano_fim + ' tivemos ' + qtd_copa + ' vezes')
