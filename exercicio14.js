//14. Escreva uma função que receba dois números como parâmetros 
//e retorne verdadeiro se a soma deles for divisível por 5 e falso caso contrário.

let soma;
function somaEhDivisivel(a, b) {
    soma = a + b;
    if(soma % 5 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(somaEhDivisivel(2, 2))