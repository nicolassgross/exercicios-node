const STATUS_ALUNO = {
    passou: "Aluno passou de ano",
    nao_recuperacao: "Aluno não passou de ano, e está em recuperação",
    nao_reprovado: "Aluno não passou de ano, e está reprovado"
} 

function calcMedia(
    n1,
    n2,
    n3
) {

    var media = (n1 + n2 + n3) / 3;

    if (media >= 7) {
        return STATUS_ALUNO.passou;
    } else {
        
        if (media > 3) {
            return STATUS_ALUNO.nao_recuperacao;
        } else {
            return STATUS_ALUNO.nao_reprovado;
        }
    }

}

exports.STATUS_ALUNO = STATUS_ALUNO;
exports.calcMedia = calcMedia;