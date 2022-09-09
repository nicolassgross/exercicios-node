var ano_atual = 2022;
console.log(ano_atual);

var ano_nascimento = 1999
console.log(ano_nascimento);

var idade = ano_atual - ano_nascimento;
console.log(idade);

if (idade >= 18) {
    console.log("Sim, é maior de idade e pode tirar CNH pos tem" + idade + "anos de idade");
} else {
    console.log("Menor de idade não pode tirar CNH, pois tem " + idade + " anos de idade");
}