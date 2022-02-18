
export interface IProducto{
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
}