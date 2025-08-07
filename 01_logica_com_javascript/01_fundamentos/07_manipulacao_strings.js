const escola = "Softex"

console.log(escola.charAt(2))
console.log(escola.charAt(6))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '
               .concat(escola)
               .concat("!")
               .substring(0, 10)
               .toUpperCase()
               )



console.log('Escola ' + escola + "!")
console.log(escola.replace('t', '7'))

console.log('Ana, Maria, Pedro'.split(','))