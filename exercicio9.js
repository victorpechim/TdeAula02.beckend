//9. Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e falso caso contrário.

function ehPar(n) {
    if(n % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(ehPar(1));