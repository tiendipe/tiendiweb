import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Pedido } from 'src/app/interfaces/pedido';
import { TableDataPedido } from '../data/pedido.data';
import { DataService, ErrorService } from '../layout/shared/service';

@Injectable()
export class PedidoService {
  // methodGetAllURL: string = 'Pedido/GetAll';

  /**
   * Creates an instance of CategriaService.
   * @param _dataService
   * @param _errorService
   */
  constructor(
    private _dataService: DataService,
    private _errorService: ErrorService
  ) {}

  /**
   * get Pedido
   * @param pIDTienda
   * @returns {Promise<any>}
   */
  getPedido(pIDComprador: number): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDComprador));

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataPedido.map((pedido) => new Pedido(pedido)).filter(
          (x) => x.IDComprador == pIDComprador
        ),
        Status: 1,
        Message: [],
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
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
