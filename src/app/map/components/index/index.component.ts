import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor( private _router: Router ) { }
  
  currentRoute: string = '';

  ngOnInit(): void {
    this.currentRoute = this._router.url;
    this._router.navigate(
      [`${this._router.url}`, {outlets:{index:['signin']}}], {skipLocationChange:false}
    )
  }
}
