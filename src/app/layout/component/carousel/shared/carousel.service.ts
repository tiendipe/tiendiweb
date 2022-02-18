import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService, ErrorService } from "../../../shared/service";

@Injectable()
export class ProductService
{
    methodGetAllURL: string = 'producto/GetAll';

    /**
     *Creates an instance of ProductService.
     * @param {HttpClient} _httpClient
     * @param {ErrorService} _errorService
     * @memberof ProductService
     */
    constructor(
        private _errorService: ErrorService,
        private _dataService: DataService
    ){}

    /**
     * Get product
     * @param {number} pIDTienda
     * @returns {Promise<any>}
     * @memberof ProductService
     */
    getProduct(pIDTienda: number, pIDCategoria: number): Promise<any>
    {
        let parameters = new HttpParams()
        parameters = parameters.append("pIDTienda", String(pIDTienda));
        parameters = parameters.append("pIDCategoria", String(pIDCategoria));

        return new Promise((resolve, reject) => {
            this._dataService.execGetJson(this.methodGetAllURL, parameters)
                .subscribe((res: any) => {
                    this._errorService.getResultMessage(res);
                    resolve(res);
                }, reject);
        });
    }

    /**
     * Show Message Error
     * @param {*} message 
     * @memberof ProductService
     */
    showMessageError(message: string){
        this._errorService.showMessageError(message); 
    }
}