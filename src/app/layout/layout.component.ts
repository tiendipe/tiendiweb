import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatAdapter } from './component/chat/core/chat-adapter';
import { Theme } from './component/chat/core/theme.enum';
import { DemoAdapter } from './component/chat/shared/demo-adapter';
import { ContentComponent } from './content/content.component';
import { CONSTANT } from './shared/service';
import { SessionInfo } from './shared/session/session.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild(ContentComponent) contentComponent!: ContentComponent;
  showProductDetail: boolean = false;

  title = 'tiendichat';
  public userId = 999;
  theme: Theme = Theme.Dark;
  public adapter: ChatAdapter = new DemoAdapter();

  constructor(
    private _SessionInfo: SessionInfo
  ) {}

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
    console.log('app-layout - ' + CategoryID);
    this.contentComponent.onProductsByCategoryID(
      this._SessionInfo.getCodTienda(),
      CategoryID
    );
  }

  onSearchProducts(pFiltro: string){
    this.contentComponent.onProductsBySearch(
      this._SessionInfo.getCodTienda(),
      pFiltro
    );
  }

  onShowDetailProduct(ProductID: number): void {
    this.showProductDetail = true;
  }
}
