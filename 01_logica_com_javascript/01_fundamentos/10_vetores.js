const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)


valores.push(10.5)
console.log(valores)

console.log('removendo o último elemento do vetor')

console.log(valores.pop())

console.log(typeof valores)