import { Component, OnInit } from '@angular/core';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

import L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map : any
  lat : string
  lng : string
  constructor() { }

  ngOnInit(): void {

    this.map = new L.map('mapid').setView([51.505, -0.09], 13);
    let map = this.map
    L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider, // required
      style: 'bar'
    });
    map.addControl(searchControl);
    let marker = L.marker([51.505, -0.09]).addTo(map);
    map.on('move', function (e) {
      marker.setLatLng(map.getCenter())
    })
  }
  getValue() :void{
    let map = this.map
    const {lat, lng} = map.getCenter()
    this.lat = lat
    this.lng = lng
  }

}
