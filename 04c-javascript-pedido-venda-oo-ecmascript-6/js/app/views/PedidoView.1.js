class PedidoView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(pedido ) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
        
            <tbody>
                ${pedido.itens.map(item => `
                    
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td> 
                        <td>${item.subTotal}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>

           <tfoot>
                <td colspan="3"></td>
                <td>
                    ${pedido.itens.reduce((total, item) => 
                        total + item.subTotal, 0.0)}
                </td>
            </tfoot>
            
        </table>
        `;
    }

    update(pedido ) {
        this._elemento.innerHTML = 
                      this._template(pedido );
    }
}






/*           <tfoot>
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