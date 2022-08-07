import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CONSTANT } from '../shared/service';
import { SessionInfo } from '../shared/session/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onOpenSideRecentOrderMore: EventEmitter<any> = new EventEmitter();
  @Output() onEmitCategoryID: EventEmitter<any> = new EventEmitter();
  @Output() onEmitSearchProducts: EventEmitter<any> = new EventEmitter();
  categorias: ICategoria[];

  constructor(private _categoriaService: CategoriaService, private _SessionInfo: SessionInfo) {}

  ngOnInit(): void {
    this.loadCategoria(this._SessionInfo.getCodTienda());
  }

  openSideRecentOrderMore(): void {
    this.onOpenSideRecentOrderMore.emit();
  }

  emitCategoryID(CategoryID: number): void {
    // console.log(CategoryID);
    this.onEmitCategoryID.emit(CategoryID);
  }

  loadCategoria(pIDTienda: number): void {
    this._categoriaService
      .getCategoria(pIDTienda)
      .then((res) => {
        this.categorias = res.Data;
        // console.log('app-header - ' + this.categorias);
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
