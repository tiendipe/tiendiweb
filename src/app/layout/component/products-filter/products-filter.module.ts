import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFilterComponent } from './products-filter.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProductsFilterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PrimengModule,
    ],
    exports: [
        ProductsFilterComponent
    ]
})
export class ProductsFilterModule { }
