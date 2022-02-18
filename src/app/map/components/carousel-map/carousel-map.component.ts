import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../searcher/product.model';

@Component({
    selector: 'app-carousel-map',
    templateUrl: './carousel-map.component.html',
    styleUrls: ['./carousel-map.component.scss']
})
export class CarouselMapComponent implements OnInit {
    @Input()
    products: Product[] = [];
    
    @Input()
    width: number = 0;

    constructor() {
    }

    ngOnInit(): void {
    }

}
