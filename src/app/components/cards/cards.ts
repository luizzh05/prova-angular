import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../shared/models/Produto';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  @Input() nome: string = '';
  @Input() qntd: number = 0;
  @Input() preco: number = 0;
  @Input() qtdCarrinho: number = 0;
  @Input() foto: string = '';
  @Output() adicionarLista = new EventEmitter<Produto>();

  produto(): Produto {
    return new Produto(
      this.nome,
      this.qntd,
      this.preco,
      this.qtdCarrinho,
      this.foto
    );
  }

  adicionarProduto() {
    this.adicionarLista.emit(this.produto());
  }
}
