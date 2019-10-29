import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmProdutosRoutingModule } from './fm-produtos-routing.module';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';
import { ProdutosService } from './Services/produtos.service';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';

@NgModule({
  declarations: [PesquisarProdutosComponent, CadastrarProdutoComponent],
  imports: [
    CommonModule,
    FmProdutosRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdutosService
  ]
})
export class FmProdutosModule { }
