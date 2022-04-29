import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary.component';
import { RecentOrderDetailModule } from '../recent-order-detail/recent-order-detail.module';
import { DispatchOrderModule } from '../dispatch-order/dispatch-order.module';
import { PrimengModule } from './shared/primeng.module';
import { PaymentOrderModule } from '../payment-order/payment-order.module';

@NgModule({
  declarations: [OrderSummaryComponent],
  imports: [
    RecentOrderDetailModule,
    DispatchOrderModule,
    PaymentOrderModule,
    CommonModule,
    PrimengModule,
  ],
  exports: [OrderSummaryComponent],
})
export class OrderSummaryModule {}
