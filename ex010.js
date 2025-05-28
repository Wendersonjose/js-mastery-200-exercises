//Escreva um programa que recebe duas notas de um aluno,
//calcula a média e imprime se o aluno foi aprovado ou reprovado
//(considerando que a média para aprovação é 7).
//Descrição: Nesse exercicio, voce deve criar uma função que receba duas notas, 
//calcula a média e, com base na média, 
//Decide se o aluno foi aprovado(média maior ou igual a 7) 
//reprovado (média menor que 7)
//por exemplo se as notas forem 8 e 6, a média será 7 e o aluno será aprovado 

function calcularMedia(nota1,nota2){
    var media = (nota1 + nota2) / 2;
    if(media >= 7){
        console.log("O Aluno foi Aprovado com a media: " + media)
    }else{
        console.log("O Aluno foi Reprovado com a media: " + media)
    }
}

calcularMedia(8 , 6);
calcularMedia(5 , 6);