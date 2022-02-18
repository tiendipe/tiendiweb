import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary.component';
import { SummaryModule } from '../summary/summary.module';
import { PrimengModule } from '../../../primeng/primeng.module';

@NgModule({
    declarations: [
        OrderSummaryComponent
    ],
    imports: [
        CommonModule,
        SummaryModule,
        PrimengModule
    ],
    exports: [
        OrderSummaryComponent
    ]
})
export class OrderSummaryModule { }
