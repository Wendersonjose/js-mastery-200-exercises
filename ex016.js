//Escreva um programa que determina o maior entre três números.
//Descrição: Nesse exercício, você irá criar uma função que recebe três números como argumentos e imprime o maior deles.


function maiorNumero(n1,n2,n3){
    if(n1 > n2 &&  n1 > n3 ){
        console.log(n1 + " é o maior numero")
    }else if(n2 > n1 && n2 > n3){
        console.log(n2 + " é o maior numero")
    }else{
        console.log(n3 + " é o maior numero")
    }
}

maiorNumero( 1, 2 , 3);

maiorNumero(5, 4, 3);

maiorNumero(5, 6, 4);