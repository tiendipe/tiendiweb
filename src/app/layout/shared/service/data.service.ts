import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public _baseUri: string;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  private headersOctet = new HttpHeaders({
    'Content-Type': 'application/octet-stream',
  });

  constructor(private http: HttpClient) {}

  //#region Methods
  set(baseUri: string): void {
    this._baseUri = environment.serviceApi + baseUri;
  }

  /**
   *Ejecuta el metodo post, enviando como cabecera el Json
   */
  execPostJson(data?: any): Observable<Object> {
    return this.http.post(this._baseUri, data, { headers: this.headers });
  }

  execGetJson(url: string, data?: any): Observable<Object> {
    if (url) this.set(url);
    return this.http.get(this._baseUri, {
      params: data,
      headers: this.headers,
    });
  }

  execPostJsonHeader(data: any, headers: any): Observable<Object> {
    return this.http.post(this._baseUri, data, { headers: headers });
  }

  execGetOctet(data?: any): Observable<Blob> {
    return this.http.get(this._baseUri, {
      params: data,
      headers: this.headersOctet,
      responseType: 'blob',
    });
  }

  execPutJson(data?: any): Observable<Object> {
    return this.http.put(this._baseUri, data, { headers: this.headers });
  }

  execDeleteJson(data?: any): Observable<Object> {
    return this.http.delete(this._baseUri, {
      headers: this.headers,
      params: data,
    });
  }
}
