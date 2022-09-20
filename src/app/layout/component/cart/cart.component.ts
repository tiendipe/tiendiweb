import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';
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
  currentRoute: string;
  countPedidoDetalle: number = 0;

  constructor(
    private _router: Router,
    private _sessionInfo: SessionInfo,
    private _pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this._pedidoService.pedidoActual$.subscribe((pedido)=>{
      this.pedido = pedido
    });

    this.loadPedidosActual(
      this._sessionInfo.getCodTienda(),
      this._sessionInfo.getCodComprador()
    );
  }

  openSideBag() {
    this.onOpenSideBag.emit();
    this._router.navigate(
      ['/ecommerce/', { outlets: { bag: ['sideproducts'] } }],
      { skipLocationChange: false }
    );

  }

  loadPedidosActual(pIDTienda: number, pIDComprador: number): void {
    this._pedidoService
      .getPedidoActual(
        pIDTienda,
        pIDComprador,
        Number(String(pIDTienda) + Number(String(pIDComprador)))
      )
      .then((res) => {
        this.pedido = res.Data;
        this.countPedidoDetalle = this.pedido.PedidoDetalle.length;
      })
      .catch(() => {
        this._pedidoService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Pedidos Recientes'
        );
      });
  }
}
