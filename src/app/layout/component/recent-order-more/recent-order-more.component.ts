import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { CONSTANT } from '../../shared/service';
import { SessionInfo } from '../../shared/session/session.service';

@Component({
  selector: 'app-recent-order-more',
  templateUrl: './recent-order-more.component.html',
  styleUrls: ['./recent-order-more.component.scss'],
})
export class RecentOrderMoreComponent implements OnInit {
  @Input() pedidos: Pedido[];
  showOrderMore: boolean = false;
  limit: number;

  constructor(
    private _router: Router,
    private _pedidoService: PedidoService,
    private _sessionInfo: SessionInfo
  ) {}

  ngOnInit(): void {
    this.limit = 5;
    this.loadPedidos(this._sessionInfo.getCodUser());
  }

  openSideOrderSummary(IDPedido: number): void {
    this._router.navigate(
      ['/ecommerce/', { outlets: { right: ['sideordersummary', IDPedido] } }],
      { skipLocationChange: true }
    );
  }

  closeSideOrder(): void {
    this._router.navigate(['/ecommerce/', { outlets: { right: null } }], {
      skipLocationChange: true,
    });
  }

  onAddRecentOrder(): void {
    this.limit += 5;
    this.loadPedidos(this._sessionInfo.getCodUser());
  }

  onSearchRecentOrder(event: any): void {
    if (event.key == 'Enter')
      this.loadPedidos(this._sessionInfo.getCodUser(), event.target.value);
  }

  loadPedidos(pIDComprador: number, pFiler: string = ''): void {
    this._pedidoService
      .getPedidos(pIDComprador, this.limit, pFiler)
      .then((res) => {
        this.pedidos = res.Data;
        if (this.limit < res.NumberOfRecords) this.showOrderMore = true;
        else this.showOrderMore = false;
      })
      .catch(() => {
        this._pedidoService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Pedidos Recientes'
        );
      });
  }
}
