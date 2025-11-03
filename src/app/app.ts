import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produto } from '../shared/models/Produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cards } from './components/cards/cards';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'prova-angular2';

  protected produtos = [
    new Produto('Galeões de Ouro', 50, 15.9, 0, 'galeoes.jpg'),
    new Produto(
      'Espada Mata Serpentes de Gryffindor',
      5,
      899.9,
      0,
      'espada_mata_serpentes.webp'
    ),
    new Produto(
      'Varinha do Professor Snape',
      15,
      149.9,
      0,
      'varinha_snape.webp'
    ),
    new Produto(
      'Varinha das Varinhas (Elder Wand)',
      8,
      299.9,
      0,
      'varinha_elder_wand.webp'
    ),
    new Produto(
      'Varinha do inominável',
      10,
      189.9,
      0,
      'varinha_do_que_nao_pode_ser_nomeado.webp'
    ),
    new Produto('Mapa do Maroto', 25, 79.9, 0, 'mapa_maroto.jpg'),
    new Produto('Chapéu Seletor', 12, 249.9, 0, 'chapeu_seletor.jpg'),
    new Produto('Caldeirão de Poções', 20, 129.9, 0, 'caldeirao.webp'),
    new Produto('Caixa de Ovos de Dragão', 30, 45.9, 0, 'caixa_ovos.webp'),
    new Produto('Livro de Poções Avançadas', 18, 89.9, 0, 'livro_pocoes.jpeg'),
    new Produto('Moto Voadora', 3, 1499.9, 0, 'moto_voadora.webp'),
    new Produto(
      'Ticket Plataforma 9¾',
      100,
      12.9,
      0,
      'ticket_plataforma_934.jpg'
    ),
    new Produto(
      'Vassoura Nimbus 2000',
      15,
      599.9,
      0,
      'vassoura_nimbus_2k.webp'
    ),
    new Produto('Vassoura Firebolt', 8, 1299.9, 0, 'vassoura_firebolt.webp'),
  ];

  protected listaSelecionado: Produto[] = [];

  protected qtdItensCarrinho = 0;
  protected qtdItensTotal = 0;
  protected valorTotal = 0;
  protected quantidade = 0;

  adicionarLista(produto: Produto) {
    
    if(produto.qtdCarrinho > produto.qntd) {
      alert("Não pode adicionar mais produtos do que o existente no estoque");
      return;
    } else if (produto.qtdCarrinho < 1) {
      alert("Adicione pelo menos um item ao carrinho");
      return;
    }
    
    this.listaSelecionado.push(produto);
    this.qtdItensCarrinho = this.listaSelecionado.length;
    this.qtdItensTotal += produto.qtdCarrinho;
    produto.qntd -= produto.qtdCarrinho;

    for (let i = 1; i <= produto.qtdCarrinho; i++) {
      this.valorTotal = this.valorTotal + produto.preco;
    }
  }

  protected filtroNome: string = '';
  protected marcado = false;

  get filtros() {
    let listaFiltrada = this.produtos;

    if (this.filtroNome) {
      listaFiltrada = listaFiltrada.filter((produto) =>
        produto.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
      );
    }
    if(this.marcado) {
      listaFiltrada = this.listaSelecionado;

      listaFiltrada = listaFiltrada.filter((produto) =>
        produto.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
      );
    }
    return listaFiltrada;
  }

  protected listaVazia: Produto[] = [];

  limparCarrinho() {
    this.qtdItensCarrinho = 0;
    this.qtdItensTotal = 0;
    this.valorTotal = 0;
    this.listaSelecionado = this.listaVazia;
  }
}
