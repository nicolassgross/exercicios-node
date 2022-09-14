  var conta = 589;
  var saldo = 2421;
  var debito = 10000;
  var credito = 4142;
    
    saldo_atual = saldo - debito + credito;
    
    if (saldo_atual >= 0) {
        console.log("Saldo Positivo");
    } else {
        console.log("Saldo Negativo");
    }

//   Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. 
//   Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). 
//   Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', 
//   senão escrever a mensagem 'Saldo Negativo'