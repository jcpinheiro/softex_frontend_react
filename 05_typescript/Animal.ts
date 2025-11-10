/* class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    emitirSom() : void{
        console.log(`${this.name} está emitindo um som.`)
    }
} */

class Animal {
    constructor(readonly name: string) { }

    emitirSom() : void{
        console.log(`${this.name} está emitindo um som.`)
    }
}

/* const cachorro = new Animal('Rex')   
//cachorro.name = 'Buddy'
console.log(cachorro.name )
cachorro.emitirSom()

const gato = new Animal('Miau')
gato.emitirSom() */
class Cachorro extends Animal {
    
    override emitirSom(): void {
       super.emitirSom()
       console.log(`${this.name} está latindo.`)
    }
}
const cachorro = new Cachorro('Rex')
console.log(cachorro.name)
cachorro.emitirSom()    
