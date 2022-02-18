import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FavoriteModule } from '../favorite/favorite.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './shared/primeng.module';


@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FavoriteModule,
        PrimengModule
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule { }
