import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService, ErrorService } from '../../../shared/service';
import { TableDataCategoria } from '../../../../data/category.data';
import { Categoria } from 'src/app/interfaces/categoria';

@Injectable()
export class CategoryService {
  // methodGetAllURL: string = 'categoria/GetAll';

  /**
   *Creates an instance of CategoryService.
   * @param {HttpClient} _httpClient
   * @param {ErrorService} _errorService
   * @param {Router} _router
   * @memberof CategoryService
   */
  constructor(
    private _errorService: ErrorService,
    private _dataService: DataService,
    private _router: Router
  ) {}

  /**
   * Get category
   * @param {number} pIDTienda
   * @returns {Promise<any>}
   * @memberof CategoryService
   */
  getCategory(pIDTienda: number): Promise<any> {
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
   * @param {*} message
   * @memberof CategoryService
   */
  showMessageError(message: string) {
    this._errorService.showMessageError(message);
  }

  /**
   * Navigate to List
   * @memberof CategoryService
   */
  navigateList(): void {
    this._router.navigate(['/ecommerce']);
  }
}
