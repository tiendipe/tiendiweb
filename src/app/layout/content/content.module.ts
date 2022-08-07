import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ProductsListModule } from '../component/products-list/products-list.module';
import { BreadcrumbModule } from '../component/breadcrumb/breadcrumb.module';
import { SlidemenuModule } from '../component/slidemenu/slidemenu.module';
import { ProductsFilterModule } from '../component/products-filter/products-filter.module';
import { CarouselModule } from '../component/carousel/carousel.module';
import { BagModule } from '../component/bag/bag.module';
import { ProductoService } from 'src/app/services/producto.service';
// import { PrimengModule } from 'src/app/primeng/primeng.module';
import { PrimengModule } from './shared/primeng.module';
import { TermsAndConditionsModule } from '../component/terms-and-conditions/terms-and-conditions.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    ProductsListModule,
    ProductsFilterModule,
    BreadcrumbModule,
    SlidemenuModule,
    BagModule,
    CarouselModule,
    PrimengModule,
    TermsAndConditionsModule
  ],
  exports: [ContentComponent],
  providers: [ProductoService],
})
export class ContentModule {}
