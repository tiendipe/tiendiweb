import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { IndexModule } from '../index/index.module';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    IndexModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
