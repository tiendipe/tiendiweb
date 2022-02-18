import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ChatShopWindowsEnum } from '../shared/chat-shop-windows.enum';
import { IChatShop } from '../shared/chat-shop.model';
import { ChatAdapter } from '../core/chat-adapter';
import { MessageType } from "../core/message-type.enum";
import { Message } from '../core/message';
import { Window } from "../core/window";
import { PagedHistoryChatAdapter } from '../core/paged-history-chat-adapter';
import { ScrollDirection } from '../core/scroll-direction.enum';
import { NgChatShopComponent } from '../ng-chat-shop/ng-chat-shop.component';
import { map } from 'rxjs/internal/operators/map';
import { Localization, StatusDescription } from '../core/localization';
import { IChatParticipant } from '../core/chat-participant';
import { ParticipantResponse } from '../core/participant-response';
import { Theme } from '../core/theme.enum';

@Component({
	selector: 'app-ng-chat-tiendi',
	templateUrl: './ng-chat-tiendi.component.html',
	styleUrls: ['./ng-chat-tiendi.component.scss']
})
export class NgChatTiendiComponent implements OnInit {
    public window: IChatShop;

	@ViewChildren('chatWindow') chatWindow: QueryList<NgChatShopComponent>;

	@Input()
    public historyPageSize: number = 10;

    @Input()
    public pollingInterval: number = 1000;

	@Input()
    public adapter: ChatAdapter;

    @Input()
    public userId: any;

    @Input()
    public theme: Theme = Theme.Light;

    @Input()
    public customTheme: string;

    @Input()
    public historyEnabled: boolean = true;

    @Input()
    public isViewportOnMobileEnabled: boolean = false;

    @Input()
    public hideFriendsList: boolean = false;

    // Defines the size of each opened window to calculate how many windows can be opened on the viewport at the same time.
    public windowSizeFactor: number = 320;
    // Total width size of the friends list section
    public friendsListWidth: number = 262;
    // Available area to render the plugin
    private viewPortTotalArea: number;
    // Set to true if there is no space to display at least one chat window and 'hideFriendsListOnUnsupportedViewport' is true
    public unsupportedViewport: boolean = false;

	chatShopWindows: ChatShopWindowsEnum = ChatShopWindowsEnum.ngChatClosed;
    windows: Window[] = [];
    isBootstrapped: boolean = false;
    public hasPagedHistory: boolean = false;
    private audioFile: HTMLAudioElement;
    private browserNotificationsBootstrapped: boolean = false;
    public participantsResponse: ParticipantResponse[];
    public participants: IChatParticipant[];
    public participantsInteractedWith: IChatParticipant[] = [];
    private pollingIntervalWindowInstance: number;
    private get localStorageKey(): string
    {
        return `ng-chat-users-${this.userId}`; // Appending the user id so the state is unique per user in a computer.
    };

    // Don't want to add this as a setting to simplify usage. Previous placeholder and title settings available to be used, or use full Localization object.
    private statusDescription: StatusDescription = {
        online: 'Online',
        busy: 'Busy',
        away: 'Away',
        offline: 'Offline'
    };

    @Input() // TODO: This might need a better content strategy
    public audioSource: string = 'https://raw.githubusercontent.com/rpaschoal/ng-chat/master/src/ng-chat/assets/notification.wav';

    @Input() // TODO: This might need a better content strategy
    public browserNotificationIconSource: string = 'https://raw.githubusercontent.com/rpaschoal/ng-chat/master/src/ng-chat/assets/notification.png';

    @Input()
    public audioEnabled: boolean = true;

    @Input()
    public persistWindowsState: boolean = true;

    @Input()
    public localization: Localization;

    @Input()
    public browserNotificationsEnabled: boolean = true;

    @Input()
    public title: string = "Mensajes";

    @Input()
    public messagePlaceholder: string = "Type a message";

    @Input()
    public searchPlaceholder: string = "Search";

    @Input()
    public browserNotificationTitle: string = "New message from";

    @Input()
    public pollFriendsList: boolean = false;

    @Input()
    public maximizeWindowOnNewMessage: boolean = true;

