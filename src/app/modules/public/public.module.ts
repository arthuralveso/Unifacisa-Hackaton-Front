import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
