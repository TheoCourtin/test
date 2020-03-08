import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as L from 'leaflet';
import { Marker } from 'leaflet';
import { Covid } from '../shared/covid';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarkersService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  villes: string = '/assets/map.geojson';
  theCovid : Covid;

  constructor(private http: HttpClient) {
  }


  public makeVillesMarkers(map: any): void {
    this.findCovid().subscribe(message => {
      const covids = message.message;
      if(covids && covids.length > 0) {
        covids.forEach(covid => {
          const lat = covid.lat;
          const lon = covid.lon;
          const circle = L.circleMarker([lat, lon]).addTo(map);
        });
      }
    });
  }

  findCovid(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/map`);
  }
}