	@Output()
    public onMessagesSeen: EventEmitter<Message[]> = new EventEmitter<Message[]>();

    @Output()
    public onParticipantChatOpened: EventEmitter<IChatParticipant> = new EventEmitter<IChatParticipant>();

    @Output()
    public onParticipantClicked: EventEmitter<IChatParticipant> = new EventEmitter<IChatParticipant>();

	constructor() { }

	ngOnInit(): void {
        this.bootstrapChat();
	}

    // Initializes the chat plugin and the messaging adapter
    private bootstrapChat(): void
    {
        let initializationException = null;

        if (this.adapter != null && this.userId != null)
        {
            try
            {
                //this.viewPortTotalArea = window.innerWidth;

                this.initializeTheme();
                this.initializeDefaultText();
                this.initializeBrowserNotifications();

                // Binding event listeners
                this.adapter.messageReceivedHandler = (participant, msg) => this.onMessageReceived(participant, msg);
                this.adapter.friendsListChangedHandler = (participantsResponse) => this.onFriendsListChanged(participantsResponse);

                this.activateFriendListFetch();
                this.bufferAudioFile();

                this.hasPagedHistory = this.adapter instanceof PagedHistoryChatAdapter;
                this.isBootstrapped = true;
            }
            catch(ex)
            {
                initializationException = ex;
            }
        }

        if (!this.isBootstrapped){
            console.error("ng-chat component couldn't be bootstrapped.");

            if (this.userId == null){
                console.error("ng-chat can't be initialized without an user id. Please make sure you've provided an userId as a parameter of the ng-chat component.");
            }
            if (this.adapter == null){
                console.error("ng-chat can't be bootstrapped without a ChatAdapter. Please make sure you've provided a ChatAdapter implementation as a parameter of the ng-chat component.");
            }
            if (initializationException)
            {
                console.error(`An exception has occurred while initializing ng-chat. Details: ${initializationException.message}`);
                console.error(initializationException);
            }
        }
    }

    onWindowMessagesSeen(messagesSeen: Message[]): void {
        this.markMessagesAsRead(messagesSeen);
    }

	// Marks all messages provided as read with the current time.
    markMessagesAsRead(messages: Message[]): void
    {
        const currentDate = new Date();
        messages.forEach((msg)=>{
            msg.dateSeen = currentDate;
        });

        this.onMessagesSeen.emit(messages);
    }

    onWindowMessageSent(messageSent: Message): void {
        this.adapter.sendMessage(messageSent);
    }

    onChatShopWindowsNavigateTo(chatShopWindows: ChatShopWindowsEnum){
		this.chatShopWindows = chatShopWindows;
	}

    fetchMessageHistory(chatShop: IChatShop) {
        chatShop.isLoadingHistory = true;
        this.adapter.getMessageHistory(chatShop.user.participant.id)
        .pipe(
            map((result: Message[]) => {
                result.forEach((message) => this.assertMessageType(message));
                chatShop.messages = result.concat(chatShop.messages);
                chatShop.isLoadingHistory = false;
                setTimeout(() => this.onFetchMessageHistoryLoaded(result, ScrollDirection.Bottom));
            })
        ).subscribe();
    }

    onShopClickedFromShopList(chatShop: IChatShop){
		this.chatShopWindows = chatShop.navigateTo;
        this.fetchMessageHistory(chatShop)
        this.window = chatShop;
	}

     // Initializes default text
    private initializeDefaultText() : void
    {
        if (!this.localization)
        {
            this.localization = {
                messagePlaceholder: this.messagePlaceholder,
                searchPlaceholder: this.searchPlaceholder,
                title: this.title,
                statusDescription: this.statusDescription,
                browserNotificationTitle: this.browserNotificationTitle,
                loadMessageHistoryPlaceholder: "Load older messages"
            };
        }
    }

    private initializeTheme(): void
    {
        if (this.customTheme)
        {
            this.theme = Theme.Custom;
        }
        else if (this.theme != Theme.Light && this.theme != Theme.Dark)
        {
            // TODO: Use es2017 in future with Object.values(Theme).includes(this.theme) to do this check
            throw new Error(`Invalid theme configuration for ng-chat. "${this.theme}" is not a valid theme value.`);
        }
    }

