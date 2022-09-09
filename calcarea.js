
function calcArea(
    base,
    altura
) {

    var area = base * altura;

    if (area > 100) {
        return true;
    } else {
        return false;
    }

}

exports.calcArea = calcArea;