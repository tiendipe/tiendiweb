import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ICategoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoryService } from './shared/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Output() onEmitCategoryID: EventEmitter<number> = new EventEmitter();
  private _unsubscribeAll: Subject<any>;
  @Input() categorias: ICategoria[];
  categoriaIDSelected: number;

  /**
   * Creates an instance of CategoryComponent.
   * @param _categoriaService
   * @param _categoryService
   */
  constructor(
    private _categoriaService: CategoriaService,
    private _categoryService: CategoryService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  /**
   * @memberof CategoryComponent
   */
  ngOnInit(): void {
    this.categoriaIDSelected = 1; //TODO se selecciona el primero por defecto
  }

  /**
   * @memberof CategoryComponent
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Emit category selected
   * @param {number} CategoryID
   * @memberof CategoryComponent
   */
  emitCategoryID(pCategoryID: number): void {
    this.categoriaIDSelected = pCategoryID
    this.onEmitCategoryID.emit(pCategoryID);
  }

  /**
   * Navigate to Category
   * @memberof CategoryComponent
   */
  goToCategory() {
    this._categoryService.navigateList();
  }
}
