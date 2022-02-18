import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-detail-galery',
    templateUrl: './detail-galery.component.html',
    styleUrls: ['./detail-galery.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class DetailGaleryComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    images: any[] = [
        {
            "previewImageSrc": "../assets/perfil-tiendi-icono-invertido.png",
            "thumbnailImageSrc": "../assets/perfil-tiendi-icono-invertido.png",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "../assets/americanexpress.png",
            "thumbnailImageSrc": "../assets/americanexpress.png",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "../assets/paypal.jpg",
            "thumbnailImageSrc": "../assets/paypal.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "../assets/mastercard.png",
            "thumbnailImageSrc": "../assets/mastercard.png",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "../assets/perfil-tiendi-icono-invertido.png",
            "thumbnailImageSrc": "../assets/americanexpress.png",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "../assets/perfil-tiendi-icono-invertido.png",
            "thumbnailImageSrc": "../assets/americanexpress.png",
            "alt": "Description for Image 1",
            "title": "Title 1"
        }
    ];
}
