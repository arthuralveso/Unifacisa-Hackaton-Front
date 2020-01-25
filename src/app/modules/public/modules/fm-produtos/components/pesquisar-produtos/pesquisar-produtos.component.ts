import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from '../../Models/produto.model';
import { ProdutosService } from '../../Services/produtos.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisar-produtos',
  templateUrl: './pesquisar-produtos.component.html',
  styleUrls: ['./pesquisar-produtos.component.css']
})
export class PesquisarProdutosComponent implements OnInit {

  produtos: ProdutosModel[] = [];

  constructor(
    private ProdutosService: ProdutosService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.ProdutosService.getProduto().subscribe(listaProdutos => {
      this.produtos = listaProdutos;
    });

  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route})
  }

  onDelete(produto){
    this.ProdutosService.deleteProduto(produto.id).subscribe(
      () => {
        this.ProdutosService.getProduto().subscribe(listaProdutos => {
          this.produtos = listaProdutos;
        });
      }
    );
  }

  
}