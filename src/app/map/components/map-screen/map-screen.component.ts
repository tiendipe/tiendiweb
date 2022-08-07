import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ColorMarker } from '../../../interfaces/color-marker';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss'],
})
export class MapScreenComponent implements AfterViewInit {
  @ViewChild('mapa') divMap!: ElementRef;

  mapa!: mapboxgl.Map;

  markers: ColorMarker[] = [];

  zoomLevel: number = 15;

//   center: [number, number] = [-96.10028781661208, 19.107387233247344];
  center: [number, number] = [-76.90969851120163, -12.229383974488856];

  constructor() {}

  ngAfterViewInit(): void {
    // console.log(this.center);

    this.mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    // this.mapa.on('moveend')

    this.mapa.on('moveend', () => {
      this.center = [this.mapa.getCenter().lng, this.mapa.getCenter().lat];
      // console.log(this.center);
    });

    // this.startTestMarkers('#abcdef')
    // this.startTestMarkers('#fedcba')

    // console.log(this.center);
  }

  setMarker() {
    // console.log(this.center);
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    var el = document.createElement('div');
    // el.className = 'marker';
    // el.style.backgroundImage = 'url(../../../../assets/marker.png)'
    // el.style.backgroundSize = 'cover';
    // el.style.width = '50px';
    // el.style.height = '50px';
    // el.style.borderImage = '20px';
    // el.style.borderImageWidth = '10px';
    // el.style.borderRadius = '50%'
    // el.innerHTML = `<img style = "width: 50px; object-fit: contain; padding-top: 15px;" src="../../../../assets/paypal.jpg">`
    el.innerHTML = `
    <img
      style = "
      height: 5rem;
      width: 5rem;
      border-radius: 9999px !important;
      background-color: white !important;
      padding: 5px !important;
      margin: 5px;
      object-fit: contain;
      "
      src="../../../../assets/perfil-tiendi-icono-invertido.png"/>
      `;

    // const newMarker = new mapboxgl.Marker(
    //   {
    //     draggable: true,
    //     color,
    //   }
    // )
    // .setLngLat( this.center )
    // .addTo( this.mapa )

    const newMarker = new mapboxgl.Marker(el, {
      draggable: false,
      color,
    })
      .setLngLat(this.center)
      .addTo(this.mapa)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div class = "bg-white">
    <div class = "flex flex-row">
      <img
      class = "m-3"
      src = "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
      style = "height: 3.5rem !important;
      width: 3.5rem !important;
      border-radius: 9999px !important;
      ">
      <div class = "flex flex-column m-3">
        <div class = "font-bold text-base text-900">Nombre de la tienda</div>
        <div class = "gray">a 1km</div>
      </div>
    </div>
    <hr>
    <div class = "flex flex-row my-2 mx-3">
      <i class = "pi pi-clock gray"></i><div class = "font-semibold text-sm ml-2">Atendemos 24 horas</div>
    </div>
    <div class = "flex flex-row my-2 mx-3">
        <i class = "pi pi-map-marker gray"></i><div class = "font-semibold text-sm ml-2">Descripción de la ubicación</div>
      </div>
      <div class = "flex flex-row my-2 mx-3">
        <i class = "pi pi-phone cyan"></i><div class = "font-semibold cyan text-sm ml-2">Ver teléfono</div>
      </div>
      <div class = "flex flex-row my-2 mx-3">
        <i class = "pi pi-phone cyan"></i><div class = "font-semibold cyan text-sm ml-2">Ver whatsapp</div>
      </div>
  </div>
      `)
      );

    this.markers.push({
      color,
      marker: newMarker,
    });

    // console.log('marcador puesto');
  }

  guardarmarkersLocalStorage() {
    const lngLatArr: ColorMarker[] = [];

    this.markers.forEach((m) => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color,
        centro: [lng, lat],
      });
    });

    localStorage.setItem('markers', JSON.stringify(lngLatArr));
  }

  leerLocalStorage() {
    if (!localStorage.getItem('markers')) {
      return;
    }

    const lngLatArr: ColorMarker[] = JSON.parse(
      localStorage.getItem('markers')!
    );

    lngLatArr.forEach((m) => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa);

      this.markers.push({
        marker: newMarker,
        color: m.color,
      });

      newMarker.on('dragend', () => {
        this.guardarmarkersLocalStorage();
      });
    });
  }
}
