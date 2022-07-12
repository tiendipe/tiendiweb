import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { CONSTANT } from '../../shared/service';
import { SessionInfo } from '../../shared/session/session.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  @Output() onOpenSideBag: EventEmitter<any> = new EventEmitter();
  pedido: IPedido;
  buttonActive: boolean = false;
  currentRoute: string = '';

  constructor(
    private _router: Router,
    private _sessionInfo: SessionInfo,
    private _pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.loadPedidosActual(
      this._sessionInfo.getCodTienda(),
      this._sessionInfo.getCodUser()
    );
    this.currentRoute = this._router.url;
    console.log(this._router.url);
  }

  //TODO: hacer que abra desde la url
  openSideBag() {
    this.onOpenSideBag.emit();
    this._router.navigate(
      [`${this.currentRoute}`, { outlets: { bag: ['sideproducts'] } }],
      { skipLocationChange: true }
    );
    console.log(this._router.url);
  }

  loadPedidosActual(pIDTienda: number, pIDComprador: number): void {
    this._pedidoService
      .getPedidoActual(
        pIDTienda,
        pIDComprador,
        Number(String(pIDTienda) + String(pIDComprador))
      )
      .then((res) => {
        this.pedido = res.Data;
      })
      .catch(() => {
        this._pedidoService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Pedidos Recientes'
        );
      });
  }
}
