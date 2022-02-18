import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCardComponent } from './detail-card.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@NgModule({
    declarations: [
        DetailCardComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ],
    exports: [
        DetailCardComponent
    ]
})
export class DetailCardModule { }
