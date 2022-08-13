import { Injectable } from '@angular/core';
import { Session } from './session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionInfo {
  private keySession: string = 'HdataTiendiSession';
  private keyUser: string = 'HdataTiendiUser';
  private keyTienda: string = 'HdataTiendiTienda';
  private keyComprador: string = 'HdataTiendiComprador';
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

  getCodTienda(): number {
    let tienda = JSON.parse(localStorage.getItem(this.keyTienda));
    if (tienda) return tienda;
    else return 1;
  }

  getNameTienda(): string {
    let tienda = JSON.parse(localStorage.getItem(this.keyTienda));
    if (tienda) return tienda;
    else return 'Tiendi';
  }

  getCodComprador(): number {
    let tienda = JSON.parse(localStorage.getItem(this.keyComprador));
    if (tienda) return tienda;
    else return 1;
  }
}
