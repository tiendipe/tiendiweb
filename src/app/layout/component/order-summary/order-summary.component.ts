import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { TiendiUtil } from '../../shared/util';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  pedidos: IPedido[] = this._pedidoService.pedidos;
  IDPedido: number;
  pedido: IPedido;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.IDPedido = TiendiUtil.nullValueNumber(this._route.snapshot.params['IDPedido']);
    this.pedido = this.pedidos.find((x) => x.IDPedido == this.IDPedido);
  }

  onBackRecentOrderMore(): void {
    this._router.navigate(
      ['/ecommerce/', { outlets: { right: ['siderecentordermore'] } }],
      { skipLocationChange: false }
    );
  }
}
