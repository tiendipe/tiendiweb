import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchModule } from '../component/search/search.module';
import { LogoModule } from '../component/logo/logo.module';
import { CategoryModule } from '../component/category/category.module';
import { UserModule } from '../component/user/user.module';
import { CartModule } from '../component/cart/cart.module';
import { CategoriaService } from 'src/app/services/categoria.service';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        LogoModule,
        SearchModule,
        CategoryModule,
        UserModule,
        CartModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [
      CategoriaService
    ]
})
export class HeaderModule { }
