class MensagemView {

    constructor(elemento ) {
        this._elemento = elemento;
    }


    _template(mensagem ) {
        return mensagem.texto ? 
             `<p class="alert alert-info">${mensagem.texto}</p>` : '<p></p>';
    }


    update(mensagem ) {
        this._elemento.innerHTML
                    = this._template(mensagem );
    }
}