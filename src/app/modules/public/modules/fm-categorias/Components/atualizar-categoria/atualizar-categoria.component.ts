import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../Services/categorias.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-atualizar-categoria',
  templateUrl: './atualizar-categoria.component.html',
  styleUrls: ['./atualizar-categoria.component.css']
})
export class AtualizarCategoriaComponent implements OnInit {

  form : FormGroup

  constructor(
    private service : CategoriasService,
    private formBuilder : FormBuilder,
    private location : Location,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const categoria$ = this.service.loadById(id);
        categoria$.subscribe( categoria => {
          this.updateForm(categoria);
        });
      }
    );

    this.form = this.formBuilder.group({
      id : [""],
      descricao : ["", [Validators.required]]
    });
  }

  updateForm(categoria){
    this.form.patchValue({
      id : categoria.id,
      descricao : categoria.descricao
    });
  }

  updateDescription(){
    if (this.form.valid){
      this.service.uptadeCategoria(this.form.value).subscribe(
        () => {
          this.location.back();

        }
      )
    }
  }

  cancel(){
    this.form.reset();
    this.location.back();
  }


}
