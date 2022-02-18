import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailGaleryComponent } from './detail-galery.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@NgModule({
    declarations: [
        DetailGaleryComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ],
    exports: [
        DetailGaleryComponent
    ]
})
export class DetailGaleryModule { }
