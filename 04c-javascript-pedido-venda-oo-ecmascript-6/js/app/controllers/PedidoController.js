class PedidoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputNome = $('#nome' );
        this._inputQuantidade = $('#quantidade' );
        this._inputValor = $('#valor' );

        // model
        this._pedido = new Pedido(); 

        // view
        this._pedidoView = new PedidoView($('#js-pedidoVendaView') );

        this._pedidoView.update(this._pedido );
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') );
        this._mensagemView.update(this._mensagem );

    }
    
    adiciona(event ) {
        
        event.preventDefault();

        let item = this._criaItemPedido();
        this._pedido.adiciona(item ); 
        this._pedidoView.update(this._pedido );

        this._limpaFormulario();


        this._mensagem.texto = `Item ${item.nome} foi adicionado com sucesso.`;
        this._mensagemView.update(this._mensagem );
    }

    _criaItemPedido() {
        return new ItemPedido(
            this._inputNome.value,
            this._inputQuantidade.value,
            this._inputValor.value  
        );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = '';

        this._inputNome.focus();
    }
}