    // Initializes browser notifications
    private async initializeBrowserNotifications()
    {
        if (this.browserNotificationsEnabled && ("Notification" in window))
        {
            if (await Notification.requestPermission() === "granted")
            {
                this.browserNotificationsBootstrapped = true;
            }
        }
    }

    // Handles received messages by the adapter
    private onMessageReceived(participant: IChatParticipant, message: Message)
    {
        if (participant && message)
        {
            const chatWindow = this.openChatWindow(participant);

            this.assertMessageType(message);

            if (!chatWindow[1] || !this.historyEnabled){
                chatWindow[0].messages.push(message);

                this.scrollChatWindow(ScrollDirection.Bottom);

                if (chatWindow[0].hasFocus)
                {
                    this.markMessagesAsRead([message]);
                }
            }

            this.emitMessageSound(chatWindow[0]);

            // Github issue #58
            // Do not push browser notifications with message content for privacy purposes if the 'maximizeWindowOnNewMessage' setting is off and this is a new chat window.
            if (this.maximizeWindowOnNewMessage || (!chatWindow[1] && !chatWindow[0].isCollapsed))
            {
                // Some messages are not pushed because they are loaded by fetching the history hence why we supply the message here
                this.emitBrowserNotification(chatWindow[0], message);
            }
        }
    }

    // Updates the friends list via the event handler
    private onFriendsListChanged(participantsResponse: ParticipantResponse[]): void
    {
        if (participantsResponse)
        {
            this.participantsResponse = participantsResponse;

            this.participants = participantsResponse.map((response: ParticipantResponse) => {
                return response.participant;
            });

            this.participantsInteractedWith = [];
        }
    }

    private activateFriendListFetch(): void {
        if (this.adapter)
        {
            // Loading current users list
            if (this.pollFriendsList){
                // Setting a long poll interval to update the friends list
                this.fetchFriendsList(true);
                this.pollingIntervalWindowInstance = window.setInterval(() => this.fetchFriendsList(false), this.pollingInterval);
            }
            else
            {
                // Since polling was disabled, a friends list update mechanism will have to be implemented in the ChatAdapter.
                this.fetchFriendsList(true);
            }
        }
    }

	private assertMessageType(message: Message): void {
        // Always fallback to "Text" messages to avoid rendenring issues
        if (!message.type)
        {
            message.type = MessageType.Text;
        }
    }

	private onFetchMessageHistoryLoaded(messages: Message[], direction: ScrollDirection, forceMarkMessagesAsSeen: boolean = false): void
    {
        this.scrollChatWindow(direction)

        if (forceMarkMessagesAsSeen)
        {
            const unseenMessages = messages.filter(m => !m.dateSeen);
            this.markMessagesAsRead(unseenMessages);
        }
    }

	// Scrolls a chat window message flow to the bottom
    private scrollChatWindow(direction: ScrollDirection): void
    {
        const chatWindow = this.getChatWindowComponentInstance();

        if (chatWindow){
            chatWindow.scrollChatWindow(direction);
        }
    }

	private getChatWindowComponentInstance(): NgChatShopComponent | null {
        if (this.chatWindow){
            let targetWindow = this.chatWindow.toArray()[0];
            return targetWindow;
        }

        return null;
    }

    // Buffers audio file (For component's bootstrapping)
    private bufferAudioFile(): void {
        if (this.audioSource && this.audioSource.length > 0)
        {
            this.audioFile = new Audio();
            this.audioFile.src = this.audioSource;
            this.audioFile.load();
        }
    }

    // Emits a message notification audio if enabled after every message received
    private emitMessageSound(window: Window): void
    {
        if (this.audioEnabled && !window.hasFocus && this.audioFile) {
            this.audioFile.play();
        }
    }

