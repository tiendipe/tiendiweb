import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesComponent } from './policies.component';



@NgModule({
  declarations: [
    PoliciesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PoliciesComponent
  ]
})
export class PoliciesModule { }
