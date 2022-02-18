import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { CardModule } from '../card/card.module';
import { ProductService } from './shared/carousel.service';

@NgModule({
    declarations: [
        CarouselComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        CardModule
    ],
    exports: [
        CarouselComponent
    ],
    providers: [
        ProductService
    ]
})
export class CarouselModule { }
