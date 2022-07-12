import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IProducto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CONSTANT } from '../shared/service';
import { SessionInfo } from '../shared/session/session.service';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Output() onEmitProductID: EventEmitter<number> = new EventEmitter();
  visibleSideBarLeft: boolean = false;
  visibleSideBarRight: boolean = false;
  visibleSideBag: boolean = false;
  showProductList: boolean = false;
  CategoryID: number;

  public items: MenuItem[] = [
    {
      label: 'Nombre de la categoría',
      items: [
        { label: 'Subcategoria 1' },
        { label: 'Subcategoria 2' },
        { label: 'Subcategoria 3' },
        { label: 'Subcategoria 4' },
      ],
    },
    { label: 'Nombre de la sub-categoría' },
  ];

  productos: IProducto[];

  constructor(
    private _contentService: ContentService,
    private _productoService: ProductoService,
    private _sessionInfo: SessionInfo
  ) {}

  ngOnInit(): void {
    this.CategoryID = 1; //TODO se selecciona el primero por defecto
    this.onProductsByCategoryID(this._sessionInfo.getCodTienda(), this.CategoryID);
  }

  onClearOutlet(): void {
    this._contentService.navigateToList();
  }

  public onOpenSideBarLeft(): void {
    this.visibleSideBarLeft = true;
  }

  public onOpenSideBarRight(): void {
    this.visibleSideBarRight = true;
  }

  public onOpenSideBag(): void {
    this.visibleSideBag = true;
  }

  public onProductsByCategoryID(pTiendaID: number, pCategoryID: number): void {
    if (pCategoryID > 0) {
      this.showProductList = false;
      this.loadProductos(pTiendaID, pCategoryID);
    }
    else this.showProductList = true;
  }

  public onProductsBySearch(pTiendaID: number, pFiltro: string): void {
      this.loadProductosSearch(pTiendaID, pFiltro);
  }

  emitProductID(ProductID: number): void {
    this.onEmitProductID.emit(ProductID);
  }

  /**
   * Carga de productos
   * @param pIDTienda
   * @param pIDCategoria
   * @memberof ContentComponent
   */
  loadProductos(pIDTienda: number, pIDCategoria: number): void {
    this._productoService
      .getProductos(pIDTienda, pIDCategoria)
      .then((res) => {
        this.productos = res.Data;
      })
      .catch(() => {
        this._productoService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Productos'
        );
      });
  }

  loadProductosSearch(pIDTienda: number, pFiltro: string): void {
    this._productoService
      .getProductoSearch(pIDTienda, pFiltro)
      .then((res) => {
        this.productos = res.Data;
      })
      .catch(() => {
        this._productoService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Productos'
        );
      });
  }
}
