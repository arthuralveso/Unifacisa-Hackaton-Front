import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../../Services/produtos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
  form : FormGroup
  submitted = false

  constructor(
    private formBuilder : FormBuilder,
    private service : ProdutosService,
    private location : Location
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome : ["", [Validators.required]],
      desc : ["", [Validators.required]],
      valor : ["", [Validators.required]]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.valid){
      this.service.createProduto(this.form.value).subscribe(
        () => {
          console.log(this.form.value);
          this.location.back();
        }
      );
    }
  }
  cancel(){
    this.form.reset();
    this.location.back();
  }

}
