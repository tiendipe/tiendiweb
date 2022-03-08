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
