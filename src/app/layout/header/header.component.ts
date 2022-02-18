import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() onOpenSideMyOrders: EventEmitter<any> = new EventEmitter();
    @Output() onEmitCategoryID: EventEmitter<any> = new EventEmitter();
    
    constructor() { }

    ngOnInit(): void {}

    openSideMyOrders(): void {
        this.onOpenSideMyOrders.emit();
    }

    emitCategoryID(CategoryID: number): void {
        console.log(CategoryID);
        this.onEmitCategoryID.emit(CategoryID);
    }
}
