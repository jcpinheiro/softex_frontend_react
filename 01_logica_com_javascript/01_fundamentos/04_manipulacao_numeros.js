const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, ' # ', peso2)

console.log( Number.isInteger(peso1) )
console.log( Number.isInteger(peso2) )

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = ( avaliacao1 * peso1 ) + ( avaliacao2 * peso2 ) // foco na legibilidade do código

console.log('========================= ') 
const media = total / ( peso1 + peso2 )

console.log(media.toFixed(2)) // limita a 2 casas decimais
console.log(media.toString(10)) // converte para string
console.log(media.toString(2)) // em binário
console.log(media.toString(8)) // octal
console.log(media.toString(16)) // hexadecimal

console.log(typeof media)
console.log(typeof Number)