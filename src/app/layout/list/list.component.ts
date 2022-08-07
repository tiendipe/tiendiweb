import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IProducto } from '../../interfaces/producto';
import { TableDataProducto } from 'src/app/data/producto.data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {
    // console.log('list');
  }

  products: IProducto[] = TableDataProducto;
}
