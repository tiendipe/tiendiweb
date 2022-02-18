import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatShopWindowsEnum } from '../shared/chat-shop-windows.enum';

@Component({
	selector: 'app-ng-chat-closed',
	templateUrl: './ng-chat-closed.component.html',
	styleUrls: ['./ng-chat-closed.component.scss']
})
export class NgChatClosedComponent implements OnInit {

	@Input()
    public chatShopWindows: ChatShopWindowsEnum;

	@Output()
	public onToggleChatClicked: EventEmitter<ChatShopWindowsEnum> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	onToggleChat(){
		let navigateTo: ChatShopWindowsEnum;

		if(this.chatShopWindows == ChatShopWindowsEnum.ngChatClosed)
			navigateTo = ChatShopWindowsEnum.ngChatShopList;
		else
			navigateTo = ChatShopWindowsEnum.ngChatClosed;

		this.onToggleChatClicked.emit(navigateTo);
	}

}
