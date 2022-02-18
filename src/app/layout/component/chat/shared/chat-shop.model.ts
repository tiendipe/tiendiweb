import { Message } from "../core/message";
import { ParticipantResponse } from "../core/participant-response";
import { ChatShopWindowsEnum } from "./chat-shop-windows.enum";

export interface IChatShop {
    user: ParticipantResponse
    navigateTo: ChatShopWindowsEnum;
    messages: Message[];
    isLoadingHistory: boolean;
    hasMoreMessages: boolean;
    historyPage: number;
}

export class ChatShop implements IChatShop
{
    constructor(participant: ParticipantResponse)
    {
        this.user = participant;
        this.navigateTo = ChatShopWindowsEnum.ngChatShop;
        this.messages =  [];
        this.isLoadingHistory = false;
        this.hasMoreMessages = false;
        this.historyPage = 0;
    }

    public user: ParticipantResponse;
    public navigateTo: ChatShopWindowsEnum;
    public messages: Message[] = [];
    public newMessage?: string = "";

    // UI Behavior properties
    public isLoadingHistory: boolean = false;
    public hasMoreMessages: boolean = true;
    public historyPage: number = 0;
}
