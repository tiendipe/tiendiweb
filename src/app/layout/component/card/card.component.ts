import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IPedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { IProducto } from '../../../interfaces/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Output() onEmitProductID: EventEmitter<number> = new EventEmitter();
  @Input() producto: IProducto;

  favorite: boolean = false;
  aggregated: boolean = false;
  labelAdd: string = '';
  iconAdd: string = '';
  classAdd: string = '';
  quantity: number = 0;

  constructor(private _pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.labelAdd = 'Agregar';
    this.iconAdd = '';
    this.classAdd = '';
    this.quantity = 1;
  }

  emitProductID(ProductID: number): void {
    this.onEmitProductID.emit(ProductID);
  }

  /**
   * Create new DetallePedido to Pedido in localStorage
   * @param {IProducto} producto
   * @memberof CardComponent
   */
  onAdd(producto: IProducto): void {
    if (!this.aggregated) {
      this.labelAdd = 'Agregado';
      this.iconAdd = 'pi pi-check';
      this.classAdd = 'selected-product';
      this.aggregated = true;

      this._pedidoService.addProductoPedidoActual(producto, this.quantity);
    }
  }

  onRemove(producto: IProducto): void {
    if (this.aggregated) {
      this.labelAdd = 'Agregar';
      this.iconAdd = '';
      this.classAdd = '';
      this.quantity = 1;
      this.aggregated = false;
    }

    this._pedidoService.removeProductoPedidoActual(producto);
  }

  onMoreUnid() {
    this.quantity = this.quantity + 1;
  }

  onLessUnid() {
    if (this.quantity > 1) this.quantity = this.quantity - 1;
  }
}
