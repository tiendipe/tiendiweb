import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
    @Output() onOpenSideBag: EventEmitter<any> = new EventEmitter();
    buttonActive: boolean = false;

    currentRoute: string = '';

    constructor(private _router: Router) { }

    ngOnInit(): void {
        this.currentRoute = this._router.url;
        console.log(this._router.url)
    }

    //TODO: hacer que abra desde la url
    openSideBag() {
        this.onOpenSideBag.emit();
        this._router.navigate([`${this.currentRoute}`, { outlets: { bag: ['sideproducts'] } }], {skipLocationChange: true});
        console.log(this._router.url)
    }
}
