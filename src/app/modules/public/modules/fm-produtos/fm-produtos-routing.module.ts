import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutosComponent } from './components/atualizar-produtos/atualizar-produtos.component';

const routes: Routes = [
  {
    path : '',
    component: PesquisarProdutosComponent
  },
  {
    path : 'cadastro',
    component : CadastrarProdutoComponent
  },
  {
    path : 'editar/:id',
    component : AtualizarProdutosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmProdutosRoutingModule { }
