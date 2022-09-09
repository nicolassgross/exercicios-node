var assert = require('assert');

var calcArea = require("../exercicios/calcarea.js");

describe('Cáculo da área', function () {

    it('Queremos saber se a área do retângulo é maior que 100', function () {

        assert.equal(true, calcArea.calcArea(30, 20));

        assert.equal(false, calcArea.calcArea(1, 1));

    });

});
