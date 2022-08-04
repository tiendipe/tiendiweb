import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
// import { ContentModule } from './content/content.module';
import { HeaderModule } from './header/header.module';
// import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { PrimengModule } from '../primeng/primeng.module';
// import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
// import { RouterModule, Routes } from '@angular/router';
// import { ListModule } from './list/list.module';
import { CartModule } from './component/cart/cart.module';
import { ContentModule } from './content/content.module';
import { DetailModule } from './detail/detail.module';
import { NgChatTiendiModule } from './component/chat/ng-chat-tiendi/ng-chat-tiendi.module';
import { DataService, ErrorService, NotificationService } from './shared/service';
import { MessageService } from 'primeng/api';
import { BagSummaryComponent } from './component/bag-summary/bag-summary.component';

@NgModule({
    declarations: [
        LayoutComponent,
        BagSummaryComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule,
        // ContentModule,
        // NavbarModule,
        FooterModule,
        PrimengModule,
        // FormsModule,
        LayoutRoutingModule,
        // ListModule,
        CartModule,
        ContentModule,
        DetailModule,
        NgChatTiendiModule
    ],
    exports: [
        LayoutComponent,
    ],
    providers: [
        DataService,
        NotificationService,
        ErrorService,
        MessageService
    ]
})
export class LayoutModule { }
