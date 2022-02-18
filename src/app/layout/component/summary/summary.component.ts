import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

    products: Product[] = [
        {
            name: 'Producto 1',
            price: 100
        },
        {
            name: 'Producto 2',
            price: 100
        },
        {
            name: 'Producto 3',
            price: 100
        },
        {
            name: 'Producto 4',
            price: 100
        }
    ]


    @Output() summary: EventEmitter<boolean> = new EventEmitter();

    closeSummary: boolean = false;

    constructor() { }


    closeTheSummary() {
        this.closeSummary = true;
        this.summary.emit(this.closeSummary)
    }

    ngOnInit(): void {
    }

}
