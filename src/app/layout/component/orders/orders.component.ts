import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../../../interfaces/order';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

    visibleSideBar: boolean = false;

    @Output() summary: EventEmitter<boolean> = new EventEmitter();
    booleanSummary: boolean = false;

    orders: Order[] = [
        {
            status: 'Sin Enviar',
            store: 'Oxxo',
            total: 10,
            no: 21651,
            products: 3
        },
        {
            status: 'Rechazado',
            store: '7Eleven',
            total: 10,
            no: 21651,
            products: 3
        },
        {
            status: 'Confirmado',
            store: 'Yepas',
            total: 10,
            no: 21651,
            products: 3
        },
        {
            status: 'Entregado',
            store: 'Netos',
            total: 10,
            no: 21651,
            products: 3
        }

    ]

    constructor() { }

    ngOnInit(): void {
    }

    openSummary() {
        this.booleanSummary = true;
        this.summary.emit(this.booleanSummary)
    }

}
