//Escreva um programa que verifica se um número está dentro de um determinado intervalo.
//Descrição:  Neste exercício, você vai criar uma função que recebe três números como argumentos: 
//um número a ser verificado, o limite inferior e o limite superior do intervalo. 
//A função deve imprimir se o número está dentro do intervalo ou não.

function dentroDoIntervalo(numero, limiteInferior, limiteSuperior){
    if(numero >= limiteInferior && limiteSuperior){
        console.log(numero + " Está dentro intervalo")
    }else{
        console.log(numero + " Não esta dentro do intervalo")
    }
}

dentroDoIntervalo(1, 5, 10);

dentroDoIntervalo(5, 1, 10);