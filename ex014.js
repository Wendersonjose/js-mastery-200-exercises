//Escreva um programa que verifica se o ano é bissexto.
//Nesse exercício, você vai criar uma função que recebe um ano e verifica se ele é bissexto.
//Um ano bissexto se for divisível por 4,exceto os que são divisíveis por 100 mas não por 400. 

function verificarBissexto(ano){
    if((ano % 4 == 0 && ano % 100 != 0) || 
    (ano %400 == 0)){
        console.log(ano + " é um ano bissexto");
    }else { 
        console.log(ano + " não é ano bissexto");
    }
}

verificarBissexto(2000);
verificarBissexto(2001);
verificarBissexto(2100);
verificarBissexto(3592);
