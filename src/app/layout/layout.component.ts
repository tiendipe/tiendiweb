import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatAdapter } from './component/chat/core/chat-adapter';
import { Theme } from './component/chat/core/theme.enum';
import { DemoAdapter } from './component/chat/shared/demo-adapter';
import { ContentComponent } from './content/content.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    @ViewChild(ContentComponent) contentComponent!: ContentComponent;
    showProductDetail: boolean = false;

    title = 'tiendichat';
    public userId = 999;
    theme: Theme = Theme.Dark;
    public adapter: ChatAdapter = new DemoAdapter();

    constructor() { }

    ngOnInit(): void {
        console.log('layout');
    }

    openSideBarRight(): void {
        this.contentComponent.onOpenSideBarRight();
    }

    openSideBag(): void {
        this.contentComponent.onOpenSideBag();
    }

    showProductsByCategoryID(CategoryID: number): void {
        this.contentComponent.onShowProductsByCategoryID(CategoryID);
    }

    onShowDetailProduct(ProductID: number): void {
        this.showProductDetail = true;
    }
}
