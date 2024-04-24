//6. Crie uma função chamada ehNegativo que recebe um número como parâmetro e retorna true se for negativo e false se for positivo.

function ehNegativo(n) {
    if(n < 0){
        return true;
    }else{
        return false;
    }
}
console.log(ehNegativo(-2))