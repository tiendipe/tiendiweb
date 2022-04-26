import { IPedido } from '../interfaces/pedido';

export const TableDataPedido: IPedido[] = [
  {
    IDPedido: 1,
    Numero: '000000123',
    IDTienda: 1,
    TiendaDes: 'Oxxo',
    IDComprador: 1,
    IDFormaPago: 1,
    IDFormaEntrega: 1,
    SubTotal: 200.0,
    IGV: 36.0,
    Total: 236.04,
    IDEstado: 1,
    IDEstadoDes: 'Entregado',
    PedidoDetalle: [
      {
        IDPedidoDetalle: 1,
        IDPedido: 1,
        IDProducto: 1,
        IDUnidad: 1,
        Cantidad: 2.0,
        Precio: 100.0,
        Comentario: '',
      },
      {
        IDPedidoDetalle: 2,
        IDPedido: 1,
        IDProducto: 2,
        IDUnidad: 1,
        Cantidad: 1.0,
        Precio: 100.0,
        Comentario: '',
      },
    ],
    Estado: true,
    EstadoDes: 'Activo',
    UsuarioCreacion: 'HLOPEZ',
    FechaCreacion: new Date('12/08/2021'),
    UsuarioActualizacion: '',
    FechaActualizacion: new Date(),
  },
  {
    IDPedido: 2,
    Numero: '000000456',
    IDTienda: 2,
    TiendaDes: '7Eleven',
    IDComprador: 1,
    IDFormaPago: 1,
    IDFormaEntrega: 1,
    SubTotal: 150.0,
    IGV: 18.0,
    Total: 168.0,
    IDEstado: 2,
    IDEstadoDes: 'Confirmado',
    PedidoDetalle: [
      {
        IDPedidoDetalle: 2,
        IDPedido: 2,
        IDProducto: 1,
        IDUnidad: 1,
        Cantidad: 2.0,
        Precio: 100.0,
        Comentario: '',
      },
      {
        IDPedidoDetalle: 1,
        IDPedido: 2,
        IDProducto: 2,
        IDUnidad: 1,
        Cantidad: 1.0,
        Precio: 50.0,
        Comentario: '',
      },
    ],
    Estado: true,
    EstadoDes: 'Activo',
    UsuarioCreacion: 'HLOPEZ',
    FechaCreacion: new Date('12/08/2021'),
    UsuarioActualizacion: '',
    FechaActualizacion: new Date(),
  },
  {
    IDPedido: 3,
    Numero: '000123456',
    IDTienda: 3,
    TiendaDes: 'Yepass',
    IDComprador: 1,
    IDFormaPago: 1,
    IDFormaEntrega: 1,
    SubTotal: 100.0,
    IGV: 18.0,
    Total: 118.60,
    IDEstado: 3,
    IDEstadoDes: 'Sin Enviar',
    PedidoDetalle: [
      {
        IDPedidoDetalle: 1,
        IDPedido: 3,
        IDProducto: 1,
        IDUnidad: 1,
        Cantidad: 1.0,
        Precio: 100.0,
        Comentario: '',
      },
    ],
    Estado: true,
    EstadoDes: 'Activo',
    UsuarioCreacion: 'HLOPEZ',
    FechaCreacion: new Date('12/08/2021'),
    UsuarioActualizacion: '',
    FechaActualizacion: new Date(),
  },
  {
    IDPedido: 4,
    Numero: '000654123',
    IDTienda: 1,
    TiendaDes: 'Oxxo',
    IDComprador: 1,
    IDFormaPago: 1,
    IDFormaEntrega: 1,
    SubTotal: 170.0,
    IGV: 18.0,
    Total: 188.0,
    IDEstado: 3,
    IDEstadoDes: 'Rechazado',
    PedidoDetalle: [
      {
        IDPedidoDetalle: 1,
        IDPedido: 3,
        IDProducto: 1,
        IDUnidad: 1,
        Cantidad: 1.0,
        Precio: 180.0,
        Comentario: '',
      },
    ],
    Estado: true,
    EstadoDes: 'Activo',
    UsuarioCreacion: 'HLOPEZ',
    FechaCreacion: new Date('12/08/2021'),
    UsuarioActualizacion: '',
    FechaActualizacion: new Date(),
  },
  {
    IDPedido: 5,
    Numero: '000555555',
    IDTienda: 1,
    TiendaDes: 'Oxxo',
    IDComprador: 2,
    IDFormaPago: 1,
    IDFormaEntrega: 1,
    SubTotal: 170.0,
    IGV: 18.0,
    Total: 188.0,
    IDEstado: 3,
    IDEstadoDes: 'Rechazado',
    PedidoDetalle: [
      {
        IDPedidoDetalle: 1,
        IDPedido: 3,
        IDProducto: 1,
        IDUnidad: 1,
        Cantidad: 1.0,
        Precio: 180.0,
        Comentario: '',
      },
    ],
    Estado: true,
    EstadoDes: 'Activo',
    UsuarioCreacion: 'HLOPEZ',
    FechaCreacion: new Date('12/08/2021'),
    UsuarioActualizacion: '',
    FechaActualizacion: new Date(),
  },
];
