import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
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
  @Output() onOpenSideRecentOrderMore: EventEmitter<any> = new EventEmitter();
  pedidos: Pedido[];

  constructor(
    private _pedidoService: PedidoService,
    private _sessionInfo: SessionInfo
  ) {}

  ngOnInit(): void {
    this.loadPedidos(this._sessionInfo.getCodUser());
  }

  //TODO: Hacer que abra del sidepanel con la url
  openSideRecentOrderMore() {
    this.onOpenSideRecentOrderMore.emit();
    this.overlayPanel.hide();
  }

  loadPedidos(pIDComprador: number): void {
    this._pedidoService
      .getPedido(pIDComprador, 4)
      .then((res) => {
        this.pedidos = res.Data;
      })
      .catch(() => {
        this._pedidoService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Pedidos'
        );
      });
  }
}
