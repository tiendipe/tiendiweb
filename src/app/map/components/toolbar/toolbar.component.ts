import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    display: boolean = false;
    currentRoute: string = '';

    constructor(private _router: Router) { }

    ngOnInit(): void {
    }

    ingresarClick(): void{
        this._router.navigate(['/maps', {outlets: {segoutlet: ['signin']}}], {skipLocationChange: true});
        // this.currentRoute = this._router.url;
        // this._router.navigate(
        //     [`${this._router.url}`, {outlets:{segoutlet:['signin']}}], {skipLocationChange:false}
        // )
        this.display = true;
    }

}
