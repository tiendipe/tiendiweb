import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { CartSummaryModule } from '../cart-summary/cart-summary.module';
// import { BagModule } from '../bag/bag.module';



@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        CartSummaryModule,
        // BagModule
    ],
    exports: [
        CartComponent
    ]
})
export class CartModule { }
