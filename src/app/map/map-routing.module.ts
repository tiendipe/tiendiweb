import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { MapComponent } from './map.component';

const routes: Routes = [
    {
        path: '',
        component: MapComponent,
        children: [
            {
                path: 'signin',
                component: SigninComponent,
                outlet: 'segoutlet',
            },
            {
                path: 'register',
                component: RegisterComponent,
                outlet: 'segoutlet',
            },
            // {
            //     path: '**',
            //     redirectTo: ''
            // }
        ]
    }
]

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
export class MapRoutingModule { }
