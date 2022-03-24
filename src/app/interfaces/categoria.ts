import { IAuditoria } from "./auditoria";

export interface ICategoria extends IAuditoria {
  IDCategoria: number;
  IDTienda: number;
  Nombre: string;
  Descripcion: string;
}

export class Categoria implements ICategoria {
  IDCategoria: number;
  IDTienda: number;
  Nombre: string;
  Descripcion: string;
  Estado: boolean;
  EstadoDes: string;
  UsuarioCreacion: string;
  FechaCreacion: Date;
  UsuarioActualizacion: string;
  FechaActualizacion: Date;

  constructor(
    categoria?
  ){
    this.IDCategoria = categoria.IDCategoria;
    this.IDTienda = categoria.IDTienda;
    this.Nombre = categoria.Nombre;
    this.Descripcion = categoria.Descripcion;
    this.Estado = categoria.Estado;
    this.EstadoDes = categoria.EstadoDes;
    this.UsuarioCreacion = categoria.UsuarioCreacion;
    this.FechaCreacion = categoria.FechaCreacion;
    this.UsuarioActualizacion = categoria.UsuarioActualizacion;
    this.FechaActualizacion = categoria.FechaActualizacion;
  }
}
