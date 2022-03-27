import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TableDataProducto } from 'src/app/data/producto.data';
import { DataService, ErrorService } from '../../../shared/service';
import { Producto } from 'src/app/interfaces/producto';

@Injectable()
export class ProductService {
  methodGetAllURL: string = 'producto/GetAll';

  /**
   *Creates an instance of ProductService.
   * @param {HttpClient} _httpClient
   * @param {ErrorService} _errorService
   * @memberof ProductService
   */
  constructor(
  ) {}


}
