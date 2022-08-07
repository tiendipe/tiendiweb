import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-card',
    templateUrl: './detail-card.component.html',
    styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {
    favorite: boolean = false;

    constructor(private _router: Router, private route:ActivatedRoute) { }

    ngOnInit(): void {
        // console.log(this._router.url)
        // console.log(this.route)
    }

}
