import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentOrderComponent } from './recent-order.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './shared/primeng.module';


@NgModule({
    declarations: [
        RecentOrderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PrimengModule
    ],
    exports: [
        RecentOrderComponent
    ]
})
export class RecentOrderModule { }
