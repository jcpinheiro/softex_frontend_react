var Pedido = /** @class */ (function () {
    function Pedido(numero, endereco) {
        this.numero = numero;
        this.endereco = endereco;
    }
    Pedido.prototype.entregar = function () {
        console.log("Pedido ".concat(this.numero, " entregue em ").concat(this.endereco, "."));
    };
    return Pedido;
}());
var pedido = new Pedido(123, "Rua das Flores, 45");
pedido.entregar();
