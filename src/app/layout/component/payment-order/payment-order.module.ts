import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentOrderComponent } from './payment-order.component';

@NgModule({
  declarations: [PaymentOrderComponent],
  imports: [CommonModule],
  exports: [PaymentOrderComponent],
})
export class PaymentOrderModule {}
