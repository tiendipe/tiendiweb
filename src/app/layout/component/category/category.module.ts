import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from './shared/category.service';
import { PrimengModule } from './shared/primeng.module';

@NgModule({
    declarations: [
        CategoryComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ],
    exports: [
        CategoryComponent
    ],
    providers: [
        CategoryService
    ]
})
export class CategoryModule { }
