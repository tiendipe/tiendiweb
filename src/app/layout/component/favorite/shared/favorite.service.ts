import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { of } from "rxjs/internal/observable/of";
import { TableDataFavorito } from "src/app/data/favorito.data";
import { Favorito, IFavorito } from "src/app/interfaces/favorito";
import { DataService, ErrorService } from "src/app/layout/shared/service";
import { SessionInfo } from "src/app/layout/shared/session/session.service";

@Injectable()
export class PedidoService {
  favoritoActual$: BehaviorSubject<IFavorito>;
  favoritos: IFavorito[];
  private keySession: string = 'HdataTiendiPedido';
  // methodGetAllURL: string = 'Pedido/GetAll';

  /**
   * Creates an instance of CategriaService.
   * @param _dataService
   * @param _errorService
   */
  constructor(
    private _dataService: DataService,
    private _errorService: ErrorService,
    private _sessionInfo: SessionInfo
  ) {
    this.favoritoActual$ = new BehaviorSubject<Favorito>(null);
  }

}
