//Escreva um programa que imprime uma classificação baseada na nota de um aluno. 
//Neste exercício, você vai criar uma função que recebe uma nota de um aluno
//Como argumentoe imprime uma classificação com base nessa nota.
//Classificação A, maior ou igual a 90;
//Classificação B, maior 80;
//Classificação C, maior 70; 
//Classificação D, maior 60;
//classificação F, menor que 60;

function classificarAluno(nota){
    if(nota >= 90 ){
        console.log("A")
    }else if(nota >= 80){
        console.log("B")
    }else if(nota >= 70){
        console.log("C")        
    }else if( nota >= 60){
        console.log("D")
    }else{
        console.log("F")
    }
}

classificarAluno(95);
classificarAluno(82);
classificarAluno(73);
classificarAluno(61);
classificarAluno(45);