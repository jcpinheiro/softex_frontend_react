
const inputNome = document.querySelector('#nome')
const inputQuant = document.querySelector('#quantidade')
const inputValor = document.querySelector('#valor')

const tbody = document.querySelector('#tbodyItemPedido')

document
  .querySelector('#btnCadastro')
  .addEventListener('click', function(event) {
       event.preventDefault()
      
       let campos = [inputNome.value, inputQuant.value, inputValor.value]
       
 /*      for(let i=0; i < campos.length; i++)
          console.log(campos[i] )  */

       /*  <tr>
            <td></td>
            <td></td>
        </tr>  */

        let linha = document.createElement('tr')
      
        campos.forEach(function(campo ) {
            let celula = document.createElement('td')
            celula.textContent = campo
            celula.classList = 'text-center'
            linha.appendChild(celula)
        })

        let subTotal = campos[1] * campos[2]
       
        let celulaSubTotal = document.createElement('td')
        celulaSubTotal.textContent = subTotal
        celulaSubTotal.classList = 'text-center subtotal-js'
        linha.appendChild(celulaSubTotal ) 

        tbody.appendChild(linha )


        calculaTotal( document.querySelectorAll('.subtotal-js') )

        limpaFormulario()
       
  })

  function calculaTotal(vetSubTotal ) {
    let total = 0
    vetSubTotal.forEach( function(subtotal) {
         total = total + parseFloat(subtotal.textContent)

    })
    console.log('Total ' + total )
  }


  function limpaFormulario() {
    inputNome.value = ''
    inputQuant.value = ''
    inputValor.value = ''

    inputNome.focus()
  }t



