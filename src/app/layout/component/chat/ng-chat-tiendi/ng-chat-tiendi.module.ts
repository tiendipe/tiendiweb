import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgChatShopListComponent } from '../ng-chat-shop-list/ng-chat-shop-list.component';
import { NgChatInfoComponent } from '../ng-chat-info/ng-chat-info.component';
import { NgChatShopComponent } from '../ng-chat-shop/ng-chat-shop.component';
import { NgChatClosedComponent } from '../ng-chat-closed/ng-chat-closed.component';
import { NgChatTiendiComponent } from './ng-chat-tiendi.component';

import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';

import { EmojifyPipe } from '../pipes/emojify.pipe';
import { LinkfyPipe } from '../pipes/linkfy.pipe';
import { SanitizePipe } from '../pipes/sanitize.pipe';

@NgModule({
    imports: [
        CommonModule, FormsModule, HttpClientModule, 
        InputTextModule,
        ToggleButtonModule,
        ButtonModule
    ],
    declarations: [
        NgChatTiendiComponent,
        NgChatShopListComponent,
        NgChatInfoComponent,
        NgChatShopComponent,
        NgChatClosedComponent,
        EmojifyPipe, 
        LinkfyPipe, 
        SanitizePipe, 
    ],
    exports: [
        NgChatTiendiComponent
    ]
})
export class NgChatTiendiModule {
}
