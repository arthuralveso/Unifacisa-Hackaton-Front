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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
