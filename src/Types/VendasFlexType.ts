export type VendasFlexProps = {
  CPFCliente: string | null;
  DataPagamentoAprovado: string;
  Desconto: number;
  DigitosCartao: string | null;

  Endereco: {
    Bairro_Entrega: string | null;
    CEP_Entrega: string | null;
    Cidade_Entrega: string | null;
    Complemento_Entrega: string | null;
    Estado_Entrega: string | null;
    Logradouro_Entrega: string | null;
    Numero_Entrega: string | null;
  };

  FormaPagamento: string | null;
  IdOrcamento: number;
  Loja: string | null;
  NomeBandeira: string | null;
  NomeCliente: string | null;
  Observacao: string | null;
  Parcelas: number;

  Produtos: [
    {
      Descricao: string | null;
      NomeProduto: string | null;
      Quantidade: number;
      ValorItem: number;
    }
  ];

  ValorPagamento: number;
  ValorTotal: number;
  authorizationCode: string | null;
  nsu: string | null;
  tid: string | null;
};
