import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { PrimengModule } from '../../../primeng/primeng.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
