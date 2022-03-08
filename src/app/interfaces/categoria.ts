import { IAuditoria } from "./auditoria";

export interface ICategoria extends IAuditoria {
  IDCategoria: number;
  IDTienda: number;
  Nombre: string;
  Descripcion: string;
}
