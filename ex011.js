//Escreva um programa que verifica uma pessoa pode votar com base na ideia.
//Nesse exercicio voce vai criar uma funcao que recebe a idade de uma pessoa e verifica se ela pode votar. 
// No brasil o voto é obrigatorio para pessoas entre 18 e 70 anos, 
// facultativo para pessoas com 16 ou 17 anos ou acima de 70.
// Menores de 16 anos nao votam.

function podeVotar(idade){
    if( idade >=18 && idade<70 ){
        console.log("Essa idade pode votar")
    }else if(idade<16){
        console.log("Essa idade nao pode votar")
    }else{
        console.log("Essa idade é facultativa")
    }
}

podeVotar(18);
podeVotar(70);
podeVotar(15);
podeVotar(17);
