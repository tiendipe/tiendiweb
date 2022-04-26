import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { CONSTANT } from '../../shared/service';
import { SessionInfo } from '../../shared/session/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @ViewChild('op') overlayPanel!: OverlayPanel;
  @Output() onOpenSideMyOrders: EventEmitter<any> = new EventEmitter();
  pedidos: Pedido[];

  constructor(
    private _pedidoService: PedidoService,
    private _sessionInfo: SessionInfo
  ) {}

  ngOnInit(): void {
    this.loadPedidos(this._sessionInfo.getCodUser());
  }

  //TODO: Hacer que abra del sidepanel con la url
  openSideMyOrders() {
    this.onOpenSideMyOrders.emit();
    this.overlayPanel.hide();
  }

  loadPedidos(pIDComprador: number): void {
    this._pedidoService
      .getPedido(pIDComprador)
      .then((res) => {
        this.pedidos = res.Data.slice(0, 4);
      })
      .catch(() => {
        this._pedidoService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Productos'
        );
      });
  }
}
