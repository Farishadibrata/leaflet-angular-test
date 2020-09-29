import { Component, OnInit } from '@angular/core';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

import L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const map = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider, // required
      style: 'bar'
    });
    map.addControl(searchControl);
    let marker = L.marker([51.505, -0.09]).addTo(map);
    map.on('move', function (e) {
      const coord = map.getCenter()
      marker.setLatLng(coord)
    })
  }

}
