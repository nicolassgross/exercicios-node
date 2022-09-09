var verdade = true;
var idade = 16;
var carteira_motorista = false;

// negação !
if (!verdade) {
    console.log('false');
} 

// AND &&
if (verdade == true && idade >= 18) {
    console.log('maior de idade');
    carteira_motorista = true;
    if (carteira_motorista) {
        console.log('pode tirar CNH')
    } 
} else {
    console.log('menor de idade e não pode ter cnh')
}

//OR ||
var idade2 = 19;

if (verdade == false || idade2 >= 18) {
    console.log('Pode dirigir');
} 

