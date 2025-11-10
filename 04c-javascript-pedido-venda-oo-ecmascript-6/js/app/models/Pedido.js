class Pedido {
   
    constructor() {
        this._itens = [];
    }

    adiciona (item ) {
        this._itens.push(item );
    }

    getItens() {
       return this._itens;
       //return [].concat(this._itens );

    }
}