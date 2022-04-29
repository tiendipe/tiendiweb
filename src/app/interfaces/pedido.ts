import { IAuditoria } from './auditoria';
import { IDespacho } from './despacho';
import { IFormaPago } from './forma-pago';
import { IPedidoDetalle } from './pedido-detalle';

export interface IPedido extends IAuditoria {
  IDTienda: number;
  TiendaDes: string;
  IDPedido: number;
  Numero: string;
  IDComprador: number;
  IDFormaPago: number;
  IDFormaEntrega: number;
  SubTotal: number;
  IGV: number;
  Total: number;
  DespachoMonto: number;
  IDEstado: number;
  IDEstadoDes: string;
  Despacho: IDespacho;
  FormaPago: IFormaPago;
  PedidoDetalle: IPedidoDetalle[];
}

export class Pedido implements IPedido {
  IDTienda: number;
  TiendaDes: string;
  IDPedido: number;
  Numero: string;
  IDComprador: number;
  IDFormaPago: number;
  IDFormaEntrega: number;
  SubTotal: number;
  IGV: number;
  Total: number;
  DespachoMonto: number;
  IDEstado: number;
  IDEstadoDes: string;
  Despacho: IDespacho;
  FormaPago: IFormaPago;
  PedidoDetalle: IPedidoDetalle[];
  Estado: boolean;
  EstadoDes: string;
  UsuarioCreacion: string;
  FechaCreacion: Date;
  UsuarioActualizacion: string;
  FechaActualizacion: Date;

  constructor(
    pedido?
  ) {
    this.IDTienda = pedido.IDTienda;
    this.TiendaDes = pedido.TiendaDes;
    this.IDPedido = pedido.IDPedido;
    this.Numero = pedido.Numero;
    this.IDComprador = pedido.IDComprador;
    this.IDFormaPago = pedido.IDFormaPago;
    this.IDFormaEntrega = pedido.IDFormaEntrega;
    this.SubTotal = pedido.SubTotal;
    this.IGV = pedido.IGV;
    this.Total = pedido.Total;
    this.DespachoMonto = pedido.DespachoMonto;
    this.IDEstado = pedido.IDEstado;
    this.IDEstadoDes = pedido.IDEstadoDes;
    this.Despacho = pedido.Despacho;
    this.FormaPago = pedido.FormaPago;
    this.PedidoDetalle = pedido.PedidoDetalle;
    this.Estado = pedido.Estado;
    this.EstadoDes = pedido.EstadoDes;
    this.UsuarioCreacion = pedido.UsuarioCreacion;
    this.FechaCreacion = pedido.FechaCreacion;
    this.UsuarioActualizacion = pedido.UsuarioActualizacion;
    this.FechaActualizacion = pedido.FechaActualizacion;
  }
}
