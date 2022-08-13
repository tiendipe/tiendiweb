import { Component, Input, OnInit } from '@angular/core';
import { IPedido, Pedido } from 'src/app/interfaces/pedido';
import { PedidoDetalle } from 'src/app/interfaces/pedido-detalle';
import { PedidoService } from 'src/app/services/pedido.service';
import { CONSTANT } from '../../shared/service';
import { SessionInfo } from '../../shared/session/session.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class CartSummaryComponent implements OnInit {
  @Input() scroll: boolean = false;
  @Input() pedido: IPedido;

  constructor(private _pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.calculateTotal();
  }

  plusQuantity(pedidoDetalle: PedidoDetalle) {
    if (pedidoDetalle.Cantidad < 99) {
      pedidoDetalle.Cantidad += 1;
      this.calculateTotal();
    }
  }

  lessQuantity(pedidoDetalle: PedidoDetalle) {
    if (pedidoDetalle.Cantidad > 1) {
      pedidoDetalle.Cantidad -= 1;
      this.calculateTotal();
    }
  }

  deleteItem(pedidoDetalle: PedidoDetalle) {
    this.pedido.PedidoDetalle.splice(
      this.pedido.PedidoDetalle.indexOf(pedidoDetalle),
      1
    );

    this._pedidoService.setPedidoActual(this.pedido);
    this.calculateTotal();
  }

  calculateTotal() {
    let total: number = 0;
    this.pedido.PedidoDetalle.forEach(
      (pedidoDetalle) =>
        (total += pedidoDetalle.Cantidad * pedidoDetalle.Descuento)
    );
    this.pedido.SubTotal = total;
  }
}
