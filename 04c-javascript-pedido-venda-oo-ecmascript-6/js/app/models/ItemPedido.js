class ItemPedido {


    constructor(nome, quantidade, valor) {
        
        this._nome = nome;
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this );
    }

    getSubTotal() {
        return this._quantidade * this._valor;
    }

    get nome() {
        return this._nome;
    }
    
 /*    set nome(nome) {
        this._nome = nome;
    } 
*/

    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}