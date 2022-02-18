import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PrimengModule } from '../../primeng/primeng.module';

import { CardModule } from '../component/card/card.module';
import { ProductsListModule } from '../component/products-list/products-list.module';
import { BreadcrumbComponent } from '../component/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from '../component/breadcrumb/breadcrumb.module';
import { SlidemenuModule } from '../component/slidemenu/slidemenu.module';
import { BagModule } from '../component/bag/bag.module';

import { ListRoutingModule } from './list-routing.module';



@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,

        CardModule,
        ProductsListModule,
        BreadcrumbModule,
        SlidemenuModule,
        BagModule,

        ListRoutingModule
    ],
    exports: [
        ListComponent
    ]
})
export class ListModule { }
