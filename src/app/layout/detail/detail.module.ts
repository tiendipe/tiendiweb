import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { BreadcrumbModule } from '../component/breadcrumb/breadcrumb.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { DetailGaleryModule } from '../component/detail-galery/detail-galery.module';
import { DetailCardModule } from '../component/detail-card/detail-card.module';
import { DetailInfoModule } from '../component/detail-info/detail-info.module';

@NgModule({
    declarations: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        DetailRoutingModule,
        BreadcrumbModule,
        PrimengModule,
        FormsModule,
        DetailGaleryModule,
        DetailCardModule,
        DetailInfoModule
    ],
    exports: [
        DetailComponent
    ]
})
export class DetailModule { }
