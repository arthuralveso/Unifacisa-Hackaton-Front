import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmCategoriaRoutingModule } from './fm-categoria-routing.module';
import { PesquisarCategoriaComponent } from './Components/pesquisar-categoria/pesquisar-categoria.component';
import { CadastrarCategoriaComponent } from './Components/cadastrar-categoria/cadastrar-categoria.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { CategoriasService } from './Services/categorias.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtualizarCategoriaComponent } from './Components/atualizar-categoria/atualizar-categoria.component';

@NgModule({
  declarations: [
    PesquisarCategoriaComponent,
    CadastrarCategoriaComponent,
    AtualizarCategoriaComponent
  ],
  imports: [
    CommonModule,
    FmCategoriaRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CategoriasService
  ]
})
export class FmCategoriaModule { }
