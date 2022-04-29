import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from "rxjs";
import { Pedido, IPedido } from 'src/app/interfaces/pedido';
import { TableDataPedido } from '../data/pedido.data';
import { DataService, ErrorService } from '../layout/shared/service';

@Injectable()
export class PedidoService {
  pedidos$: BehaviorSubject<IPedido[]>;
  pedidos: IPedido[];
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
  getPedido(pIDComprador: number, limit: number, pFilter: string = ""): Promise<any> {
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
   * Show Message Error
   * @param message
   */
  showMessageError(message: string) {
    this._errorService.showMessageError(message);
  }
}
