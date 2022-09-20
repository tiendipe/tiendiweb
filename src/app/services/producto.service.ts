import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TableDataProducto } from '../data/producto.data';
import { IPedido } from '../interfaces';
import { IProducto, Producto } from '../interfaces/producto';
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
  getProductos(pIDTienda: number, pIDCategoria: number): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDTienda));
    parameters = parameters.append('pIDCategoria', String(pIDCategoria));

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataProducto.map((producto) => new Producto(producto)).filter(x => x.IDTienda == pIDTienda && x.IDCategoria == pIDCategoria),
        Status: 1,
        Message: [],
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
        resolve(res);
      }, reject);
    });
  }

  checkProductCart(productos: IProducto[], pedido: IPedido): IProducto[]{
    debugger;

    productos.forEach(producto =>
      producto.Aggregated = false
    );

    pedido.PedidoDetalle.forEach(pedidoDetalle =>
      productos.find(x =>
        x.IDProducto == pedidoDetalle.IDProducto &&
        x.IDUnidad == pedidoDetalle.IDUnidad &&
        x.IDMarca == pedidoDetalle.IDMarca
      ).Aggregated = true
    )

    return productos;
  }

  getProductoSearch(pIDTienda: number, pFiltro: string): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDTienda));
    parameters = parameters.append('pFiltro', pFiltro);

    // let expresion = new RegExp(`${pFiltro}.*`, "i");

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataProducto.map((Productoo) => new Producto(Productoo)).filter(x => x.IDTienda == pIDTienda && x.Nombre.includes((pFiltro == ""? x.Nombre: pFiltro))),
        // Data: TableDataProducto.map((Productoo) => new Producto(Productoo)).filter(x => x.IDTienda == pIDTienda && expresion.test(x.Nombre)),
        Status: 1,
        Message: [],
      }).subscribe((res: any) => {
        this._errorService.getResultMessage(res);
        resolve(res);
      }, reject);
    });
  }

  /**
   * get Productos
   * @param pIDTienda
   * @param pIDCategoria
   * @returns {Promise<any>}
   */
   getProducto(pIDTienda: number, pIDCategoria: number, pIDProducto: number): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDTienda));
    parameters = parameters.append('pIDCategoria', String(pIDCategoria));

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataProducto.map((Productoo) => new Producto(Productoo)).filter(x => x.IDTienda == pIDTienda && x.IDCategoria == pIDCategoria && x.IDProducto == pIDProducto),
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
