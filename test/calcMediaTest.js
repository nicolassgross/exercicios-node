var assert = require('assert');

var calcMedia = require("../exercicios/calcmedia.js");

describe('Cáculo da media de notas do aluno', function () {

    it('Queremos saber se o aluno passou de ano ou foi reprovado', function () {

        assert.equal(calcMedia.STATUS_ALUNO.passou, calcMedia.calcMedia(7, 7, 7));

        assert.equal(calcMedia.STATUS_ALUNO.nao_recuperacao, calcMedia.calcMedia(4, 7, 6));

        assert.equal(calcMedia.STATUS_ALUNO.nao_reprovado, calcMedia.calcMedia(1, 0, 1));

    });

});
