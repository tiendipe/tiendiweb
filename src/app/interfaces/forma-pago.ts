export interface IFormaPago {
  TipoDes: string;
}

export class FormaPago implements IFormaPago {
  TipoDes: string;

  constructor(
    formaPago?
  ){
    this.TipoDes = formaPago.TipoDes;
  }
}
