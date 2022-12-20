import { Component, OnInit } from '@angular/core';
import { IPedido } from 'src/app/interfaces/pedido';
import { PedidoDetalle } from 'src/app/interfaces/pedido-detalle';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-bag-summary',
  templateUrl: './bag-summary.component.html',
  styleUrls: ['./bag-summary.component.scss']
})
export class BagSummaryComponent implements OnInit {
  pedido: IPedido;
  countProducts: number = 0;

  constructor(
    private _pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this._pedidoService.pedidoActual$.subscribe((pedido)=>{
      this.pedido = pedido
    });
    this.loadPedidosActual();
  }

  loadPedidosActual(): void {
    // this.pedido = this._pedidoService.pedido;
    this.countProducts = this.pedido.PedidoDetalle.length;
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

  calculateTotal(){
    let total: number = 0;
    this.pedido.PedidoDetalle.forEach(pedidoDetalle => total += pedidoDetalle.Cantidad * pedidoDetalle.Descuento)
    this.pedido.SubTotal = total;
  }

  deleteItem(pedidoDetalle: PedidoDetalle) {
    this.pedido.PedidoDetalle.splice(
      this.pedido.PedidoDetalle.indexOf(pedidoDetalle),
      1
    );

    this._pedidoService.setPedidoActual(this.pedido);
    this.calculateTotal();
  }
}
