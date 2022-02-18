import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ParticipantResponse } from '../core/participant-response';
import { IChatParticipant } from '../core/chat-participant';
import { User } from "../core/user";
import { ChatShopWindowsEnum } from '../shared/chat-shop-windows.enum';
import { ChatShop, IChatShop } from '../shared/chat-shop.model';

@Component({
	selector: 'app-ng-chat-shop-list',
	templateUrl: './ng-chat-shop-list.component.html',
	styleUrls: ['./ng-chat-shop-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NgChatShopListComponent implements OnInit {
	public ChatShopWindowsEnum = ChatShopWindowsEnum;

	@Output()
    public onChatShopClicked: EventEmitter<IChatShop> = new EventEmitter<IChatShop>();

    @Input()
    public participants: IChatParticipant[];

    @Input()
    public participantsResponse: ParticipantResponse[];

	constructor() { }

	ngOnInit(): void {
	}

	onChatShopSelected(participant: ParticipantResponse, navigateTo: ChatShopWindowsEnum){
		let chatShop: IChatShop = new ChatShop(participant);
		chatShop.navigateTo = navigateTo;
		this.onChatShopClicked.emit(chatShop);
	}

    onChatInfoSelected(name: string, navigateTo: ChatShopWindowsEnum){
        let user: ParticipantResponse = new ParticipantResponse();
        let participant: IChatParticipant = new User()
        participant.displayName = name;
        user.participant = participant;
		let chatShop: IChatShop = new ChatShop(user);
		chatShop.navigateTo = navigateTo;
		this.onChatShopClicked.emit(chatShop);
	}

    get sortedParticipants(): ParticipantResponse[]
    {
        return this.participantsResponse.sort((a: ParticipantResponse, b: ParticipantResponse) => {
            if(a.metadata.totalUnreadMessages < b.metadata.totalUnreadMessages)
                return 1;
            else
                return -1;
        });
    }
}
