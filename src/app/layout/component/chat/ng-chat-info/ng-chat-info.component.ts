import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatShopWindowsEnum } from '../shared/chat-shop-windows.enum';

@Component({
	selector: 'app-ng-chat-info',
	templateUrl: './ng-chat-info.component.html',
	styleUrls: ['./ng-chat-info.component.scss']
})
export class NgChatInfoComponent implements OnInit {
	checked: boolean = true;

	@Output()
    public onBackChatShopListClicked: EventEmitter<ChatShopWindowsEnum> = new EventEmitter<ChatShopWindowsEnum>();

	constructor() { }

	ngOnInit(): void {
	}

	onBackChatShopList(){
		this.onBackChatShopListClicked.emit(ChatShopWindowsEnum.ngChatShopList);
	}

	onSend(event){
		this.checked = !event.checked;
		setTimeout(()=>{
			this.onBackChatShopList();
		}, 1000);
	}
}
