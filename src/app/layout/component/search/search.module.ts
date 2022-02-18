import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {InputTextModule} from 'primeng/inputtext';




@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
        InputTextModule,

  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
