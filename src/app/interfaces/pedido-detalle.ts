export interface IPedidoDetalle {
  IDPedidoDetalle: number;
  IDPedido: number;
  IDProducto: number;
  IDUnidad: number;
  Cantidad: number;
  Precio: number;
  Comentario: string;
}

export class PedidoDetalle implements IPedidoDetalle {
  IDPedidoDetalle: number;
  IDPedido: number;
  IDProducto: number;
  IDUnidad: number;
  Cantidad: number;
  Precio: number;
  Comentario: string;

  constructor(pedidodetalle?) {
    this.IDPedidoDetalle = pedidodetalle.IDPedidoDetalle;
    this.IDPedido = pedidodetalle.IDPedido;
    this.IDProducto = pedidodetalle.IDProducto;
    this.IDUnidad = pedidodetalle.IDUnidad;
    this.Cantidad = pedidodetalle.Cantidad;
    this.Precio = pedidodetalle.Precio;
    this.Comentario = pedidodetalle.Comentario;
  }
}
