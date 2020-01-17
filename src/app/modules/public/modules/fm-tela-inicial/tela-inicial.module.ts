import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [TelaInicialComponent],
  imports: [
    CommonModule,
    TelaInicialRoutingModule,
    SharedComponentsModule
    
  ]
})
export class TelaInicialModule { }
