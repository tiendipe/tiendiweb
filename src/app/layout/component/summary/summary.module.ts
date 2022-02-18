import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { PrimengModule } from '../../../primeng/primeng.module';

@NgModule({
    declarations: [
        SummaryComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ],
    exports: [
        SummaryComponent
    ]
})
export class SummaryModule { }
