public class Pedido {
    private Integer id;
    private Cliente cliente;
    private BigDecimal desconto;
    private BigDecimal valorFrete;

    private EndereEntrega enderecoEntrega;

    private Pagamento pagamento;

    private List<ItemPedido> itens;
}
