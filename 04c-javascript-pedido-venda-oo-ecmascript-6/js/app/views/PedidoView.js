class PedidoView extends View {

    constructor(elemento) {
        super(elemento );
    }

    _template(pedido ) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
        
            <tbody>
                ${pedido.getItens().map(item => `
                    
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.getSubTotal()}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>

           <tfoot>
                <td colspan="3">Total</td>
                <td>
                    ${(pedido.getItens().reduce((total, item) => 
                                                total + item.getSubTotal(), 0.0)).toFixed(2)}
                </td>
            </tfoot>
            
        </table>
        `;
    }
}



/*          
 <tfoot>
              <td colspan="3"></td>
                 <td>${
                      (function calculaTotal() {
                         let total = 0.0;
                         pedido.itens.forEach(item => total += item.subTotal );
                         return total;
                      })()
                      
                    }
             </td>
            </tfoot>

<tfoot>
<td colspan="3"></td>
<td>
   ${pedido.itens
          .reduce(function(total, item) {
               return total + item.subTotal;
          }, 0.0)
     }
</td>
</tfoot>

 */