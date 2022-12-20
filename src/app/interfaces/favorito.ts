
export interface IFavorito {
  IDTienda: number;
  IDComprador: number;
  IDCategoria: number;
  IDProducto: number;
  IDMarca: number;
}

export class Favorito implements IFavorito {
  IDTienda: number;
  IDComprador: number;
  IDCategoria: number;
  IDProducto: number;
  IDMarca: number;

  constructor(
    favorito?
  ){
    this.IDTienda = favorito.IDTienda;
    this.IDComprador = favorito.IDComprador;
    this.IDCategoria = favorito.IDCategoria;
    this.IDProducto = favorito.IDProducto;
    this.IDMarca = favorito.IDMarca;
  }
}
