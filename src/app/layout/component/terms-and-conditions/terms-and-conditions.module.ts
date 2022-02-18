import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';
import { PrimengModule } from '../../../primeng/primeng.module';

@NgModule({
    declarations: [
        TermsAndConditionsComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ],
    exports: [
        TermsAndConditionsComponent
    ]
})
export class TermsAndConditionsModule { }
