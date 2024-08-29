
const nota1 = 3;
const nota2 = 5;
const nota3 = 4;
const soma = nota1 + nota2 + nota3;

const media = soma / 3;



if (media < 5) {
    console.log('Reprovado');
} else if (media >=5 && media <=7) {
console.log ('Recuperação');
}else {
console.log('Aprovado');
}