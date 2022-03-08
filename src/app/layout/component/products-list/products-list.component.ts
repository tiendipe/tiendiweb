import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../../../interfaces/producto';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
    @Input() products: IProducto[] = [];
    producto: IProducto;
    visibleSidebar: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }
}
