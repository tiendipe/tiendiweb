import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './searcher.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../../primeng/primeng.module';
import { CarouselMapModule } from '../carousel-map/carousel-map.module';
import { SearcherService } from './searcher.service';



@NgModule({
  declarations: [
    SearcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    CarouselMapModule
  ],
  providers: [SearcherService],
  exports: [
    SearcherComponent
  ]
})
export class SearcherModule { }
