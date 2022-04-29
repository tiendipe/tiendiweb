import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { RecentOrderModule } from '../recent-order/recent-order.module';
import { OrdersModule } from '../orders/orders.module';
import { OrderSummaryModule } from '../order-summary/order-summary.module';
import { PedidoService } from 'src/app/services/pedido.service';
import { RecentOrderDetailModule } from '../recent-order-detail/recent-order-detail.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    PrimengModule,
    RecentOrderModule,
    OrdersModule,
    RecentOrderDetailModule,
    OrderSummaryModule,
  ],
  exports: [UserComponent],
  providers: [PedidoService],
})
export class UserModule {}
