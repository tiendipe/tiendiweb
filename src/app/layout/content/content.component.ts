import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Pedido, IProducto, IPedido } from 'src/app/interfaces';
import { PedidoService, ProductoService } from 'src/app/services';
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
  visibleTermns: boolean = false;
  visibleSideBarLeft: boolean = false;
  visibleSideBarRight: boolean = false;
  visibleSideBag: boolean = false;
  showProductList: boolean = false;
  CategoryID: number;
  url: string;
  valueProgress: number;

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
  pedido: IPedido;

  constructor(
    private _contentService: ContentService,
    private _productoService: ProductoService,
    private _pedidoService: PedidoService,
    private _sessionInfo: SessionInfo,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.CategoryID = 1; //TODO: se selecciona el primero por defecto
    this.onProductsByCategoryID(
      this._sessionInfo.getCodTienda(),
      this.CategoryID
    );
    this.loadPedidosActual(
      this._sessionInfo.getCodTienda(),
      this._sessionInfo.getCodComprador()
    );
  }

  onClearOutlet(): void {
    this._contentService.navigateToList();
  }

  onOpenSidebarRight() {
    this.visibleSideBarRight = true;
  }

  onOpenSidebarLeft() {
    this.visibleSideBarLeft = true;
  }

  onCloseSidebarRight() {
    this.url = this._router.url;
    if (
      !this.url.includes('right:sideordersummary') &&
      !this.url.includes('right:siderecentordermore')
    ) {
      this.visibleSideBarRight = false;
      this.onClearOutlet();
    }
  }

  onCloseSidebarLeft() {
    this.visibleSideBarLeft = false;
    this.onClearOutlet();
  }

  onCloseSideBag() {
    this.valueProgress = 50;
    this.visibleSideBag = false;
    this.onClearOutlet();
  }

  public onProductsByCategoryID(pTiendaID: number, pCategoryID: number): void {
    if (pCategoryID > 0) {
      this.showProductList = false;
      this.loadProductos(pTiendaID, pCategoryID);
    } else this.showProductList = true;
  }

  public onProductsBySearch(pTiendaID: number, pFiltro: string): void {
    this.loadProductosSearch(pTiendaID, pFiltro);
  }

  public onOpenSideBag(): void {
    this.valueProgress = 50;
    this.visibleSideBag = true;
    this.visibleTermns = false;
  }

  public showTermsSideBag(): void {
    this.visibleTermns = true;
  }

  public hideTermsSideBag(): void {
    this.visibleTermns = false;
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

  /**
   * Filtra los productos listados
   * @param pIDTienda
   * @param pFiltro
   * @memberof ContentComponent
   */
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

  /**
   * Carga el pedido actual
   * @param {number} pIDTienda
   * @param {number} pIDComprador
   * @memberof ContentComponent
   */
  loadPedidosActual(pIDTienda: number, pIDComprador: number): void {
    this._pedidoService
      .getPedidoActual(
        pIDTienda,
        pIDComprador,
        Number(String(pIDTienda) + Number(String(pIDComprador)))
      )
      .then((res) => {
        this.pedido = res.Data;
        this._productoService.checkProductCart(this.productos, this.pedido);
      })
      .catch(() => {
        this._pedidoService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Pedidos Recientes'
        );
      });
  }
}
