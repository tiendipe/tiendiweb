import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentOrderMoreComponent } from './recent-order-more.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './shared/primeng.module';

@NgModule({
  declarations: [
    RecentOrderMoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule
  ]
})
export class RecentOrderMoreModule { }
