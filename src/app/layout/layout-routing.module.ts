import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SideFilterComponent } from './component/side-filter/side-filter.component';
import { BagComponent } from './component/bag/bag.component';
// import { TermsAndConditionsComponent } from './component/terms-and-conditions/terms-and-conditions.component';
// import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
// import { PaymentAndDeliveryComponent } from './component/payment-and-delivery/payment-and-delivery.component';
import { DetailComponent } from './detail/detail.component';
import { RecentOrderComponent } from './component/recent-order/recent-order.component';
import { OrderSummaryComponent } from './component/order-summary/order-summary.component';
import { TermsAndConditionsComponent } from './component/terms-and-conditions/terms-and-conditions.component';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { PaymentAndDeliveryComponent } from './component/payment-and-delivery/payment-and-delivery.component';
import { RecentOrderMoreComponent } from './component/recent-order-more/recent-order-more.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'sidefilter',
                outlet: 'left',
                component: SideFilterComponent,
                loadChildren: () => import('./component/side-filter/side-filter.module').then((m) => m.SideFilterModule),
            },
            {
                path: 'sidebag',
                outlet: 'right',
                component: BagComponent,
                loadChildren: () => import('./component/bag/bag.module').then((m) => m.BagModule),
            },


            {
                path: 'sidetermsandconditions',
                outlet: 'bag',
                component: TermsAndConditionsComponent
                // loadChildren: () => import('./component/terms-and-conditions/terms-and-conditions.module').then( (m) => m.TermsAndConditionsModule ),
            },
            {
                path: 'sideproducts',
                outlet: 'bag',
                component: CartSummaryComponent,
                loadChildren: () => import('./component/cart-summary/cart-summary.module').then((m) => m.CartSummaryModule)
            },
            {
                path: 'sidepaymentanddelivery',
                outlet: 'bag',
                component: PaymentAndDeliveryComponent,
                loadChildren: () => import('./component/payment-and-delivery/payment-and-delivery.module').then((m) => m.PaymentAndDeliveryModule)
            },


            {
                path: 'siderecentordermore',
                outlet: 'right',
                component: RecentOrderMoreComponent,
                loadChildren: () => import('./component/recent-order-more/recent-order-more.module').then((m) => m.RecentOrderMoreModule)
            },
            {
                path: 'sideordersummary',
                outlet: 'right',
                component: OrderSummaryComponent,
                loadChildren: () => import('./component/order-summary/order-summary.module').then((m) => m.OrderSummaryModule)
            },


            {
                path: 'detail',
                outlet: 'center',
                loadChildren: () => import('./detail/detail.module').then((m) => m.DetailModule),
                component: DetailComponent
            }
            // {
            //   path: '**',
            //   redirectTo: 'dailyoffers'
            // }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
