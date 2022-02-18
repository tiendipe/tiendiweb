import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentAndDeliveryComponent } from './payment-and-delivery.component';
// import { CartSummaryModule } from '../cart-summary/cart-summary.module';
// import { SummaryModule } from '../summary/summary.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { SummaryModule } from '../summary/summary.module';

@NgModule({
    declarations: [
        PaymentAndDeliveryComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        SummaryModule
    ],
    exports: [
        PaymentAndDeliveryComponent
    ]
})
export class PaymentAndDeliveryModule { }
