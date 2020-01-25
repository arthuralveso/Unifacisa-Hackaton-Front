import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'hackathon-unifacisa',
    component: HomeComponent,
    children: [
      {
        path: 'contribuintes',
        loadChildren: './modules/fm-contribuintes/fm-contribuintes.module#FmContribuintesModule'
      },
      {
        path: 'produtos',
        loadChildren: './modules/fm-produtos/fm-produtos.module#FmProdutosModule'
      },
      {
        path: 'tela-inicial',
        loadChildren: './modules/fm-tela-inicial/tela-inicial.module#TelaInicialModule'
      },
      {
        path: 'categorias',
        loadChildren: './modules/fm-categorias/fm-categoria.module#FmCategoriaModule'
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
