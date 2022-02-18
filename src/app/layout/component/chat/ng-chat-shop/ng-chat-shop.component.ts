import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChatShopWindowsEnum } from '../shared/chat-shop-windows.enum';
import { Message } from "../core/message";
import { ScrollDirection } from '../core/scroll-direction.enum';
import { MessageType } from '../core/message-type.enum';
import { ChatShop, IChatShop } from '../shared/chat-shop.model';

@Component({
	selector: 'app-ng-chat-shop',
	templateUrl: './ng-chat-shop.component.html',
	styleUrls: ['./ng-chat-shop.component.scss']
})
export class NgChatShopComponent implements OnInit {
	// public newMessage: string = "";
	public emojisEnabled: boolean = true;
	public linkfyEnabled: boolean = true;
	public MessageType = MessageType;

	@ViewChild('chatMessages') chatMessages: any;
    @ViewChild('nativeFileInput') nativeFileInput: ElementRef;
    @ViewChild('chatWindowInput') chatWindowInput: any;

	@Input()
    public userId: any;

	@Input()
    public window: ChatShop;

	@Output()
    public onBackChatShopListClicked: EventEmitter<ChatShopWindowsEnum> = new EventEmitter();

	@Output()
    public onChatWindowClosed: EventEmitter<ChatShopWindowsEnum> = new EventEmitter();

	@Output()
    public onMessagesSeen: EventEmitter<Message[]> = new EventEmitter();

	@Output()
    public onMessageSent: EventEmitter<Message> = new EventEmitter();

	@Output()
    public onLoadHistoryTriggered: EventEmitter<IChatShop> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	onBackChatShopList(){
		this.onBackChatShopListClicked.emit(ChatShopWindowsEnum.ngChatShopList);
	}

	onChatInputTyped(event: any): void
	{
		switch (event.keyCode)
		{
			case 13:
                if(!event.shiftKey)
                {
                    if (this.window.newMessage && this.window.newMessage.trim() != "")
                    {
                        let message = new Message();
                        message.fromId = this.userId;
                        message.toId = this.window.user.participant.id;
                        message.message = this.window.newMessage;
                        message.dateSent = new Date();
                        this.window.messages.push(message);
                        this.onMessageSent.emit(message);
                        this.window.newMessage = "";
                        this.scrollChatWindow(ScrollDirection.Bottom);
                    }
                }
				break;
			case 27:
				this.onChatWindowClosed.emit(ChatShopWindowsEnum.ngChatClosed);
				break;
		}
	}

	// Scrolls a chat window message flow to the bottom
    public scrollChatWindow(direction: ScrollDirection): void
    {
        setTimeout(() => {
            if (this.chatMessages){
                let element = this.chatMessages.nativeElement;
                let position = ( direction === ScrollDirection.Top ) ? 0 : element.scrollHeight;
                element.scrollTop = position;
            }
        }); 
    }
}
