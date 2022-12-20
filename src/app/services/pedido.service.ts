import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Pedido, IPedido } from 'src/app/interfaces/pedido';
import { TableDataPedido } from '../data/pedido.data';
import { TableDataPedidoActual } from '../data/pedido-actual.data';
import { CONSTANT, DataService, ErrorService } from '../layout/shared/service';
import { IProducto } from '../interfaces/producto';
import { IPedidoDetalle, PedidoDetalle } from '../interfaces/pedido-detalle';
import { SessionInfo } from '../layout/shared/session/session.service';

@Injectable()
export class PedidoService {
  pedidoActual$: BehaviorSubject<IPedido>;
  pedidos: IPedido[];
  pedido: IPedido;
  private keySession: string = 'HdataTiendiPedido';
  // methodGetAllURL: string = 'Pedido/GetAll';

  /**
   * Creates an instance of CategriaService.
   * @param _dataService
   * @param _errorService
   */
  constructor(
    private _dataService: DataService,
    private _errorService: ErrorService,
    private _sessionInfo: SessionInfo
  ) {
    this.pedidoActual$ = new BehaviorSubject<Pedido>(null);
  }

  /**
   * get Pedido
   * @param pIDTienda
   * @returns {Promise<any>}
   */
  getPedidos(
    pIDComprador: number,
    limit: number,
    pFilter: string = ''
  ): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDComprador));

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataPedido.map((pedido) => new Pedido(pedido))
          .filter(
            (x) =>
              x.IDComprador == pIDComprador &&
              x.Numero.includes(pFilter == '' ? x.Numero : pFilter)
          )
          .slice(0, limit),
        Status: 1,
        Message: [],
        NumberOfRecords: 8,
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
        // this.pedidoActual$.next(res.Data);
        this.pedidos = res.Data;
        resolve(res);
      }, reject);
    });
  }

  /**
   * get Pedido
   * @param pIDTienda
   * @returns {Promise<any>}
   */
  getPedidoActual(
    pIDTienda: number,
    pIDComprador: number,
    pIDPedido: number
  ): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDTienda));
    parameters = parameters.append('pIDComprador', String(pIDComprador));
    parameters = parameters.append('pIDPedido', String(pIDPedido));
    let PedidoActual: any;

    if (localStorage.getItem(this.keySession) != null) {
      PedidoActual = JSON.parse(localStorage.getItem(this.keySession));
      return new Promise((resolve, reject) => {
        this.pedido = PedidoActual.Data;
        this.pedidoActual$.next(this.pedido);
        resolve(PedidoActual);
      });
    }

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataPedidoActual.map((pedido) => new Pedido(pedido)).find(
          (pedido) =>
            pedido.IDTienda == pIDTienda &&
            pedido.IDComprador == pIDComprador &&
            pedido.IDPedido == pIDPedido &&
            pedido.IDTienda == 1000
        ),
        Status: 1,
        Message: [],
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
        this.pedido = res.Data;
        this.setPedidoActual(this.pedido);
        resolve(res);
      }, reject);
    });
  }

  addProductoPedidoActual(pProducto: IProducto, pQuantity: number) {
    let pedidoDetalle: IPedidoDetalle = {
      IDPedidoDetalle: 0,
      IDPedido: 0,
      IDProducto: pProducto.IDProducto,
      IDCategoria: pProducto.IDCategoria,
      IDUnidad: pProducto.IDUnidad,
      IDMarca: pProducto.IDMarca,
      Cantidad: pQuantity,
      Precio: pProducto.Precio,
      Comentario: '',
      Nombre: pProducto.Nombre,
      Descripcion: pProducto.Descripcion,
      MarcaDes: pProducto.MarcaDes,
      UnidadMedidaDes: pProducto.UnidadMedidaDes,
      Descuento: pProducto.PrecioDescuento,
    };

    if (this.pedido == null) {
      this.pedido = {
        IDTienda: 0,
        TiendaDes: this._sessionInfo.getNameTienda(),
        IDPedido: 0,
        Numero: '',
        IDComprador: this._sessionInfo.getCodComprador(),
        IDFormaPago: 0,
        IDFormaEntrega: 0,
        SubTotal:
          (pProducto.PrecioDescuento
            ? pProducto.Precio
            : pProducto.PrecioDescuento) * pQuantity,
        IGV:
          (pProducto.PrecioDescuento
            ? pProducto.Precio
            : pProducto.PrecioDescuento) *
          pQuantity *
          0.18, //TODO: OBTENER EL IGV DESDE LA BASE DE DARTOS
        Total:
          (pProducto.PrecioDescuento
            ? pProducto.Precio
            : pProducto.PrecioDescuento) *
          pQuantity +
          (pProducto.PrecioDescuento
            ? pProducto.Precio
            : pProducto.PrecioDescuento) *
          pQuantity *
          0.18, //TODO: OBTENER EL IGV DESDE LA BASE DE DARTOS
        DespachoMonto: 0, //TODO: COSTO DE ENVÍO
        IDEstado: CONSTANT.ESTADOPEDIDO.SINENVIAR,
        IDEstadoDes: '',
        Despacho: null,
        FormaPago: null,
        PedidoDetalle: [],
        Estado: true,
        EstadoDes: '',
        UsuarioCreacion: '',
        FechaCreacion: new Date(),
        UsuarioActualizacion: '',
        FechaActualizacion: new Date(),
      };
    }

    this.pedido.PedidoDetalle.push(pedidoDetalle);

    // debugger;
    this.setPedidoActual(this.pedido);
  }

  removeProductoPedidoActual(pProducto: IProducto) {
    let index: number = -1;
    index = this.pedido.PedidoDetalle.indexOf(this.pedido.PedidoDetalle.find(
      pedido => pedido.IDProducto == pProducto.IDProducto &&
      pedido.IDUnidad == pProducto.IDUnidad &&
      pedido.Nombre == pProducto.Nombre
    ));

    // debugger;
    this.pedido.PedidoDetalle.splice(index, 1)

    this.setPedidoActual(this.pedido);
  }

  repeatPedidoSetActual(pedido: IPedido){
    this.setPedidoActual(pedido);
  }

  /**
   * Set Pedido Actual
   * @param pPedido
   */
  setPedidoActual(pPedido: IPedido) {
    localStorage.setItem(this.keySession, JSON.stringify({ Data: pPedido }));
    this.pedidoActual$.next(pPedido);
  }

  /**
   * Show Message Error
   * @param message
   */
  showMessageError(message: string) {
    this._errorService.showMessageError(message);
  }
}
