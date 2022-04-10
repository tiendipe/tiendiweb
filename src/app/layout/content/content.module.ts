import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { ProductsListModule } from '../component/products-list/products-list.module';
import { BreadcrumbModule } from '../component/breadcrumb/breadcrumb.module';
import { SlidemenuModule } from '../component/slidemenu/slidemenu.module';
import { ProductsFilterModule } from '../component/products-filter/products-filter.module';
import { CarouselModule } from '../component/carousel/carousel.module';
import { BagModule } from '../component/bag/bag.module';
import { ProductoService } from 'src/app/services/producto.service';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        ProductsListModule,
        ProductsFilterModule,
        BreadcrumbModule,
        SlidemenuModule,
        BagModule,
        CarouselModule
    ],
    exports: [
        ContentComponent
    ],
    providers: [
      ProductoService
  ]
})
export class ContentModule { }
