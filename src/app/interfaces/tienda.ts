import { IAuditoria } from "./auditoria";

export interface ITienda extends IAuditoria {
  IDTienda: number;
  IDUsuario: string;
  Nombre: string;
  SitioWeb: string;
  Descripcion: string;
  Feriado: boolean;
}
