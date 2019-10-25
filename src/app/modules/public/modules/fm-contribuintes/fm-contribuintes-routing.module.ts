import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManterContribuinteComponent } from './components/manter-contribuinte/manter-contribuinte.component';
import { PesquisarContribuinteComponent } from './components/pesquisar-contribuinte/pesquisar-contribuinte.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisarContribuinteComponent
  },
  {
    path: 'cadastrar',
    component: ManterContribuinteComponent
  },
  {
    path: 'editar/:id',
    component: ManterContribuinteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmContribuintesRoutingModule { }
