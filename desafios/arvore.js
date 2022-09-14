// Árvore

// var a = 5;
// var espaco = ' ';

// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (linha = 1; linha <= a; linha++) {
//     for(coluna = 1; coluna <= a; coluna++) {
//         if (coluna == linha) {
//             var arrArvore = [
//                 espaco += 'X'
//             ] 
//         }
//     }
//     console.log(arrArvore);
// } 

var a = 4;
var espaco = ' ';

for (linha = 0; linha <= a; linha++) {
    for(coluna = 1; coluna <= a; coluna++) {
        if (coluna == linha) {
            console.log(espaco += 'X');
        }
    }
} 
