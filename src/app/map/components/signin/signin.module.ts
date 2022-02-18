import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
