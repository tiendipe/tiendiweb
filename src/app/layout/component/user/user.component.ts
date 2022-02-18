import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    @ViewChild('op') overlayPanel!: OverlayPanel;
    @Output() onOpenSideMyOrders: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {}

    //TODO: Hacer que abra del sidepanel con la url
    openSideMyOrders() {
        this.onOpenSideMyOrders.emit();
        this.overlayPanel.hide();
    }
}
