import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from "rxjs";
import { Pedido, IPedido } from 'src/app/interfaces/pedido';
import { TableDataPedido } from '../data/pedido.data';
import { TableDataPedidoActual } from '../data/pedido-actual.data';
import { DataService, ErrorService } from '../layout/shared/service';

@Injectable()
export class PedidoService {
  pedidos$: BehaviorSubject<IPedido[]>;
  pedidos: IPedido[];
  pedido: IPedido;
  private keySession: string = 'HdataUserZ2HPedido';
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
    this.pedidos$ = new  BehaviorSubject<IPedido[]>([]);
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
        this.pedidos$.next(res.Data);
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

    PedidoActual = JSON.parse(localStorage.getItem(this.keySession));
    if(PedidoActual != null){
      return new Promise((resolve, reject) => {
        resolve(PedidoActual);
      });
    }

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataPedidoActual.map((pedido) => new Pedido(pedido)).find(
          (x) => x.IDTienda == pIDTienda && x.IDComprador == pIDComprador && x.IDPedido == pIDPedido
        ),
        Status: 1,
        Message: []
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
        this.pedido = res.Data;
        localStorage.setItem(this.keySession, JSON.stringify({Data: this.pedido}));
        resolve(res);
      }, reject);
    });
  }

  // getPedidoStorage(): Promise<any> {
  //   let PedidoActual: any;
  //   PedidoActual = JSON.parse(localStorage.getItem(this.keySession));
  //   return new Promise((resolve, reject) => {
  //     resolve(PedidoActual);
  //   });
  // }

  /**
   * Show Message Error
   * @param message
   */
  showMessageError(message: string) {
    this._errorService.showMessageError(message);
  }
}
