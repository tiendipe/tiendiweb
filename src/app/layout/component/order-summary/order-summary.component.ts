import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit(): void {}
    
    onBackMyOrders(): void {
        this._router.navigate(['/ecommerce/', { outlets: { right: ['sidemyorders'] } }], {skipLocationChange: true});
        console.log(this._router.url)
    }
}
