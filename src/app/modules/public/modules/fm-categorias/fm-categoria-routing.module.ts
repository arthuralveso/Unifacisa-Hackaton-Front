import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarCategoriaComponent } from './Components/pesquisar-categoria/pesquisar-categoria.component';
import { CadastrarCategoriaComponent } from './Components/cadastrar-categoria/cadastrar-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisarCategoriaComponent
  },
  {
    path: 'cadastro',
    component: CadastrarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmCategoriaRoutingModule { }
