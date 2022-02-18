import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    checked: boolean = false;
    currentRoute: string = '';

    constructor(private _router: Router) { }

    ngOnInit(): void {
    }

    registrar(): void {
        this._router.navigate(['/maps', {outlets: {segoutlet: ['register']}}], {skipLocationChange: true});
    }

}
