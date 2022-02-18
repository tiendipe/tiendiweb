import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartSummaryComponent } from './cart-summary.component';


const routes: Routes = [{ path: '', component: CartSummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartSummaryRoutingModule { }