import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentAndDeliveryComponent } from './payment-and-delivery.component';
// import { PrimengModule } from 'src/app/primeng/primeng.module';
import { RecentOrderDetailModule } from '../recent-order-detail/recent-order-detail.module';
import { PrimengModule } from './shared/primeng.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentAndDeliveryComponent],
  imports: [
    FormsModule,
    CommonModule,
    PrimengModule,
    RecentOrderDetailModule,
  ],
  exports: [PaymentAndDeliveryComponent],
})
export class PaymentAndDeliveryModule {}
