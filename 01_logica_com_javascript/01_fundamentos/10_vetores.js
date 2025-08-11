const valores = [7.7, 8.9, 6.3, 9.2, 10.5]
      // posicao  0    1    2    3     4

console.log(typeof valores) 

   
console.log(valores[0], valores[3])
console.log(valores[5]) // undefined, pois não existe o índice 5

valores[5] = 10
console.log(valores)
console.log(valores.length)


valores.push(15.5) // adiciona um novo elemento ao final do vetor

console.log(valores)

console.log('removendo o último elemento do vetor')

console.log(valores.pop())

console.log(typeof valores)