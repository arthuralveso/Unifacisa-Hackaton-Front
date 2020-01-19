import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { PesquisarProdutosComponent } from '../fm-produtos/components/pesquisar-produtos/pesquisar-produtos.component';
import { ProdutosService } from '../fm-produtos/Services/produtos.service';
import { PesquisarCategoriaComponent } from '../fm-categorias/Components/pesquisar-categoria/pesquisar-categoria.component';

@NgModule({
  declarations: [
    TelaInicialComponent, 
    PesquisarProdutosComponent,
    PesquisarCategoriaComponent
  ],
  
  imports: [
    CommonModule,
    TelaInicialRoutingModule,
    SharedComponentsModule
    
  ],
  providers: [
    ProdutosService
  ]
})
export class TelaInicialModule { }
