import { ITienda } from "../interfaces/tienda";

export const TableDataTienda : ITienda[] = [
  {
    IDTienda: 1,
    IDUsuario: 'HLOPEZ',
    Nombre: 'TIENDA DEMO',
    SitioWeb: '',
    Descripcion: 'DEMO',
    Feriado: true,
    Estado: true,
    EstadoDes: 'Activo',
    UsuarioCreacion: '',
    FechaCreacion: new Date(),
    UsuarioActualizacion: 'HLOPEZ',
    FechaActualizacion: new Date('15/05/2021'),
  },
  {
    IDTienda: 2,
    IDUsuario: 'HLOPEZ',
    Nombre: 'LOPEZ',
    SitioWeb: '',
    Descripcion: 'aaa',
    Feriado: true,
    Estado: true,
    EstadoDes: 'Activo',
    UsuarioCreacion: 'HLOPEZ',
    FechaCreacion: new Date('12/08/2021'),
    UsuarioActualizacion: '',
    FechaActualizacion: new Date(),
  },
];
