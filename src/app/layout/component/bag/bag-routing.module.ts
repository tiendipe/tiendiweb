// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
// import { PaymentAndDeliveryComponent } from '../payment-and-delivery/payment-and-delivery.component';
// // import { TermsAndConditionsModule } from '../terms-and-conditions/terms-and-conditions.module';
// import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';
// // import { DetailRoutingModule } from '../../detail/detail-routing.module';

// const routes: Routes = [
//     {
//         path: '',
//         // component: CartSummaryComponent,
//         outlet: 'right',
//         children: [
//             {
//                 path: 'termsandconditions',
//                 // loadChildren: () => import('../terms-and-conditions/terms-and-conditions.module').then( (m) => m.TermsAndConditionsModule ),
//                 component: TermsAndConditionsComponent
//             },
//             {
//                 path: 'products',
//                 component: CartSummaryComponent,
//                 outlet: 'bag',
//                 loadChildren: () => import('../cart-summary/cart-summary.module').then((m) => m.CartSummaryModule),
//             },
//             {
//                 path: 'paymentanddelivery',
//                 loadChildren: () => import('../payment-and-delivery/payment-and-delivery.module').then((m) => m.PaymentAndDeliveryModule),
//                 component: PaymentAndDeliveryComponent
//             },

//         ]
//     },


//     // {
//     //   path: '',
//     //   component: CartSummaryComponent,
//     //   outlet: 'bag',
//     // },

//     // {
//     //   path: 'products',
//     //   outlet: 'bag',
//     //   component: CartSummaryComponent,
//     //   loadChildren: () => import('../cart-summary/cart-summary.module').then( (m) => m.CartSummaryModule ),
//     // },
//     // {
//     //   path: 'paymentanddelivery',
//     //   outlet: 'bag',
//     //   loadChildren: () => import('../payment-and-delivery/payment-and-delivery.module').then( (m) => m.PaymentAndDeliveryModule ),
//     //   component: PaymentAndDeliveryComponent
//     // },
//     // {
//     //   path: 'termsandconditions',
//     //   outlet: 'bag',
//     //   // loadChildren: () => import('../terms-and-conditions/terms-and-conditions.module').then( (m) => m.PaymentAndDeliveryModule ),
//     //   component: TermsAndConditionsComponent
//     // },


// ]

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule],
// })
// export class BagRoutingModule { }
