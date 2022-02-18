import { NumberSymbol } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../../../interfaces/product';

interface productSummary {
    name: string;
    price: number;
    quantity: number;
}

@Component({
    selector: 'app-cart-summary',
    templateUrl: './cart-summary.component.html',
    styleUrls: ['./cart-summary.component.scss'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class CartSummaryComponent implements OnInit, OnChanges {

    @Input() scroll: boolean = false;
    // @Output() summary: EventEmitter<boolean> = new EventEmitter();

    Subtotal: number = 0;
    Quantity: number = 0;

    constructor() { }

    getSubtotal() {
        this.Subtotal = 0;
        for (var i of this.products) {
            this.Subtotal += ((i.price) * (i.quantity));
        }
        return this.Subtotal
    }

    getQuantity() {
        this.Quantity = 0;
        for (var i of this.products) {
            this.Quantity += i.quantity
        }
        return this.Quantity
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.getSubtotal();
        this.getQuantity();
    }

    ngOnInit(): void {
        this.getSubtotal();
        this.getQuantity();
    }

    restOrDelete(i: number) {
        if (this.products[i].quantity == 1) this.products.splice(i, 1);
        else this.products[i].quantity -= 1;
    }

    deleteItem(i: number) {
        this.products.splice(i, 1);
    }

    panelExists() {
        return true;
    }

    // openBag(){
    //   this.summary.emit(true);
    // }



    products: productSummary[] = [
        {
            name: 'Producto 1',
            price: 100,
            quantity: 1
        },
        {
            name: 'Producto 2',
            price: 100,
            quantity: 2
        },
        {
            name: 'Producto 3',
            price: 100,
            quantity: 3
        },
        {
            name: 'Producto 3',
            price: 100,
            quantity: 3
        },


    ]

}
