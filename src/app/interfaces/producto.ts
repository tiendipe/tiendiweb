import { IAuditoria } from "./auditoria";

export interface IProducto extends IAuditoria {
    IDProducto: number;
    IDCategoria: number;
    IDTienda: number;
    Nombre: string;
    Descripcion: string;
    Precio: number;
    IDUnidadMedida: number;
    UnidadMedidaDes: string;
    IDMarca: string;
    MarcaDes: string;
    Tags: string;
}

export class Producto implements IProducto {
  IDProducto: number;
  IDCategoria: number;
  IDTienda: number;
  Nombre: string;
  Descripcion: string;
  Precio: number;
  IDUnidadMedida: number;
  UnidadMedidaDes: string;
  IDMarca: string;
  MarcaDes: string;
  Tags: string;
  Estado: boolean;
  EstadoDes: string;
  UsuarioCreacion: string;
  FechaCreacion: Date;
  UsuarioActualizacion: string;
  FechaActualizacion: Date;

  constructor(
    producto?
  ){
    this.IDProducto = producto.IDProducto;
    this.IDCategoria = producto.IDCategoria;
    this.IDTienda = producto.IDTienda;
    this.Nombre = producto.Nombre;
    this.Descripcion = producto.Descripcion;
    this.Precio = producto.Precio;
    this.IDUnidadMedida = producto.IDUnidadMedida;
    this.UnidadMedidaDes = producto.UnidadMedidaDes;
    this.IDMarca = producto.IDMarca;
    this.MarcaDes = producto.MarcaDes;
    this.Tags = producto.Tags;
    this.Estado = producto.Estado;
    this.EstadoDes = producto.EstadoDes;
    this.UsuarioCreacion = producto.UsuarioCreacion;
    this.FechaCreacion = producto.FechaCreacion;
    this.UsuarioActualizacion = producto.UsuarioActualizacion;
    this.FechaActualizacion = producto.FechaActualizacion;
  }
}
