import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'ecommerce',
        pathMatch: 'full'
    },
    {
        path: 'ecommerce',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    },
    {
        path: 'maps',
        loadChildren: () => import('./map/map.module').then(m => m.MapModule)
    },
    {
        path: '**',
        redirectTo: 'ecommerce'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
