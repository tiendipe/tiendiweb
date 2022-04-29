import { Component, Input, OnInit } from '@angular/core';
import { IFormaPago } from 'src/app/interfaces/forma-pago';

@Component({
  selector: 'app-payment-order',
  templateUrl: './payment-order.component.html',
  styleUrls: ['./payment-order.component.scss']
})
export class PaymentOrderComponent implements OnInit {
  @Input() formaPago: IFormaPago;

  constructor() { }

  ngOnInit(): void {
  }

}
