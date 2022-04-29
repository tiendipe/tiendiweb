import { Component, Input, OnInit } from '@angular/core';
import { IDespacho } from 'src/app/interfaces/despacho';

@Component({
  selector: 'app-dispatch-order',
  templateUrl: './dispatch-order.component.html',
  styleUrls: ['./dispatch-order.component.scss']
})
export class DispatchOrderComponent implements OnInit {
  @Input() despacho: IDespacho;

  constructor() { }

  ngOnInit(): void {
  }

}
