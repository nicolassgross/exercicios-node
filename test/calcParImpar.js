var assert = require('assert');

var calcPares = require("../exercicios/bloco_while.js");
var calcImpares = require("../exercicios/bloco_while.js");

describe('Identificar quantos números pares ou impares existem em um range específico', function () {

    it('Queremos saber quantos números pares existem em um range', function () {

        assert.equal(6, calcPares.calcPares(0, 10));

    });

    it('Queremos saber quantos números impares existem em um range', function () {

        assert.equal(5, calcImpares.calcImpares(0, 10));

    });

});
