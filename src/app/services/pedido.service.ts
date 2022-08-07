import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from "rxjs";
import { Pedido, IPedido } from 'src/app/interfaces/pedido';
import { TableDataPedido } from '../data/pedido.data';
import { TableDataPedidoActual } from '../data/pedido-actual.data';
import { DataService, ErrorService } from '../layout/shared/service';

@Injectable()
export class PedidoService {
  // pedidos$: BehaviorSubject<IPedido[]>;
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
    private _errorService: ErrorService
  ) {
    // this.pedidos$ = new  BehaviorSubject<IPedido[]>([]);
  }

  /**
   * get Pedido
   * @param pIDTienda
   * @returns {Promise<any>}
   */
  getPedidos(pIDComprador: number, limit: number, pFilter: string = ""): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDComprador));

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataPedido.map((pedido) => new Pedido(pedido)).filter(
          (x) => x.IDComprador == pIDComprador && x.Numero.includes((pFilter == ""? x.Numero: pFilter))
        ).slice(0, limit),
        Status: 1,
        Message: [],
        NumberOfRecords: 8
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
        // this.pedidos$.next(res.Data);
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
   getPedidoActual(pIDTienda: number, pIDComprador: number, pIDPedido: number): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDTienda));
    parameters = parameters.append('pIDComprador', String(pIDComprador));
    parameters = parameters.append('pIDPedido', String(pIDPedido));
    let PedidoActual: any;

    if(localStorage.getItem(this.keySession) != null){
      PedidoActual = JSON.parse(localStorage.getItem(this.keySession));
      return new Promise((resolve, reject) => {
        this.pedido = PedidoActual.Data;
        resolve(PedidoActual);
      });
    }

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataPedidoActual.map((pedido) => new Pedido(pedido)).find(
          (pedido) => pedido.IDTienda == pIDTienda && pedido.IDComprador == pIDComprador && pedido.IDPedido == pIDPedido
        ),
        Status: 1,
        Message: []
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
        this.pedido = res.Data;
        this.setPedidoActual(this.pedido);
        resolve(res);
      }, reject);
    });
  }

  /**
   * Set Pedido Actual
   * @param pPedido
   */
  setPedidoActual(pPedido: IPedido){
    localStorage.setItem(this.keySession, JSON.stringify({Data: pPedido}));
  }

  /**
   * Show Message Error
   * @param message
   */
  showMessageError(message: string) {
    this._errorService.showMessageError(message);
  }
}
