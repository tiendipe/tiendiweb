import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { IProducto } from '../card/shared/producto';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
    @Input() products: Product[] = [];
    producto: IProducto;
    visibleSidebar: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}