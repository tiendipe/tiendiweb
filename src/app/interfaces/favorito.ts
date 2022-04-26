
export interface IFavorito {
  IDTienda: number;
  IDComprador: number;
  IDCategoria: number;
  IDProducto: number;
}

export class Tienda implements IFavorito {
  IDTienda: number;
  IDComprador: number;
  IDCategoria: number;
  IDProducto: number;

  constructor(
    favorito?
  ){
    this.IDTienda = favorito.IDTienda;
    this.IDComprador = favorito.IDComprador;
    this.IDCategoria = favorito.IDCategoria;
    this.IDProducto = favorito.IDProducto;
  }
}
