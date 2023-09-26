import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducetRoutingModule } from './producet-routing.module';
import { HomeComponent } from './compoent/home/home.component';
import { DetalisComponent } from './compoent/detalis/detalis.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    DetalisComponent
  ],
  imports: [
    CommonModule,
    ProducetRoutingModule,
    SharedModule

  ]
})
export class ProducetModule { }
