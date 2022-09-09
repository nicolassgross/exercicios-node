var base = 20;
var altura = 20;
var area = base * altura;

if (area > 100) {
    console.log("É um retângulo bem grande e tem " + area + " de área total");
} else {
    console.log("Não é um retângulo grande");
}

function calcArea() {

    var base = 17;
    var altura = 19;
    var area = base * altura;

    if (area > 100) {
        return true;
    } else {
        return false;
    }

}

