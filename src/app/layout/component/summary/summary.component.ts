import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableDataProducto } from 'src/app/data/product.data';
import { IProducto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  products: IProducto[] = TableDataProducto;

  @Output() summary: EventEmitter<boolean> = new EventEmitter();

  closeSummary: boolean = false;

  constructor() {}

  closeTheSummary() {
    this.closeSummary = true;
    this.summary.emit(this.closeSummary);
  }

  ngOnInit(): void {}
}
