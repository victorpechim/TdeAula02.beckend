//10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

function fatorial(n) {
    if(n > 0){
        for(let i = n - 1; i > 0; i--){
            n *= i;
        }
        return n;
    }
}
console.log(fatorial(5));