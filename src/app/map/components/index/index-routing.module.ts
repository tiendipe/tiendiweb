import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { RegisterComponent } from '../register/register.component';
import { SigninModule } from '../signin/signin.module';
import { RegisterModule } from '../register/register.module';

const routes: Routes = [
  {
    path: '',
    outlet: 'index',
    children: [
    //   {
    //     path: 'signin',
    //     component: SigninComponent,
    //     outlet: 'index',
    //   },
    //   {
    //     path: 'register',
    //     component: RegisterComponent,
    //     outlet: 'index',
    //   }, 
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
