import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../interfaces/order';

@Component({
    selector: 'app-recent-orders',
    templateUrl: './recent-orders.component.html',
    styleUrls: ['./recent-orders.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class RecentOrdersComponent implements OnInit {
    @Output() onOpenSideMyOrders: EventEmitter<any> = new EventEmitter();
    @Input() hidderButtonSummary: boolean = false;
    
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

    constructor(private _router: Router) { }

    ngOnInit(): void {}

    openSideMyOrders(): void {
        this.onOpenSideMyOrders.emit();
        this._router.navigate(['/ecommerce/', { outlets: { right: ['sidemyorders'] } }], {skipLocationChange: true});
        console.log(this._router.url)
    }

    openSideOrderSummary(): void {
        this._router.navigate(['/ecommerce/', { outlets: { right: ['sideordersummary'] } }], {skipLocationChange: true});
        console.log(this._router.url)
    }
}
