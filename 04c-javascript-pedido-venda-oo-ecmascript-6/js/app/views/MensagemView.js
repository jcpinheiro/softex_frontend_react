class MensagemView extends View {

    constructor(elemento ) {
        super(elemento );
    }

    _template(mensagem ) {
        return mensagem.texto ? 
           `<p class="alert alert-info">${mensagem.texto}</p>` 
           :'<p></p>';
    }
  
}