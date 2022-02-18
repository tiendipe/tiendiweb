import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor( private http: HttpClient ) { }

  getImages() {
    return this.http.get<any>('assets/photos.json')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }

}
