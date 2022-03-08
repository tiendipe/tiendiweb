import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IProducto } from '../../../interfaces/producto';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
    @Output() onEmitProductID: EventEmitter<number> = new EventEmitter();
    @Input() producto: IProducto;

    favorite: boolean = false;
    aggregated: boolean = false;
    labelAdd: string = '';
    iconAdd: string = '';
    classAdd: string = '';
    quantity: number = 0;

    constructor() { }

    ngOnInit(): void {
        this.labelAdd = 'Agregar';
        this.iconAdd = '';
        this.classAdd = '';
        this.quantity = 1;
    }

    emitProductID(ProductID: number): void {
        this.onEmitProductID.emit(ProductID);
    }

    onAdd(): void {
        if (this.aggregated) {
            this.labelAdd = 'Agregar';
            this.iconAdd = '';
            this.classAdd = '';
        }
        else {
            this.labelAdd = 'Agregado';
            this.iconAdd = 'pi pi-check';
            this.classAdd = 'selected-product';
        }
        this.aggregated = !this.aggregated;
    }
}
