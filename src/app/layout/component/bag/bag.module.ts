import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BagRoutingModule } from './bag-routing.module';
import { PrimengModule } from '../../../primeng/primeng.module';
import { BagComponent } from './bag.component';

// import { MenuItem } from 'primeng/api';
import { CartSummaryModule } from '../cart-summary/cart-summary.module';
// import { Step1Component } from '../step1/step1.component';
// import { Step2Component } from '../step2/step2.component';
// import { Step3Component } from '../step3/step3.component';
// import { Step1Module } from '../step1/step1.module';
// import { Step2Module } from '../step2/step2.module';
// import { Step3Module } from '../step3/step3.module';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';


// const routes: Routes = [
//     {path:'',component: Step1Component , outlet: 'bag'},
//     {path: 'step1', component: Step1Component, outlet: 'bag'},
//     {path: 'step2', component: Step2Component, outlet: 'bag'},
//     {path: 'step3', component: Step3Component, outlet: 'bag'}
// ];

@NgModule({
    declarations: [
        BagComponent
    ],
    imports: [
        // RouterModule.forChild(routes),
        CommonModule,
        // BagRoutingModule,
        PrimengModule,
        CartSummaryModule,
        FormsModule
        // Step1Module,
        // Step2Module,
        // Step3Module,
    ],
    exports: [
        BagComponent
    ],
    providers: [MessageService]
})
export class BagModule { }
