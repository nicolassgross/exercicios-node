var assert = require('assert');

var calcPotencia = require("../desafios/04.js");

describe('Cáculo da Potência', function () {

    it('Queremos saber o calculo de potêncai', function () {

        assert.equal(16, calcPotencia.calcPotencia(2, 4));

        assert.equal(256, calcPotencia.calcPotencia(2, 8));

    });

});
