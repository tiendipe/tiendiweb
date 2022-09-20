export interface IPedidoDetalle {
  IDPedidoDetalle: number;
  IDPedido: number;
  IDProducto: number;
  IDUnidad: number;
  IDMarca: number;
  Cantidad: number;
  Precio: number;
  Comentario: string;

  Nombre: string;
  Descripcion: string;
  MarcaDes: string;
  UnidadMedidaDes: string;
  Descuento: number;
}

export class PedidoDetalle implements IPedidoDetalle {
  IDPedidoDetalle: number;
  IDPedido: number;
  IDProducto: number;
  IDUnidad: number;
  IDMarca: number;
  Cantidad: number;
  Precio: number;
  Comentario: string;

  Nombre: string;
  Descripcion: string;
  MarcaDes: string;
  UnidadMedidaDes: string;
  Descuento: number;

  constructor(pedidodetalle?) {
    this.IDPedidoDetalle = pedidodetalle.IDPedidoDetalle;
    this.IDPedido = pedidodetalle.IDPedido;
    this.IDProducto = pedidodetalle.IDProducto;
    this.IDUnidad = pedidodetalle.IDUnidad;
    this.IDMarca = pedidodetalle.IDMarca;
    this.Cantidad = pedidodetalle.Cantidad;
    this.Precio = pedidodetalle.Precio;
    this.Comentario = pedidodetalle.Comentario;

    this.Nombre = pedidodetalle.Nombre;
    this.Descripcion = pedidodetalle.Descripcion;
    this.MarcaDes = pedidodetalle.MarcaDes;
    this.UnidadMedidaDes = pedidodetalle.UnidadMedidaDes;
    this.Descuento = pedidodetalle.Descuento;
  }
}
