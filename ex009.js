//Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.
//descricao: Voce precisara de uma funcao que receba um numero como argumento. 
//Essa funcao usara estruturas if, else if e else para determinar e imprimir se o numero é.
//Positivo, negativo ou zero. por exemplo, 
// se recebermos o numero 10, a saida deve ser positivo
// se recebermos o numero -5, a saida deve ser negativo
// se recebermos o numero 0 , a saida deve ser zero

function verificarNumero(num){
    if(num> 0){
        console.log("O número é positivo");
    }else if( num < 0 ) {
        console.log("O número é negativo");
    } else{
        console.log("O número é zero")
    }
}

verificarNumero(10);

verificarNumero(-5);

verificarNumero(0);