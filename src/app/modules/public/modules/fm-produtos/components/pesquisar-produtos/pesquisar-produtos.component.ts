import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from '../../Models/produto.model';
import { ProdutosService } from '../../Services/produtos.service'

@Component({
  selector: 'app-pesquisar-produtos',
  templateUrl: './pesquisar-produtos.component.html',
  styleUrls: ['./pesquisar-produtos.component.css']
})
export class PesquisarProdutosComponent implements OnInit {

  produtos: ProdutosModel[] = [];

  constructor(
    private ProdutosService: ProdutosService
  ) { }

  ngOnInit() {
    this.ProdutosService.getProduto().subscribe(listaProdutos => {
      this.produtos = listaProdutos;
    });

  }

}
