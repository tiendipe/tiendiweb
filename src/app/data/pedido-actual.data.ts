import { IPedido } from '../interfaces/pedido';

export const TableDataPedidoActual: IPedido[] = [
  {
    IDPedido: 11,
    Numero: '000000534',
    IDTienda: 1,
    TiendaDes: 'Oxxo',
    IDComprador: 1,
    IDFormaPago: 1,
    IDFormaEntrega: 1,
    SubTotal: 200.0,
    IGV: 54.0,
    Total: 234.04,
    DespachoMonto: 0,
    IDEstado: 3,
    IDEstadoDes: 'Sin Enviar',
    Despacho: {
      TipoDes: 'Recojo en tienda',
      Direccion: 'Av. Huaylas 2081 Chorrillos, Lima - Lima',
    },
    FormaPago: {
      TipoDes: 'Pago con tarjeta',
    },
    PedidoDetalle: [
      {
        IDPedidoDetalle: 1,
        IDPedido: 1,
        IDProducto: 1,
        IDUnidad: 1,
        Cantidad: 5.0,
        Precio: 100.00,
        Comentario: '',
        Nombre: 'Nombre Prod.',
        Descripcion: 'Descrioción',
        MarcaDes: 'Marca Des',
        UnidadMedidaDes: 'Unidad Des',
        Descuento: 90.00
      },
      {
        IDPedidoDetalle: 2,
        IDPedido: 1,
        IDProducto: 2,
        IDUnidad: 1,
        Cantidad: 4.0,
        Precio: 120.0,
        Comentario: '',
        Nombre: 'Nombre prod 2',
        Descripcion: 'Descrioción',
        MarcaDes: 'Marca Des',
        UnidadMedidaDes: 'Unidad Des',
        Descuento: 110.00
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