    // Emits a browser notification
    private emitBrowserNotification(window: Window, message: Message): void
    {
        if (this.browserNotificationsBootstrapped && !window.hasFocus && message) {
            const notification = new Notification(`${this.localization.browserNotificationTitle} ${window.participant.displayName}`, {
                'body': message.message,
                'icon': this.browserNotificationIconSource
            });

            setTimeout(() => {
                notification.close();
            }, message.message.length <= 50 ? 5000 : 7000); // More time to read longer messages
        }
    }



    // Sends a request to load the friends list
    private fetchFriendsList(isBootstrapping: boolean): void
    {
        this.adapter.listFriends()
        .pipe(
            map((participantsResponse: ParticipantResponse[]) => {
                this.participantsResponse = participantsResponse;

                this.participants = participantsResponse.map((response: ParticipantResponse) => {
                    return response.participant;
                });
            })
        ).subscribe(() => {
            if (isBootstrapping)
            {
                this.restoreWindowsState();
            }
        });
    }

    private restoreWindowsState(): void
    {
        try
        {
            if (this.persistWindowsState)
            {
                const stringfiedParticipantIds = localStorage.getItem(this.localStorageKey);

                if (stringfiedParticipantIds && stringfiedParticipantIds.length > 0)
                {
                    const participantIds = <number[]>JSON.parse(stringfiedParticipantIds);

                    const participantsToRestore = this.participants.filter(u => participantIds.indexOf(u.id) >= 0);

                    participantsToRestore.forEach((participant) => {
                        this.openChatWindow(participant);
                    });
                }
            }
        }
        catch (ex)
        {
            console.error(`An error occurred while restoring ng-chat windows state. Details: ${ex}`);
        }
    }

    // Opens a new chat whindow. Takes care of available viewport
    // Works for opening a chat window for an user or for a group
    // Returns => [Window: Window object reference, boolean: Indicates if this window is a new chat window]
    private openChatWindow(participant: IChatParticipant, focusOnNewWindow: boolean = false, invokedByUserClick: boolean = false): [Window, boolean]
    {
        // Is this window opened?
        const openedWindow = this.windows.find(x => x.participant.id == participant.id);

        if (!openedWindow)
        {
            if (invokedByUserClick)
            {
                this.onParticipantClicked.emit(participant);
            }

            // Refer to issue #58 on Github
            const collapseWindow = invokedByUserClick ? false : !this.maximizeWindowOnNewMessage;

            const newChatWindow: Window = new Window(participant, this.historyEnabled, collapseWindow);

            // Loads the chat history via an RxJs Observable
            if (this.historyEnabled)
            {
                // this.fetchMessageHistory(newChatWindow);
            }

            this.windows.unshift(newChatWindow);

            // Is there enough space left in the view port ? but should be displayed in mobile if option is enabled
            if (!this.isViewportOnMobileEnabled) {
                if (this.windows.length * this.windowSizeFactor >= this.viewPortTotalArea - (!this.hideFriendsList ? this.friendsListWidth : 0)) {
                    this.windows.pop();
                }
            }

            this.updateWindowsState(this.windows);

            if (focusOnNewWindow && !collapseWindow)
            {
                this.focusOnWindow(newChatWindow);
            }

            this.participantsInteractedWith.push(participant);
            this.onParticipantChatOpened.emit(participant);

            return [newChatWindow, true];
        }
        else
        {
            // Returns the existing chat window
            return [openedWindow, false];
        }
    }

    // Focus on the input element of the supplied window
    private focusOnWindow(window: Window, callback: Function = () => {}) : void
    {
        const windowIndex = this.windows.indexOf(window);
        if (windowIndex >= 0)
        {
            // setTimeout(() => {
            //     if (this.chatWindows)
            //     {
            //         const chatWindowToFocus = this.chatWindows.toArray()[windowIndex];

            //         chatWindowToFocus.chatWindowInput.nativeElement.focus();
            //     }

            //     callback();
            // });
        }
    }

    // Saves current windows state into local storage if persistence is enabled
    private updateWindowsState(windows: Window[]): void
    {
        if (this.persistWindowsState)
        {
            const participantIds = windows.map((w) => {
                return w.participant.id;
            });

            localStorage.setItem(this.localStorageKey, JSON.stringify(participantIds));
        }
    }
}
