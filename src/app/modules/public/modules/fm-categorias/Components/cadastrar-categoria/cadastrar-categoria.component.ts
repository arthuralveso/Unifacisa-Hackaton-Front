import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../Services/categorias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  form : FormGroup
  submitted : boolean = false;


  constructor(
    private service : CategoriasService,
    private formBuilder : FormBuilder,
    private location : Location
  ) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      descricao : ["", [Validators.required]]
    });
  }

  submit(){
    this.submitted = true;
    if(this.form.valid){
      this.service.createCategoria(this.form.value).subscribe(
        () => {
          console.log(this.form.value)
          this.location.back();
      }
      )
    }
  }
  cancel(){
    this.submitted = false;
    this.form.reset();

  }
}
