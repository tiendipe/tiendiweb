import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { RecentOrdersModule } from '../recent-orders/recent-orders.module';
import { OrdersModule } from '../orders/orders.module';
import { SummaryModule } from '../summary/summary.module';
import { OrderSummaryModule } from '../order-summary/order-summary.module';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        RecentOrdersModule,
        OrdersModule,
        SummaryModule,
        OrderSummaryModule
    ],
    exports: [
        UserComponent
    ]
})
export class UserModule { }
