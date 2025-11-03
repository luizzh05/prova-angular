export class Produto {
  constructor(
    public nome: string = '',
    public qntd: number = 0,
    public preco: number = 0,
    public qtdCarrinho: number = 0,
    public foto: string = ''
  ) {}
}
