import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService, ErrorService } from '../../../shared/service';
import { TableDataCategoria } from '../../../../data/categoria.data';
import { Categoria } from 'src/app/interfaces/categoria';

@Injectable()
export class CategoryService {
  // methodGetAllURL: string = 'categoria/GetAll';

  /**
   * Creates an instance of CategriaService.
   * @param _router
   */
  constructor(
    private _router: Router
  ) {}

  /**
   * Navigate to List
   * @memberof CategoryService
   */
  navigateList(): void {
    this._router.navigate(['/ecommerce']);
  }
}
