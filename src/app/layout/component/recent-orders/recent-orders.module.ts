import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentOrdersComponent } from './recent-orders.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        RecentOrdersComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        FormsModule
    ],
    exports: [
        RecentOrdersComponent
    ]
})
export class RecentOrdersModule { }
