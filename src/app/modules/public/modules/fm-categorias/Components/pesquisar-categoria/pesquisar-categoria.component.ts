import { Component, OnInit } from '@angular/core';
import { CategoriasModel } from '../../Models/categoria.model';
import { CategoriasService } from '../../Services/categorias.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisar-categoria',
  templateUrl: './pesquisar-categoria.component.html',
  styleUrls: ['./pesquisar-categoria.component.css']
})
export class PesquisarCategoriaComponent implements OnInit {

  categorias : CategoriasModel[] = [];

  constructor(
    private CategoriasService : CategoriasService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.CategoriasService.getCategoria().subscribe(listaCategorias => {
      this.categorias = listaCategorias;
    })
  }

  edit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route})

  }

  delete(categoria){
    this.CategoriasService.deleteCategoria(categoria.id).subscribe(
        () => {this.CategoriasService.getCategoria()
          .subscribe(listaCategorias => {
          this.categorias = listaCategorias;
        });}
      
    );
  }

}
