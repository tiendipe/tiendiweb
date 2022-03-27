import { IAuditoria } from "./auditoria";

export interface ITienda extends IAuditoria {
  IDTienda: number;
  IDUsuario: string;
  Nombre: string;
  SitioWeb: string;
  Descripcion: string;
  Feriado: boolean;
}

export class Tienda implements ITienda {
  IDTienda: number;
  IDUsuario: string;
  Nombre: string;
  SitioWeb: string;
  Descripcion: string;
  Feriado: boolean;
  Estado: boolean;
  EstadoDes: string;
  UsuarioCreacion: string;
  FechaCreacion: Date;
  UsuarioActualizacion: string;
  FechaActualizacion: Date;

  constructor(
    tienda?
  ){
    this.IDTienda = tienda.IDTienda;
    this.IDUsuario = tienda.IDUsuario;
    this.Nombre = tienda.Nombre;
    this.SitioWeb = tienda.SitioWeb;
    this.Descripcion = tienda.Descripcion;
    this.Feriado = tienda.Feriado;
    this.Estado = tienda.Estado;
    this.EstadoDes = tienda.EstadoDes;
    this.UsuarioCreacion = tienda.UsuarioCreacion;
    this.FechaCreacion = tienda.FechaCreacion;
    this.UsuarioActualizacion = tienda.UsuarioActualizacion;
    this.FechaActualizacion = tienda.FechaActualizacion;
  }
}
