function constroiPedido() {

    let pedido = {

        itens: [],

        adiciona: function (item ) {
            this.itens.push(item );
        },

        adicionaItens: function(...itens ) {
            this.itens.push(itens );
        },

        getTotal: function () {
            let total = 0;
            this.itens.forEach(function (item) {
                total = total + item.getSubTotal();
            });
            return total;
        },

        remove: function(item ) {
          
            for(let i = 0; i < this.itens.length; i++) {

               if ( this.itens[i].comparaItem(item ) ) {
                  console.log('Remove ' + itens[i]);
               }
            }
        }
    };
    return pedido;
}

