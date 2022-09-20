import { IAuditoria } from "./auditoria";

export interface IProducto extends IAuditoria {
    IDProducto: number;
    IDCategoria: number;
    IDTienda: number;
    Nombre: string;
    Descripcion: string;
    Precio: number;
    Descuento: number;
    PrecioDescuento: number;
    IDUnidad: number;
    UnidadMedidaDes: string;
    IDMarca: number;
    MarcaDes: string;
    Tags: string;
    Favorito: boolean;
    Aggregated: boolean;
}

export class Producto implements IProducto {
  IDProducto: number;
  IDCategoria: number;
  IDTienda: number;
  Nombre: string;
  Descripcion: string;
  Precio: number;
  Descuento: number;
  PrecioDescuento: number;
  IDUnidad: number;
  UnidadMedidaDes: string;
  IDMarca: number;
  MarcaDes: string;
  Tags: string;
  Favorito: boolean;
  Aggregated: boolean;
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
    this.Descuento = producto.Descuento;
    this.PrecioDescuento = producto.PrecioDescuento;
    this.IDUnidad = producto.IDUnidad;
    this.UnidadMedidaDes = producto.UnidadMedidaDes;
    this.IDMarca = producto.IDMarca;
    this.MarcaDes = producto.MarcaDes;
    this.Tags = producto.Tags;
    this.Favorito = producto.Favorito;
    this.Aggregated = producto.Aggregated;
    this.Estado = producto.Estado;
    this.EstadoDes = producto.EstadoDes;
    this.UsuarioCreacion = producto.UsuarioCreacion;
    this.FechaCreacion = producto.FechaCreacion;
    this.UsuarioActualizacion = producto.UsuarioActualizacion;
    this.FechaActualizacion = producto.FechaActualizacion;
  }
}
