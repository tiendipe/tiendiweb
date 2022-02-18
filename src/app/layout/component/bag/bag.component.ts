import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-bag',
    templateUrl: './bag.component.html',
    styleUrls: ['./bag.component.scss'],
})
export class BagComponent implements OnInit {
    value: number = 50;

    selectedValues: string[] = ['val1', 'val2'];

    items: MenuItem[] = [
        {
            label: 'Productos',
            routerLink: [`/ecommerce/`, { outlets: { bag: ['sideproducts'] } }],
            skipLocationChange: true,
            // skipLocationChange: true
        },
        {
            label: 'Despacho y pago',
            routerLink: [`/ecommerce/`, { outlets: { bag: ['sidepaymentanddelivery'] } },],
            skipLocationChange: true,
        },
    ];

    constructor(public _router: Router, private route: ActivatedRoute) { }

    currentRoute: string = '';

    ngOnInit(): void {
        // this.summary();
        // this.currentRoute = this._router.url;
        // console.log(this._router.url);
        // this._router.navigate(
        //     ['/ecommerce/', { outlets: { bag: ['products'] } }],
        //     { skipLocationChange: true }
        // );
        // this._router.navigate(['/ecommerce/', { outlets: { bag: ['sideproducts'] } }], {skipLocationChange: true});
        // console.log(this._router.url);
    }

    next() {
        // this._router.navigate([`${this._router.url}/paymentanddelivery`])
        // this._router.navigate(['/ecommerce/list', {outlets: {bag: ['paymentanddelivery']}}], {skipLocationChange: true});
        // this._router.navigate(
        //     [`${this.currentRoute}`, { outlets: { bag: ['sidepaymentanddelivery'] } }],
        //     { skipLocationChange: true }
        // );
        this._router.navigate(['/ecommerce/', { outlets: { bag: ['sidepaymentanddelivery'] } }], {skipLocationChange: true});
    }

    prev() {
        // this._router.navigate([`${this._router.url}/products`])
        // this._router.navigate(['/ecommerce/list', {outlets: {bag: ['products']}}], {skipLocationChange: true});
        // this._router.navigate(
        //     [`${this.currentRoute}`, { outlets: { bag: ['sideproducts'] } }],
        //     { skipLocationChange: true }
        // );
        this._router.navigate(['/ecommerce/', { outlets: { bag: ['sideproducts'] } }], {skipLocationChange: true});
    }

    navigateTerms() {
        // this._router.navigate(
        //     [`${this.currentRoute}`, { outlets: { bag: ['sidetermsandconditions'] } }],
        //     { skipLocationChange: true, relativeTo: this.route }
        // );
        this._router.navigate(['/ecommerce/', { outlets: { bag: ['sidetermsandconditions'] } }], {skipLocationChange: true});
    }

    termsandcond() {
        if (this._router.url.includes('/(bag:sidetermsandconditions)')) return true;
        else return false;
    }

    paymentanddelivery() {
        if (this._router.url.includes('/(bag:sidepaymentanddelivery)')) return true;
        else return false;
    }

    summary() {
        console.log(this._router.url);
        if (this._router.url.includes('/(bag:sideproducts)')) return true;
        else return false;
    }
}
