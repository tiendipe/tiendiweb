import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-payment-and-delivery',
  templateUrl: './payment-and-delivery.component.html',
  styleUrls: ['./payment-and-delivery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentAndDeliveryComponent implements OnInit {
  pedido: IPedido;
  groupDelivery: any[];
  groupPayment: any[];
  groupDeliverySelected: string;
  groupPaymentSelected: string;
  constructor(
    private _pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.pedido = this._pedidoService.pedido;
    this.groupDeliverySelected = '1';
    this.groupPaymentSelected = '1';

    this.groupDelivery = [
      { label: 'Recojo en tienda', value: '1' },
      { label: 'Despacho a domicilio', value: '2' }
    ];

    this.groupPayment = [
      { label: 'Efectivo', value: '1' },
      { label: 'Transferencia', value: '2' },
      { label: 'Pago con tarjeta', value: '3' }
    ];
  }
}
