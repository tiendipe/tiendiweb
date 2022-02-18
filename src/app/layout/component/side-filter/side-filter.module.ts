import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterComponent } from './side-filter.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@NgModule({
    declarations: [
        SideFilterComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ]
})
export class SideFilterModule { }
