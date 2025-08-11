
const prod1 = { }

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90

console.log( prod1 )

const prod2 = { 
   nome : 'Celular Ultra Mega',
   preco : 4998.90,
   desconto: 0.40 // atributo criado diretamente no objeto
}

// console.log( prod2 )


prod1['desconto'] = 0.40 // outra forma de criar atributos. 
//prod1.desconto = 0.40 // outra forma de criar atributos.

console.log(prod1 )


console.log("**** Produto 3 ****")
const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod3 )