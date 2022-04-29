import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IPedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-recent-order-detail',
  templateUrl: './recent-order-detail.component.html',
  styleUrls: ['./recent-order-detail.component.scss'],
})
export class RecentOrderDetailComponent implements OnInit {
  @Output() summary: EventEmitter<boolean> = new EventEmitter();
  @Input() pedido: IPedido;

  closeSummary: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  closeTheSummary() {
    this.closeSummary = true;
    this.summary.emit(this.closeSummary);
  }
}
