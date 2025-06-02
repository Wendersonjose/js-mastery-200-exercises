//Escreva um programa que determina se um número é par ou ímpar.Descrição:  
//Nesse exercício, você vai criar uma função que recebe um número como argumento e imprime se ele é par ou ímpar.

function parOuImpar(numero){
    if( numero % 2 == 0){
        console.log(numero + " É par")
    }else{
        console.log(numero + " É ímpar")
    }
}

parOuImpar( 4 );

parOuImpar(31);

parOuImpar( 3 );