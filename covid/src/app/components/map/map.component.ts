import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker, tileLayer } from 'leaflet';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MarkersService } from '../../services/markers.service';
import { Position } from '../../model/position.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnInit {

  private map;
  coords: Position;


  constructor(
    public router: Router,
    private http: HttpClient,
    private markersService: MarkersService) {
    this.coords = new Position(48.858053, 2.294289); // magic number (Effeil)
  }

  ngOnInit() {
  }

  // Fonction d'initialisation du composant.
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.getPosition().then(coords => {
      console.log('accept cooord');
      this.coords = new Position(coords.lat, coords.lng);
      this.initPosition();
      this.markersService.makeVillesMarkers(this.map);
      this.markersService.makePersonMarkers(this.map);
    }).catch(err => {
      console.log('Can\'t find position');
      this.initPosition();
      this.markersService.makeVillesMarkers(this.map);
      this.markersService.makePersonMarkers(this.map);
    });
  }

  private initPosition() {
    this.map = L.map('map', {
      center: [this.coords.lat, this.coords.lng],
      zoom: 5
    });

    const tiles = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'map'
    });
    tiles.addTo(this.map);
    const myIcon = L.icon({
      iconUrl: '../../../assets/marker-icon.png'
    });
    L.marker(this.coords, { icon: myIcon }).addTo(this.map).openPopup();
  }


  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }
}
