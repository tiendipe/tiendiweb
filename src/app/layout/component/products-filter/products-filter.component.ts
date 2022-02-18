import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-filter',
    templateUrl: './products-filter.component.html',
    styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {
    selectedOption: string = '';
    options: string[] = ['Con mayor precio', 'Con menor precio']
    visibleSidebar: boolean = false;

    constructor() { }

    //TODO: hacer que abra el side panel con la url
    ngOnInit(): void {
    }

}
