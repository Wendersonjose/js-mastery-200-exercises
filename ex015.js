//Escreva um programa que verifica se uma palavra e um palindromo 
// Um Palidromo é uma palavra que tem a propriedade de poder ser lida tanto  da direita para a wesqerda como da esquerda para a direita. 
//Nesse exercicio, voce ira criar uma funca que recebe uma palavra como argumento e verifica se ela é um paindromo.

function verificarPalindromo(palavra){
    var palavraInvertida = palavra.split(").reverse().join(");
    if(palavra == palavraInvertida){
        console.log(palavra + " é uma palíndromo")
    }else{
        console.log(palavra + " não é um palíndromo")
    }
}

verificarPalindromo("arara");
verificarPalindromo("gato");
