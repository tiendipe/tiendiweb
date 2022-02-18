import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselMapComponent } from './carousel-map.component';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CarouselMapComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        ButtonModule,
        ToastModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        CarouselMapComponent
    ]
})
export class CarouselMapModule { }
