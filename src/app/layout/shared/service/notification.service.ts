import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CONSTANT } from './constant.service';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    constructor(
        private messageService: MessageService
    ) { }

    public show(tipoMessage: number, msg: string) {
        switch (tipoMessage) {
        case CONSTANT.TYPEMESSAGE.success:
            this.messageService.add({severity:'success', summary:'Success', detail:msg});
            break;
        case CONSTANT.TYPEMESSAGE.error:
            this.messageService.add({severity:'error', summary:'Error', detail:msg, sticky: true });
            break;
        case CONSTANT.TYPEMESSAGE.info:
            this.messageService.add({severity:'info', summary:'Info', detail:msg});
            break;
        case CONSTANT.TYPEMESSAGE.warn:
            this.messageService.add({severity:'warn', summary:'Warn', detail:msg});
            break;
        default:
            this.messageService.add({severity:'info', summary:'Info', detail:msg});
            break;
        }
    }
}
