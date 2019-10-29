import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerPadraoComponent } from './components/container-padrao/container-padrao.component';


@NgModule({
  declarations: [
  ContainerPadraoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ContainerPadraoComponent
  ]
})
export class SharedComponentsModule { }
