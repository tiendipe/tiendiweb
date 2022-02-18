import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidemenuComponent } from './slidemenu.component';
import { PrimengModule } from '../../../primeng/primeng.module';



@NgModule({
  declarations: [
    SlidemenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    SlidemenuComponent
  ]
})
export class SlidemenuModule { }
