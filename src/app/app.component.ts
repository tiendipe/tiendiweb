import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment.prod';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'tiendi';

	constructor(private primengConfig: PrimeNGConfig) {}

	ngOnInit() {
		(mapboxgl as any).accessToken = environment.mapboxKey;
		this.primengConfig.ripple = true;
	}

}
