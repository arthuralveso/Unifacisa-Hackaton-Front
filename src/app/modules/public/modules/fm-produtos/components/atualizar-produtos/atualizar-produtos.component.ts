import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../../Services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-atualizar-produtos',
  templateUrl: './atualizar-produtos.component.html',
  styleUrls: ['./atualizar-produtos.component.css']
})
export class AtualizarProdutosComponent implements OnInit {
  form : FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private produtosService : ProdutosService,
    private route : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params : any) => {
        const id = params['id']
        console.log(id)
        const produto$ = this.produtosService.loadById(id);
        produto$.subscribe( produto =>
          this.updatedForm(produto)
        )
      }
    )

    this.form = this.formBuilder.group({
      id : [""],
      nome : ["", [Validators.required]],
      desc : ["", [Validators.required]],
      valor : ["", [Validators.required]]
    }) 
  }

  updatedForm(produto){
    this.form.patchValue({
      id : produto.id,
      nome : produto.nome,
      desc : produto.desc,
      valor : produto.valor

    })
  }

  update(){
    if (this.form.valid){
      this.produtosService.updateProduto(this.form.value).subscribe(
        () => {this.location.back()}
      )
    }
  }



  onCancel(){
    this.form.reset();
  }

}
