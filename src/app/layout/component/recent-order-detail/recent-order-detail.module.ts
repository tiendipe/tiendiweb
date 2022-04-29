import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentOrderDetailComponent } from './recent-order-detail.component';
import { PrimengModule } from './shared/primeng.module';


@NgModule({
    declarations: [
      RecentOrderDetailComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ],
    exports: [
      RecentOrderDetailComponent
    ]
})
export class RecentOrderDetailModule { }
