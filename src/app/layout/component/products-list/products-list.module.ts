import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../card/card.module';


@NgModule({
    declarations: [
        ProductsListComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        CardModule,
        FormsModule
    ],
    exports: [
        ProductsListComponent
    ]
})
export class ProductsListModule { }
