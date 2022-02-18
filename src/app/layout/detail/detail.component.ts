import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

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

    constructor() { }

    ngOnInit(): void {
    }

}
