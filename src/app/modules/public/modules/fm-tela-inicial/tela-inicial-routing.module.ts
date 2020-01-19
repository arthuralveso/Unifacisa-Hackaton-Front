import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { PesquisarProdutosComponent } from '../fm-produtos/components/pesquisar-produtos/pesquisar-produtos.component';
import { PesquisarCategoriaComponent } from '../fm-categorias/Components/pesquisar-categoria/pesquisar-categoria.component';

const routes : Routes = [
  {
    path: '',
    component: TelaInicialComponent
  },
  {
    path: 'produtos',
    component: PesquisarProdutosComponent
  },
  {
    path: 'categorias',
    component: PesquisarCategoriaComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaInicialRoutingModule { }
