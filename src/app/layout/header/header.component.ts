import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CONSTANT } from '../shared/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onOpenSideMyOrders: EventEmitter<any> = new EventEmitter();
  @Output() onEmitCategoryID: EventEmitter<any> = new EventEmitter();
  @Output() onEmitSearchProducts: EventEmitter<any> = new EventEmitter();
  categorias: ICategoria[];

  constructor(private _categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.loadCategoria(CONSTANT.IDTienda.tiendaUno);
  }

  openSideMyOrders(): void {
    this.onOpenSideMyOrders.emit();
  }

  emitCategoryID(CategoryID: number): void {
    console.log(CategoryID);
    this.onEmitCategoryID.emit(CategoryID);
  }

  loadCategoria(pIDTienda: number): void {
    this._categoriaService
      .getCategoria(pIDTienda)
      .then((res) => {
        this.categorias = res.Data;
        console.log('app-header - ' + this.categorias);
      })
      .catch(() => {
        this._categoriaService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Categorías'
        );
      });
  }

  onSearchProducts(pFiltro: string){
    this.onEmitSearchProducts.emit(pFiltro);
  }
}
