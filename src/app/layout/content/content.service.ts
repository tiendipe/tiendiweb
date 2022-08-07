import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private _router: Router){}

  navigateToList(){
    this._router.navigate(['/ecommerce/'], { skipLocationChange: false });
  }
}
