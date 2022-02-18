import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { CartSummaryRoutingModule } from './cart-summary-routing.module';



@NgModule({
    declarations: [
        CartSummaryComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        FormsModule,
        // CartSummaryRoutingModule
    ],
    exports: [
        CartSummaryComponent
    ]
})
export class CartSummaryModule { }
