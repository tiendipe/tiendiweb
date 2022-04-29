import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentAndDeliveryComponent } from './payment-and-delivery.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { RecentOrderDetailModule } from '../recent-order-detail/recent-order-detail.module';

@NgModule({
    declarations: [
        PaymentAndDeliveryComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        RecentOrderDetailModule
    ],
    exports: [
        PaymentAndDeliveryComponent
    ]
})
export class PaymentAndDeliveryModule { }
