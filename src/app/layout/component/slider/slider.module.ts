import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
