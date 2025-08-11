const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

console.log(notas.length )

/* for (let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i + 1}: ${notas[i]}`)
} */


for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// console.log(pessoa.nome)
// console.log(pessoa['nome'])