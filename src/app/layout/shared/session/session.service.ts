import { Injectable } from '@angular/core';
import { Session } from './session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionInfo {
  private keySession: string = 'HdataUserZ2HSession';
  private keyUser: string = 'HdataUserZ2HUser';
  private session: Session;

  getAudit(): Session {
    this.session = JSON.parse(localStorage.getItem(this.keySession));
    return this.session;
  }

  getCodUser(): number {
    let user = JSON.parse(localStorage.getItem(this.keyUser));
    if (user) return user;
    else return 1;
  }

  getUserName(): any {
    let user = JSON.parse(localStorage.getItem(this.keyUser));
    if (user) return user;
    else return 'Héctor';
  }
}
