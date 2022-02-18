import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Product } from 'src/app/interfaces/product';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    @Output() onEmitProductID: EventEmitter<number> = new EventEmitter();
    visibleSideBarLeft: boolean = false;
    visibleSideBarRight: boolean = false;
    visibleSideBag: boolean = false;
    showProductList: boolean = false;
    CategoryID: number;

    public items: MenuItem[] = [
        {
            label: 'Nombre de la categoría',
            items: [
                { label: 'Subcategoria 1' },
                { label: 'Subcategoria 2' },
                { label: 'Subcategoria 3' },
                { label: 'Subcategoria 4' },
            ],
        },
        { label: 'Nombre de la sub-categoría' },
    ];

    products: Product[] = [
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
        {
            name: 'product',
            price: 100,
        },
    ];

    constructor(private _router: Router) { }

    ngOnInit(): void {
        console.log('content');
    }

    onClearOutlet(): void {
        this._router.navigate(['/ecommerce/'], {skipLocationChange: true});
    }

    public onOpenSideBarLeft(): void {
        this.visibleSideBarLeft = true;
    }

    public onOpenSideBarRight(): void {
        this.visibleSideBarRight = true;
    }

    public onOpenSideBag(): void {
        this.visibleSideBag = true;
    }

    public onShowProductsByCategoryID(CategoryID: number): void {
        if(CategoryID > 0)
            this.showProductList = false;
        else
            this.showProductList = true;
    }

    emitProductID(ProductID: number): void {
        this.onEmitProductID.emit(ProductID);
    }
}
