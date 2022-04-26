export class Session {
  UserID: number;
  UserName: string;

  constructor(session?) {
    session = session || {};
    this.UserID = session.UserID;
    this.UserName = session.UserName;
  }
}
