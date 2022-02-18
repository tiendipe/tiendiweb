import * as Mapboxgl from 'mapbox-gl';
export interface ColorMarker {
    color: string;
    marker?: Mapboxgl.Marker;
    centro?: [number, number];
}
