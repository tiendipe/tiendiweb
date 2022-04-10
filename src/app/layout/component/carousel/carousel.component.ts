import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANT } from '../../shared/service';
import { IProducto } from '../../../interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    @Output() onEmitProductID: EventEmitter<number> = new EventEmitter();
    @Input() productos: IProducto[];
    // @Input() CategoryID: number;
    // pCategoryID: Observable<number>;

    /**
     * Creates an instance of CarouselComponent.
     * @param {ProductService} _productService
     * @memberof CarouselComponent
     */
    constructor(
        private _productoService: ProductoService
    ) { }

    /**
     * onInit
     * @memberof CarouselComponent
     */
    ngOnInit(): void {
        // this.loadProducts(1, this.CategoryID);
        // console.log('app-carousel ' + this.CategoryID);
        // this.pCategoryID.subscribe(()=>{
        //     console.log("carousel - " + this.pCategoryID);
        // });
    }

    /**
     * Emit selected product ID
     * @param {number} ProductID
     * @memberof CarouselComponent
     */
    emitProductID(ProductID: number): void {
        this.onEmitProductID.emit(ProductID);
    }

    // /**
    //  * Load products
    //  * @param {number} pIDTienda
    //  * @param {number} pIDCategoria
    //  * @memberof CarouselComponent
    //  */
    // loadProducts(pIDTienda: number, pIDCategoria: number): void{
    //     this._productoService.getProducto(pIDTienda, pIDCategoria).then((res) => {
    //         this.productos = res.Data;
    //     }).catch(() => {
    //         this._productoService.showMessageError(CONSTANT.MESSAGE.errorListar + ' Productos');
    //     });
    // }
}
