import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { SharedDirectiveModule } from 'src/app/shared/shared-directive/shared-directive.module';
import { ManterContribuinteComponent } from './components/manter-contribuinte/manter-contribuinte.component';
import { PesquisarContribuinteComponent } from './components/pesquisar-contribuinte/pesquisar-contribuinte.component';
import { FmContribuintesRoutingModule } from './fm-contribuintes-routing.module';
import { FmContribuinteService } from './services/fm-contribuinte.service';


@NgModule({
  declarations: [
    PesquisarContribuinteComponent,
    ManterContribuinteComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedDirectiveModule,
    FmContribuintesRoutingModule
  ],
  providers: [
    FmContribuinteService
  ]
})
export class FmContribuintesModule { }
