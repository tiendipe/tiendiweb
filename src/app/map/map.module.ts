import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { MapScreenModule } from './components/map-screen/map-screen.module';
import { IconsModule } from './components/icons/icons.module';
import { SearcherModule } from './components/searcher/searcher.module';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    ToolbarModule,
    MapScreenModule,
    IconsModule,
    SearcherModule,
    PrimengModule
  ]
})
export class MapModule { }
