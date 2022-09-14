/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
Escrever um programa que leia o número de carros por ele vendidos, o valor total de suas vendas, 
o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
*/


var salario_base = 600;
var valor_comissao = 200;
var total_vendas = 21;
var total_comissao = 15;
var total_salario = 75;
var total_carros_vendidos = 75;


    console.log("Salário base do vendedor: ");
    console.log("Valor da comissao por carro vendido: ");
    console.log("Total de carros vendidos: ");
    console.log("Total de vendas: ");

    total_comissao = total_carros_vendidos * valor_comissao;
    total_comissao = total_comissao + ( total_vendas * 5/100 );

    total_salario = total_comissao + salario_base;
    
    console.log("O salario final do vendedor: " + total_salario + "%");
