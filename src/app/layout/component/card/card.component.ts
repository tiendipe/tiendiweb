import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IPedido, IProducto, PedidoDetalle } from 'src/app/interfaces';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Output() onEmitProductID: EventEmitter<number> = new EventEmitter();
  @Input() producto: IProducto;
  pedido: IPedido;

  favorite: boolean = false;
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

    if(this.producto.Aggregated) {
      this.labelAdd = 'Agregado';
      this.iconAdd = 'pi pi-check';
      this.classAdd = 'selected-product';
    }

    this._pedidoService.pedidoActual$.subscribe((pPedido)=>{
      let pedidoDetalle: PedidoDetalle;
      if(pPedido && pPedido.PedidoDetalle){
        pedidoDetalle = pPedido.PedidoDetalle.find(pedido =>
          pedido.IDProducto == this.producto.IDProducto &&
          pedido.IDUnidad == this.producto.IDUnidad &&
          pedido.IDMarca == this.producto.IDMarca
        )
        if(pedidoDetalle){
          this.producto.Aggregated = true;
          this.labelAdd = 'Agregado';
          this.iconAdd = 'pi pi-check';
          this.classAdd = 'selected-product';
          this.quantity = pedidoDetalle.Cantidad;
        } else{
          this.producto.Aggregated = false;
          this.labelAdd = 'Agregar';
          this.iconAdd = '';
          this.classAdd = '';
          this.quantity = 1;
        }
      }
    });
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
    this.labelAdd = 'Agregado';
    this.iconAdd = 'pi pi-check';
    this.classAdd = 'selected-product';
    producto.Aggregated = true;

    this._pedidoService.addProductoPedidoActual(producto, this.quantity);
  }

  onRemove(producto: IProducto): void {
    this.labelAdd = 'Agregar';
    this.iconAdd = '';
    this.classAdd = '';
    this.quantity = 1;
    producto.Aggregated = false;

    this._pedidoService.removeProductoPedidoActual(producto);
  }

  onMoreUnid() {
    this.quantity = this.quantity + 1;

    this.pedido = this._pedidoService.pedidoActual$.getValue();

    if(this.pedido){
      this.pedido.PedidoDetalle.find(pedido =>
        pedido.IDProducto == this.producto.IDProducto &&
        pedido.IDMarca == this.producto.IDMarca &&
        pedido.IDUnidad == this.producto.IDUnidad
      ).Cantidad = this.quantity;

      this._pedidoService.setPedidoActual(this.pedido);
    }
  }

  onLessUnid() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;

      this.pedido = this._pedidoService.pedidoActual$.getValue();

      if(this.pedido){
        this.pedido.PedidoDetalle.find(pedido =>
          pedido.IDProducto == this.producto.IDProducto &&
          pedido.IDMarca == this.producto.IDMarca &&
          pedido.IDUnidad == this.producto.IDUnidad
        ).Cantidad = this.quantity;

        this._pedidoService.setPedidoActual(this.pedido);
      }
    }
  }
}
