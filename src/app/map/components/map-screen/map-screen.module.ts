import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './map-screen.component';
import { SearcherModule } from '../searcher/searcher.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    MapScreenComponent
  ],
  imports: [
    CommonModule,
    SearcherModule,
    IconsModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapScreenModule { }
