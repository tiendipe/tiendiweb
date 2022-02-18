import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { PrimengModule } from '../../../primeng/primeng.module';



@NgModule({
    declarations: [
        OrdersComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ],
    exports: [
        OrdersComponent
    ]
})
export class OrdersModule { }
