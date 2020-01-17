import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';

const routes : Routes = [
  {
    path: '',
    component: TelaInicialComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaInicialRoutingModule { }
