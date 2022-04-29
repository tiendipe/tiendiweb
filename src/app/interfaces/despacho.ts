export interface IDespacho {
  TipoDes: string;
  Direccion: string;
}

export class Despacho implements IDespacho {
  TipoDes: string;
  Direccion: string;

  constructor(
    despacho?
  ){
    this.TipoDes = despacho.TipoDes;
    this.Direccion = despacho.Direccion;
  }
}
