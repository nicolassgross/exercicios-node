
var eleitores = 200;
var brancos = 125;
var nulos = 201;
var validos = 75;

if (nulos > 0) {
    console.log("Quantidade de Votos Nulos: " + nulos);
    console.log("Porcentagem de Votos Nulos: " + 100 * (nulos/eleitores) + "%");
} else {
    console.log("Valor do Voto Nulo Incompativel");
}
if (validos > 0) {
    console.log("Quantidade de Votos Válidos: " + validos);
    console.log("Porcentagem de Votos Válidos: " + 100 * (validos/eleitores) + "%");
} else {
    console.log("Valor do Voto Válido Incompativel");
}
if (brancos > 0) {
    console.log("Quantidade de Votos Brancos: " + brancos);
    console.log("Porcentagem de Votos Brancos: " + 100 * (brancos/eleitores) + "%");
} else {
    console.log("Valor do Voto Branco Incompativel");
}
if (eleitores >= 0) {
    console.log("O Número de Eleitores são: " + eleitores);
} else {
    console.log("Total de Eleitores inválido");
}