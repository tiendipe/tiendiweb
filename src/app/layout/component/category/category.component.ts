import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CONSTANT } from '../../shared/service';
import { CategoryService } from './shared/category.service';
import { Categoria } from './shared/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Output() onEmitCategoryID: EventEmitter<number> = new EventEmitter();
  private _unsubscribeAll: Subject<any>;
  categories: Categoria[];

  /**
   *Creates an instance of CategoryComponent.
   * @param {CategoryService} _categoryService
   * @memberof CategoryComponent
   */
  constructor(private _categoryService: CategoryService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  /**
   * @memberof CategoryComponent
   */
  ngOnInit(): void {
    this.loadCategory(1);
  }

  /**
   * @memberof CategoryComponent
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  loadCategory(pIDTienda: number): void {
    this._categoryService
      .getCategory(pIDTienda)
      .then((res) => {
        debugger;
        this.categories = res.Data;
        console.log(this.categories);
      })
      .catch(() => {
        this._categoryService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Categorías'
        );
      });
  }

  /**
   * Emit category selected
   * @param {number} CategoryID
   * @memberof CategoryComponent
   */
  emitCategoryID(CategoryID: number): void {
    this.onEmitCategoryID.emit(CategoryID);
  }

  /**
   * Navigate to Category
   * @memberof CategoryComponent
   */
  goToCategory() {
    this._categoryService.navigateList();
  }
}
