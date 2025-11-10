interface Entregavel {
  entregar(): void;
}

interface PedidoInfo { 
    emitePedido(): void;
}


class Pedido implements Entregavel, PedidoInfo {

  constructor(public numero: number, public endereco: string) {}
 
  entregar() {
    console.log(`Pedido ${this.numero} entregue em ${this.endereco}.`);
  }

  emitePedido(): void {
    console.log(`Emitindo pedido número ${this.numero} para o endereço ${this.endereco}.`);
  }
  // Outros métodos e propriedades relacionados ao pedido podem ser adicionados aqui
}


const pedido : Pedido = new Pedido(123, "Rua das Flores, 45");
pedido.entregar();

pedido.emitePedido();