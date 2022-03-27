import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TableDataProducto } from '../data/producto.data';
import { Producto } from '../interfaces/producto';
import { DataService, ErrorService } from '../layout/shared/service';

@Injectable()
export class ProductoService {
  // methodGetAllURL: string = 'Producto/GetAll';

  /**
   * Creates an instance of ProductoService.
   * @param _errorService
   * @param _dataService
   */
  constructor(
    private _errorService: ErrorService,
    private _dataService: DataService
  ) {}


  /**
   * get Productos
   * @param pIDTienda
   * @param pIDCategoria
   * @returns {Promise<any>}
   */
  getProducto(pIDTienda: number, pIDCategoria: number): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDTienda));
    parameters = parameters.append('pIDCategoria', String(pIDCategoria));

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataProducto.map((Productoo) => new Producto(Productoo)).filter(x => x.IDTienda == pIDTienda && x.IDCategoria == pIDCategoria),
        Status: 1,
        Message: [],
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
        resolve(res);
      }, reject);
    });
  }

  getProductoSearch(pIDTienda: number, pFiltro: string): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDTienda));
    parameters = parameters.append('pFiltro', pFiltro);

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataProducto.map((Productoo) => new Producto(Productoo)).filter(x => x.IDTienda == pIDTienda && x.Nombre.includes(pFiltro)),
        Status: 1,
        Message: [],
      }).subscribe((res: any) => {
        debugger;
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
