import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './compoent/navbar/navbar.component';
import { SelectComponent } from './compoent/select/select.component';
import { SpinnerComponent } from './compoent/spinner/spinner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SelectComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    NavbarComponent,
    SelectComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
