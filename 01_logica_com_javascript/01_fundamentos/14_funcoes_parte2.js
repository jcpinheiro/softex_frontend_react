// Armazenando uma funcao em uma variavel

/* function imprimeSoma (a, b) {
    console.log(a + b)
} */

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

const somar2 = (a, b) => console.log(a + b)
// A função somar2 imprime a soma de a e b
somar2(2, 3)


//const multiplicao = function(a, b) {return a * b }

const multiplicao =  (a, b) => a * b 
//let resultado = multiplicao(10,30 )
console.log( multiplicao(10,30 ) )



// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b

// A função subtracao retorna a diferença entre a e b
console.log(subtracao(2, 3))