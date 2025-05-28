//Escreva um programa que verifica a situação de um estudante de acordo com sua média final.
//Neste  exercício, você vai criar uma função que recebe a média final de um estudante e verifica sua situação, 
// se aprovado (média igual ou superior a 7), 
// se em recuperação(média entre 5 e 6.9) 
// ou se reprovado (média abaixo de 5).

function situacaoEstudante(mediaFinal){
    if(mediaFinal >=7){
        console.log("Aprovado")
    }else if (mediaFinal>=5 && mediaFinal<7){
        console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }
}

situacaoEstudante(10);
situacaoEstudante(6.8);
situacaoEstudante(4);