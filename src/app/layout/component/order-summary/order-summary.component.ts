import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces';
import { IPedido } from 'src/app/interfaces/pedido';
import { ProductoService } from 'src/app/services';
import { PedidoService } from 'src/app/services/pedido.service';
import { CONSTANT } from '../../shared/service';
import { TiendiUtil } from '../../shared/util';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  pedidos: IPedido[] = this._pedidoService.pedidos;
  productos: IProducto[];
  IDPedido: number;
  pedido: IPedido;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pedidoService: PedidoService,
    private _productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.IDPedido = TiendiUtil.nullValueNumber(
      this._route.snapshot.params['IDPedido']
    );
    this.pedido = this.pedidos.find((x) => x.IDPedido == this.IDPedido);
  }

  onBackRecentOrderMore(): void {
    this._router.navigate(
      ['/ecommerce/', { outlets: { right: ['siderecentordermore'] } }],
      { skipLocationChange: false }
    );
  }

  onRepeatPedidoSetActual(){
    //TODO: Validar los montos de productos.
    // this.pedido.PedidoDetalle.forEach(pedido => {
    //   this.getProducto(this.pedido.IDTienda, pedido.IDCategoria, pedido.IDProducto);
    // });

    this._pedidoService.repeatPedidoSetActual(this.pedido);
    this.closeSideOrder();
  }

  closeSideOrder(): void {
    this._router.navigate(['/ecommerce/', { outlets: { right: null } }], {
      skipLocationChange: true,
    });
  }
}
