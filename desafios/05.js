// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

var anos = 23;
var meses = 5;
var dias = 56;

if (anos >= 0 && meses >= 0 && dias >= 0) {
    idade = (anos * 365) + (meses * 30) + dias
}

console.log("A idade em dias é: " + idade)
