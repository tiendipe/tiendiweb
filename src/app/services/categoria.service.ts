import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';
import { TableDataCategoria } from '../data/categoria.data';
import { DataService, ErrorService } from '../layout/shared/service';

@Injectable()
export class CategoriaService {
  // methodGetAllURL: string = 'categoria/GetAll';

  /**
   * Creates an instance of CategriaService.
   * @param _dataService
   * @param _errorService
   */
  constructor(
    private _dataService: DataService,
    private _errorService: ErrorService,
  ) {}

  /**
   * get Categoria
   * @param pIDTienda
   * @returns {Promise<any>}
   */
  getCategoria(pIDTienda: number): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.append('pIDTienda', String(pIDTienda));

    return new Promise((resolve, reject) => {
      // this._dataService.execGetJson(this.methodGetAllURL, parameters)
      of({
        Data: TableDataCategoria.map((categoria) => new Categoria(categoria)),
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
