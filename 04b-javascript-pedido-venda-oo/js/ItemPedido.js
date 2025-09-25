function constroiItemPedido(pNome, pQuantidade, pValor) {

     let item = {

        nome: pNome,
        quantidade: pQuantidade,
        valor: pValor,

        getSubTotal: function () {
            return this.quantidade * this.valor;
        },

        comparaItem: function(outroItem ) {

            if (this.nome == outroItem.nome 
                 && this.quantidade == outroItem.quantidade
                 && this.valor == outroItem.valor ) {
                     return true;
                 }
            return false;     
        }
       
    };
    return item;

}



