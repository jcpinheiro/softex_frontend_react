
const tbody = document.querySelector('table tbody');
const form = document.querySelector('.form');

let pedido = constroiPedido();

form.addEventListener('submit', function (event) {

    event.preventDefault();

    let item = constroiItemPedido(
        form.querySelector('#nome').value,
        form.querySelector('#quantidade').value,
        form.querySelector('#valor').value
    );
   
    let erros = validaFormulario(item );

    if (erros.length == 0 ) { // naoExisteErro
       
        pedido.adiciona(item );

        constroiTrItemPedido(item );
        
        atualizaTrTotalPedido();
  
    } else {
        console.log(erros );
        let ul = document.querySelector('#js-msg-erros');
        ul.classList = 'alert alert-danger';

        let lis =ul.querySelectorAll('#js-msg-erros > li');

        erros.forEach(function(erro) { 
               let li = document.createElement('li');
               li.textContent = erro;
               ul.appendChild(li);
            } );

            lis.forEach( li => li.remove()  );
        
       
    }
});

function validaFormulario(item) {

    const msgErros = [];

     if (item.nome.trim() == '') {
         msgErros.push('Informe um nome válido para o produto');
     }

     if (item.quantidade < 1 ) {
        msgErros.push('Informe uma quantidade >= 1');
    }
    return msgErros;
}

function adicionaTD(valor) {
    let td = document.createElement('td');
    td.textContent = valor;
    return td;
}


function constroiTrItemPedido(item) {
    let tr = document.createElement('tr');

    tr.appendChild( adicionaTD(item.nome) );
    tr.appendChild( adicionaTD(item.quantidade) );
    tr.appendChild( adicionaTD(item.valor) );
    tr.appendChild( adicionaTD(item.getSubTotal().toFixed(2) ) );
    tr.appendChild( criarTDComBotao('remover') );

    tbody.appendChild(tr);
}

function criarTDComBotao(rotulo ) {

      let botao = document.createElement('button');
      botao.textContent = rotulo;
      botao.classList='btn btn-outline-danger btn-sm';
      
      let td = document.createElement('td');
      td.classList = 'text-center'
      td.appendChild(botao)
      return td;
}

function atualizaTrTotalPedido() {

    let tdTotal = document.querySelector('.js-total');
    tdTotal.textContent = pedido.getTotal().toFixed(2);
}

/**** ação remover item pedido ****/
tbody.addEventListener('dblclick', function (event) {

    console.log(event.target);
    console.log(event.target.textContent);

    if (event.target.textContent == 'remover') {
        
        let tr = event.target.parentNode.parentNode;

        tr.classList = 'oculta-elemento';

        setTimeout(function () {
            let tds = tr.querySelectorAll('td'); 

            let item = constroiItem(tds);

            pedido.remove(item );
            tr.remove();
            atualizaTrTotalPedido();           
            
        }, 1000);
    }
});


function constroiItem() {

    return 
       constroiItemPedido(tds[0].textContent, 
                          tds[1].textContent, 
                          tds[2].textContent );
     

}
