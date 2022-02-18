import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class BreadcrumbModule { }
