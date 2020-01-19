import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmCategoriaRoutingModule } from './fm-categoria-routing.module';
import { PesquisarCategoriaComponent } from './Components/pesquisar-categoria/pesquisar-categoria.component';
import { CadastrarCategoriaComponent } from './Components/cadastrar-categoria/cadastrar-categoria.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [
    PesquisarCategoriaComponent,
    CadastrarCategoriaComponent
  ],
  imports: [
    CommonModule,
    FmCategoriaRoutingModule,
    SharedComponentsModule
  ]
})
export class FmCategoriaModule { }
